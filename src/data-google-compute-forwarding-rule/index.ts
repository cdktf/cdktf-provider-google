// https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/compute_forwarding_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeForwardingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/compute_forwarding_rule#id DataGoogleComputeForwardingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource; provided by the client when the resource is created.
  * The name must be 1-63 characters long, and comply with
  * [RFC1035](https://www.ietf.org/rfc/rfc1035.txt).
  * 
  * Specifically, the name must be 1-63 characters long and match the regular
  * expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the first
  * character must be a lowercase letter, and all following characters must
  * be a dash, lowercase letter, or digit, except the last character, which
  * cannot be a dash.
  * 
  * For Private Service Connect forwarding rules that forward traffic to Google
  * APIs, the forwarding rule name must be a 1-20 characters string with
  * lowercase letters and numbers and must start with a letter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/compute_forwarding_rule#name DataGoogleComputeForwardingRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/compute_forwarding_rule#project DataGoogleComputeForwardingRule#project}
  */
  readonly project?: string;
  /**
  * A reference to the region where the regional forwarding rule resides.
  * 
  * This field is not applicable to global forwarding rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/compute_forwarding_rule#region DataGoogleComputeForwardingRule#region}
  */
  readonly region?: string;
}
export interface DataGoogleComputeForwardingRuleServiceDirectoryRegistrations {
}

export function dataGoogleComputeForwardingRuleServiceDirectoryRegistrationsToTerraform(struct?: DataGoogleComputeForwardingRuleServiceDirectoryRegistrations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleComputeForwardingRuleServiceDirectoryRegistrations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeForwardingRuleServiceDirectoryRegistrations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class DataGoogleComputeForwardingRuleServiceDirectoryRegistrationsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference {
    return new DataGoogleComputeForwardingRuleServiceDirectoryRegistrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/compute_forwarding_rule google_compute_forwarding_rule}
*/
export class DataGoogleComputeForwardingRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_forwarding_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleComputeForwardingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleComputeForwardingRule to import
  * @param importFromId The id of the existing DataGoogleComputeForwardingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/compute_forwarding_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleComputeForwardingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_forwarding_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.11.0/docs/data-sources/compute_forwarding_rule google_compute_forwarding_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeForwardingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComputeForwardingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_forwarding_rule',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.11.0',
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
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // all_ports - computed: true, optional: false, required: false
  public get allPorts() {
    return this.getBooleanAttribute('all_ports');
  }

  // allow_global_access - computed: true, optional: false, required: false
  public get allowGlobalAccess() {
    return this.getBooleanAttribute('allow_global_access');
  }

  // allow_psc_global_access - computed: true, optional: false, required: false
  public get allowPscGlobalAccess() {
    return this.getBooleanAttribute('allow_psc_global_access');
  }

  // backend_service - computed: true, optional: false, required: false
  public get backendService() {
    return this.getStringAttribute('backend_service');
  }

  // base_forwarding_rule - computed: true, optional: false, required: false
  public get baseForwardingRule() {
    return this.getStringAttribute('base_forwarding_rule');
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_protocol - computed: true, optional: false, required: false
  public get ipProtocol() {
    return this.getStringAttribute('ip_protocol');
  }

  // ip_version - computed: true, optional: false, required: false
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }

  // is_mirroring_collector - computed: true, optional: false, required: false
  public get isMirroringCollector() {
    return this.getBooleanAttribute('is_mirroring_collector');
  }

  // label_fingerprint - computed: true, optional: false, required: false
  public get labelFingerprint() {
    return this.getStringAttribute('label_fingerprint');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // load_balancing_scheme - computed: true, optional: false, required: false
  public get loadBalancingScheme() {
    return this.getStringAttribute('load_balancing_scheme');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network - computed: true, optional: false, required: false
  public get network() {
    return this.getStringAttribute('network');
  }

  // network_tier - computed: true, optional: false, required: false
  public get networkTier() {
    return this.getStringAttribute('network_tier');
  }

  // no_automate_dns_zone - computed: true, optional: false, required: false
  public get noAutomateDnsZone() {
    return this.getBooleanAttribute('no_automate_dns_zone');
  }

  // port_range - computed: true, optional: false, required: false
  public get portRange() {
    return this.getStringAttribute('port_range');
  }

  // ports - computed: true, optional: false, required: false
  public get ports() {
    return cdktf.Fn.tolist(this.getListAttribute('ports'));
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

  // psc_connection_id - computed: true, optional: false, required: false
  public get pscConnectionId() {
    return this.getStringAttribute('psc_connection_id');
  }

  // psc_connection_status - computed: true, optional: false, required: false
  public get pscConnectionStatus() {
    return this.getStringAttribute('psc_connection_status');
  }

  // recreate_closed_psc - computed: true, optional: false, required: false
  public get recreateClosedPsc() {
    return this.getBooleanAttribute('recreate_closed_psc');
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // service_directory_registrations - computed: true, optional: false, required: false
  private _serviceDirectoryRegistrations = new DataGoogleComputeForwardingRuleServiceDirectoryRegistrationsList(this, "service_directory_registrations", false);
  public get serviceDirectoryRegistrations() {
    return this._serviceDirectoryRegistrations;
  }

  // service_label - computed: true, optional: false, required: false
  public get serviceLabel() {
    return this.getStringAttribute('service_label');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // source_ip_ranges - computed: true, optional: false, required: false
  public get sourceIpRanges() {
    return this.getListAttribute('source_ip_ranges');
  }

  // subnetwork - computed: true, optional: false, required: false
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
    };
  }
}
