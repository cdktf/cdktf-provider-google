// https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/dns_managed_zones
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleDnsManagedZonesConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the project for the Google Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/dns_managed_zones#project DataGoogleDnsManagedZones#project}
  */
  readonly project?: string;
  /**
  * managed_zones block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/dns_managed_zones#managed_zones DataGoogleDnsManagedZones#managed_zones}
  */
  readonly managedZones?: DataGoogleDnsManagedZonesManagedZones[] | cdktf.IResolvable;
}
export interface DataGoogleDnsManagedZonesManagedZones {
}

export function dataGoogleDnsManagedZonesManagedZonesToTerraform(struct?: DataGoogleDnsManagedZonesManagedZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleDnsManagedZonesManagedZonesToHclTerraform(struct?: DataGoogleDnsManagedZonesManagedZones | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleDnsManagedZonesManagedZonesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleDnsManagedZonesManagedZones | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleDnsManagedZonesManagedZones | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dns_name - computed: true, optional: false, required: false
  public get dnsName() {
    return this.getStringAttribute('dns_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_zone_id - computed: true, optional: false, required: false
  public get managedZoneId() {
    return this.getNumberAttribute('managed_zone_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // project - computed: true, optional: false, required: false
  public get project() {
    return this.getStringAttribute('project');
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
}

export class DataGoogleDnsManagedZonesManagedZonesList extends cdktf.ComplexList {
  public internalValue? : DataGoogleDnsManagedZonesManagedZones[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataGoogleDnsManagedZonesManagedZonesOutputReference {
    return new DataGoogleDnsManagedZonesManagedZonesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/dns_managed_zones google_dns_managed_zones}
*/
export class DataGoogleDnsManagedZones extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dns_managed_zones";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleDnsManagedZones resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleDnsManagedZones to import
  * @param importFromId The id of the existing DataGoogleDnsManagedZones that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/dns_managed_zones#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleDnsManagedZones to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_dns_managed_zones", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/data-sources/dns_managed_zones google_dns_managed_zones} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleDnsManagedZonesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGoogleDnsManagedZonesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_dns_managed_zones',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.13.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._project = config.project;
    this._managedZones.internalValue = config.managedZones;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // project - computed: false, optional: true, required: false
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

  // managed_zones - computed: false, optional: true, required: false
  private _managedZones = new DataGoogleDnsManagedZonesManagedZonesList(this, "managed_zones", false);
  public get managedZones() {
    return this._managedZones;
  }
  public putManagedZones(value: DataGoogleDnsManagedZonesManagedZones[] | cdktf.IResolvable) {
    this._managedZones.internalValue = value;
  }
  public resetManagedZones() {
    this._managedZones.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedZonesInput() {
    return this._managedZones.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project: cdktf.stringToTerraform(this._project),
      managed_zones: cdktf.listMapper(dataGoogleDnsManagedZonesManagedZonesToTerraform, true)(this._managedZones.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed_zones: {
        value: cdktf.listMapperHcl(dataGoogleDnsManagedZonesManagedZonesToHclTerraform, true)(this._managedZones.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataGoogleDnsManagedZonesManagedZonesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
