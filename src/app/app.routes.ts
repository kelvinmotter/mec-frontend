import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { AuthGuard } from './authentication/auth-guard';
import { CustomerComponent } from './components/customer/customer.component';
import { SupplierComponent } from './components/supplier/supplier.component';
import { VehiclesComponent } from './components/vehicles/vehicles.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    {
        path: '', component: MenuComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'produtos', component: ProductComponent },
            { path: 'clientes', component: CustomerComponent },
            { path: 'fornecedores', component: SupplierComponent },
            { path: 'veiculos', component: VehiclesComponent },
        ]

    }

];
