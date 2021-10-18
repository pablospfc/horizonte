<?php


namespace App\Model;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class Clientes extends Model
{
    protected $table = "clientes";
    protected $primaryKey = "id";
    public $incrementing = true;
    public $timestamps = true;

    protected $fillable = [
        "razao_social",
        "responsavel",
        "cnpj",
        "telefone"
    ];

    public function getAll($filter) {
        error_log(var_export($filter,true));
        return self::select(
            "cl.*",
            "st.nome as status"
        )
            ->from("clientes as cl")
            ->join("status_cliente as st", "cl.id_status_cliente", "=", "st.id")
            ->when(isset($filter["razaoSocial"]), function ($query) use ($filter)  {
                return $query->where('cl.razao_social', 'like', '%'.$filter['razaoSocial'].'%');
            })
            ->when(isset($filter["responsavel"]), function ($query) use ($filter)  {
                return $query->where('cl.responsavel', 'like', '%'.$filter['responsavel'].'%');
            })
            ->when(isset($filter["cnpj"]), function ($query) use ($filter)  {
                return $query->where('cl.cnpj', $filter['cnpj']);
            })
            ->when(isset($filter["iStatus"]), function ($query) use ($filter)  {
                return $query->where('cl.id_status_cliente', $filter['iStatus']);
            })
            ->orderBy("cl.responsavel")
            ->get()
            ->toArray();
    }

    public function salvar($dados) {
        DB::transaction(function () use ($dados) {
            $idCliente = self::create([
                'razao_social' => $dados['razao_social'],
                'responsavel'  => $dados['responsavel'],
                'cnpj'         => $dados['cnpj'],
                'telefone'     => $dados['telefone']
            ])->id;
            return User::create([
               'id_perfil'  => 3,
               'id_cliente' => $idCliente,
               'name'       => $dados['responsavel'],
               'login'      => $dados['cnpj'],
               'email'      => $dados['email'],
               'password'      => bcrypt($dados['password'])
            ]);

        });
    }

    public function atualizar($dados, $id) {
        DB::transaction(function () use ($dados, $id) {
            self::where("id", $id)
                ->update($dados);

            $user = User::where("id_cliente", $id)
                ->select("id")
                ->first();

             User::where("id", $user['id'])
            ->update([
                'name'       => $dados['responsavel'],
                'login'      => $dados['cnpj'],
            ]);
        });
    }

    public function checkCNPJ($cnpj) {
        $data = self::where('cnpj', $cnpj)
            ->get()
            ->toArray();
        if (!empty($data) && is_array($data)){
            return false; //allow
        }

        return true; //decline
    }

}