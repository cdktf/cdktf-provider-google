/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_network_peering_routes_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeNetworkPeeringRoutesConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to export the custom routes to the peer network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_network_peering_routes_config#export_custom_routes ComputeNetworkPeeringRoutesConfig#export_custom_routes}
  */
  readonly exportCustomRoutes: boolean | cdktf.IResolvable;
  /**
  * Whether subnet routes with public IP range are exported.
  * IPv4 special-use ranges are always exported to peers and
  * are not controlled by this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_network_peering_routes_config#export_subnet_routes_with_public_ip ComputeNetworkPeeringRoutesConfig#export_subnet_routes_with_public_ip}
  */
  readonly exportSubnetRoutesWithPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_network_peering_routes_config#id ComputeNetworkPeeringRoutesConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether to import the custom routes to the peer network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_network_peering_routes_config#import_custom_routes ComputeNetworkPeeringRoutesConfig#import_custom_routes}
  */
  readonly importCustomRoutes: boolean | cdktf.IResolvable;
  /**
  * Whether subnet routes with public IP range are imported.
  * IPv4 special-use ranges are always imported from peers and
  * are not controlled by this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_network_peering_routes_config#import_subnet_routes_with_public_ip ComputeNetworkPeeringRoutesConfig#import_subnet_routes_with_public_ip}
  */
  readonly importSubnetRoutesWithPublicIp?: boolean | cdktf.IResolvable;
  /**
  * The name of the primary network for the peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_network_peering_routes_config#network ComputeNetworkPeeringRoutesConfig#network}
  */
  readonly network: string;
  /**
  * Name of the peering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_network_peering_routes_config#peering ComputeNetworkPeeringRoutesConfig#peering}
  */
  readonly peering: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_network_peering_routes_config#project ComputeNetworkPeeringRoutesConfig#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_network_peering_routes_config#timeouts ComputeNetworkPeeringRoutesConfig#timeouts}
  */
  readonly timeouts?: ComputeNetworkPeeringRoutesConfigTimeouts;
}
export interface ComputeNetworkPeeringRoutesConfigTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_network_peering_routes_config#create ComputeNetworkPeeringRoutesConfig#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_network_peering_routes_config#delete ComputeNetworkPeeringRoutesConfig#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_network_peering_routes_config#update ComputeNetworkPeeringRoutesConfig#update}
  */
  readonly update?: string;
}

export function computeNetworkPeeringRoutesConfigTimeoutsToTerraform(struct?: ComputeNetworkPeeringRoutesConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function computeNetworkPeeringRoutesConfigTimeoutsToHclTerraform(struct?: ComputeNetworkPeeringRoutesConfigTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeNetworkPeeringRoutesConfigTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeNetworkPeeringRoutesConfigTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_network_peering_routes_config google_compute_network_peering_routes_config}
*/
export class ComputeNetworkPeeringRoutesConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_network_peering_routes_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeNetworkPeeringRoutesConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeNetworkPeeringRoutesConfig to import
  * @param importFromId The id of the existing ComputeNetworkPeeringRoutesConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_network_peering_routes_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeNetworkPeeringRoutesConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_network_peering_routes_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/compute_network_peering_routes_config google_compute_network_peering_routes_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeNetworkPeeringRoutesConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeNetworkPeeringRoutesConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_network_peering_routes_config',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.35.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._exportCustomRoutes = config.exportCustomRoutes;
    this._exportSubnetRoutesWithPublicIp = config.exportSubnetRoutesWithPublicIp;
    this._id = config.id;
    this._importCustomRoutes = config.importCustomRoutes;
    this._importSubnetRoutesWithPublicIp = config.importSubnetRoutesWithPublicIp;
    this._network = config.network;
    this._peering = config.peering;
    this._project = config.project;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // export_custom_routes - computed: false, optional: false, required: true
  private _exportCustomRoutes?: boolean | cdktf.IResolvable; 
  public get exportCustomRoutes() {
    return this.getBooleanAttribute('export_custom_routes');
  }
  public set exportCustomRoutes(value: boolean | cdktf.IResolvable) {
    this._exportCustomRoutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exportCustomRoutesInput() {
    return this._exportCustomRoutes;
  }

  // export_subnet_routes_with_public_ip - computed: true, optional: true, required: false
  private _exportSubnetRoutesWithPublicIp?: boolean | cdktf.IResolvable; 
  public get exportSubnetRoutesWithPublicIp() {
    return this.getBooleanAttribute('export_subnet_routes_with_public_ip');
  }
  public set exportSubnetRoutesWithPublicIp(value: boolean | cdktf.IResolvable) {
    this._exportSubnetRoutesWithPublicIp = value;
  }
  public resetExportSubnetRoutesWithPublicIp() {
    this._exportSubnetRoutesWithPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportSubnetRoutesWithPublicIpInput() {
    return this._exportSubnetRoutesWithPublicIp;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // import_custom_routes - computed: false, optional: false, required: true
  private _importCustomRoutes?: boolean | cdktf.IResolvable; 
  public get importCustomRoutes() {
    return this.getBooleanAttribute('import_custom_routes');
  }
  public set importCustomRoutes(value: boolean | cdktf.IResolvable) {
    this._importCustomRoutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importCustomRoutesInput() {
    return this._importCustomRoutes;
  }

  // import_subnet_routes_with_public_ip - computed: true, optional: true, required: false
  private _importSubnetRoutesWithPublicIp?: boolean | cdktf.IResolvable; 
  public get importSubnetRoutesWithPublicIp() {
    return this.getBooleanAttribute('import_subnet_routes_with_public_ip');
  }
  public set importSubnetRoutesWithPublicIp(value: boolean | cdktf.IResolvable) {
    this._importSubnetRoutesWithPublicIp = value;
  }
  public resetImportSubnetRoutesWithPublicIp() {
    this._importSubnetRoutesWithPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importSubnetRoutesWithPublicIpInput() {
    return this._importSubnetRoutesWithPublicIp;
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // peering - computed: false, optional: false, required: true
  private _peering?: string; 
  public get peering() {
    return this.getStringAttribute('peering');
  }
  public set peering(value: string) {
    this._peering = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peeringInput() {
    return this._peering;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeNetworkPeeringRoutesConfigTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeNetworkPeeringRoutesConfigTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      export_custom_routes: cdktf.booleanToTerraform(this._exportCustomRoutes),
      export_subnet_routes_with_public_ip: cdktf.booleanToTerraform(this._exportSubnetRoutesWithPublicIp),
      id: cdktf.stringToTerraform(this._id),
      import_custom_routes: cdktf.booleanToTerraform(this._importCustomRoutes),
      import_subnet_routes_with_public_ip: cdktf.booleanToTerraform(this._importSubnetRoutesWithPublicIp),
      network: cdktf.stringToTerraform(this._network),
      peering: cdktf.stringToTerraform(this._peering),
      project: cdktf.stringToTerraform(this._project),
      timeouts: computeNetworkPeeringRoutesConfigTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      export_custom_routes: {
        value: cdktf.booleanToHclTerraform(this._exportCustomRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      export_subnet_routes_with_public_ip: {
        value: cdktf.booleanToHclTerraform(this._exportSubnetRoutesWithPublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_custom_routes: {
        value: cdktf.booleanToHclTerraform(this._importCustomRoutes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      import_subnet_routes_with_public_ip: {
        value: cdktf.booleanToHclTerraform(this._importSubnetRoutesWithPublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      peering: {
        value: cdktf.stringToHclTerraform(this._peering),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: computeNetworkPeeringRoutesConfigTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeNetworkPeeringRoutesConfigTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
