// https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate_map_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateManagerCertificateMapEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of Certificates defines for the given hostname.
There can be defined up to fifteen certificates in each Certificate Map Entry.
Each certificate must match pattern projects/*\/locations/*\/certificates/*.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate_map_entry#certificates CertificateManagerCertificateMapEntry#certificates}
  */
  readonly certificates: string[];
  /**
  * A human-readable description of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate_map_entry#description CertificateManagerCertificateMapEntry#description}
  */
  readonly description?: string;
  /**
  * A Hostname (FQDN, e.g. example.com) or a wildcard hostname expression (*.example.com)
for a set of hostnames with common suffix. Used as Server Name Indication (SNI) for
selecting a proper certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate_map_entry#hostname CertificateManagerCertificateMapEntry#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate_map_entry#id CertificateManagerCertificateMapEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of labels associated with a Certificate Map Entry.
An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate_map_entry#labels CertificateManagerCertificateMapEntry#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * A map entry that is inputted into the cetrificate map
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate_map_entry#map CertificateManagerCertificateMapEntry#map}
  */
  readonly map: string;
  /**
  * A predefined matcher for particular cases, other than SNI selection
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate_map_entry#matcher CertificateManagerCertificateMapEntry#matcher}
  */
  readonly matcher?: string;
  /**
  * A user-defined name of the Certificate Map Entry. Certificate Map Entry 
names must be unique globally and match pattern 
'projects/*\/locations/*\/certificateMaps/*\/certificateMapEntries/*'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate_map_entry#name CertificateManagerCertificateMapEntry#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate_map_entry#project CertificateManagerCertificateMapEntry#project}
  */
  readonly project?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate_map_entry#timeouts CertificateManagerCertificateMapEntry#timeouts}
  */
  readonly timeouts?: CertificateManagerCertificateMapEntryTimeouts;
}
export interface CertificateManagerCertificateMapEntryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate_map_entry#create CertificateManagerCertificateMapEntry#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate_map_entry#delete CertificateManagerCertificateMapEntry#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate_map_entry#update CertificateManagerCertificateMapEntry#update}
  */
  readonly update?: string;
}

export function certificateManagerCertificateMapEntryTimeoutsToTerraform(struct?: CertificateManagerCertificateMapEntryTimeoutsOutputReference | CertificateManagerCertificateMapEntryTimeouts | cdktf.IResolvable): any {
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

export class CertificateManagerCertificateMapEntryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificateManagerCertificateMapEntryTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificateManagerCertificateMapEntryTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate_map_entry google_certificate_manager_certificate_map_entry}
*/
export class CertificateManagerCertificateMapEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_certificate_manager_certificate_map_entry";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate_map_entry google_certificate_manager_certificate_map_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateManagerCertificateMapEntryConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateManagerCertificateMapEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'google_certificate_manager_certificate_map_entry',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._certificates = config.certificates;
    this._description = config.description;
    this._hostname = config.hostname;
    this._id = config.id;
    this._labels = config.labels;
    this._map = config.map;
    this._matcher = config.matcher;
    this._name = config.name;
    this._project = config.project;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificates - computed: false, optional: false, required: true
  private _certificates?: string[]; 
  public get certificates() {
    return this.getListAttribute('certificates');
  }
  public set certificates(value: string[]) {
    this._certificates = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // map - computed: false, optional: false, required: true
  private _map?: string; 
  public get map() {
    return this.getStringAttribute('map');
  }
  public set map(value: string) {
    this._map = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
  }

  // matcher - computed: false, optional: true, required: false
  private _matcher?: string; 
  public get matcher() {
    return this.getStringAttribute('matcher');
  }
  public set matcher(value: string) {
    this._matcher = value;
  }
  public resetMatcher() {
    this._matcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matcherInput() {
    return this._matcher;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CertificateManagerCertificateMapEntryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CertificateManagerCertificateMapEntryTimeouts) {
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
      certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificates),
      description: cdktf.stringToTerraform(this._description),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      map: cdktf.stringToTerraform(this._map),
      matcher: cdktf.stringToTerraform(this._matcher),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      timeouts: certificateManagerCertificateMapEntryTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
