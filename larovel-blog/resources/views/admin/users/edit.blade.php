@extends('admin.layouts.main')
@section('content')
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0">Edit users</h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active">Dashboard v1</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <div class="container-fluid">
                <!-- Small boxes (Stat box) -->
                <div class="row">
                    <div class="col-6">
                        <form action="{{route('admin.user.update', $user->id)}}" method="post">
                            @csrf
                            @method('patch')
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">Edit form</h3>
                                </div>
                                <form>
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="userName">Edit user name</label>
                                            <input type="text" class="form-control" id="userName"
                                                   placeholder="Enter name" name="name" value="{{$user->name}}">
                                            @error('name')
                                            <div class="text-danger mt-2">Error, {{$message}}</div>
                                            @enderror
                                        </div>
                                        <div class="form-group">
                                            <label for="userEmail">Edit user email</label>
                                            <input type="email" class="form-control" id="userEmail"
                                                   placeholder="Enter email" name="email" value="{{$user->email}}">
                                            @error('email')
                                            <div class="text-danger mt-2">Error, {{$message}}</div>
                                            @enderror
                                        </div>
                                        <button type="submit" class="btn btn-primary">Update</button>
                                    </div>
                                </form>
                            </div>
                        </form>
                    </div>
                    <!-- ./col -->
                </div>
                <!-- /.row -->

            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
@endsection
