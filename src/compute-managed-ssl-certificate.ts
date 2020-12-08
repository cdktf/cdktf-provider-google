// https://www.terraform.io/docs/providers/google/r/compute_managed_ssl_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeManagedSslCertificateConfig extends cdktf.TerraformMetaArguments {
  /** The unique identifier for the resource. */
  readonly certificateId?: number;
  /** An optional description of this resource. */
  readonly description?: string;
  /** Name of the resource. Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.


These are in the same namespace as the managed SSL certificates. */
  readonly name?: string;
  readonly project?: string;
  /** Enum field whose value is always 'MANAGED' - used to signal to the API
which type this is. Default value: "MANAGED" Possible values: ["MANAGED"] */
  readonly type?: string;
  /** managed block */
  readonly managed?: ComputeManagedSslCertificateManaged[];
  /** timeouts block */
  readonly timeouts?: ComputeManagedSslCertificateTimeouts;
}
export interface ComputeManagedSslCertificateManaged {
  /** Domains for which a managed SSL certificate will be valid.  Currently,
there can be up to 100 domains in this list. */
  readonly domains: string[];
}

function computeManagedSslCertificateManagedToTerraform(struct?: ComputeManagedSslCertificateManaged): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform)(struct!.domains),
  }
}

export interface ComputeManagedSslCertificateTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function computeManagedSslCertificateTimeoutsToTerraform(struct?: ComputeManagedSslCertificateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class ComputeManagedSslCertificate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeManagedSslCertificateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_compute_managed_ssl_certificate',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateId = config.certificateId;
    this._description = config.description;
    this._name = config.name;
    this._project = config.project;
    this._type = config.type;
    this._managed = config.managed;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: number;
  public get certificateId() {
    return this.getNumberAttribute('certificate_id');
  }
  public set certificateId(value: number) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: true, required: false
  private _name?: string;
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string ) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
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
    return this._project
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // subject_alternative_names - computed: true, optional: false, required: false
  public get subjectAlternativeNames() {
    return this.getListAttribute('subject_alternative_names');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string ) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // managed - computed: false, optional: true, required: false
  private _managed?: ComputeManagedSslCertificateManaged[];
  public get managed() {
    return this.interpolationForAttribute('managed') as any;
  }
  public set managed(value: ComputeManagedSslCertificateManaged[] ) {
    this._managed = value;
  }
  public resetManaged() {
    this._managed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeManagedSslCertificateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ComputeManagedSslCertificateTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_id: cdktf.numberToTerraform(this._certificateId),
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      type: cdktf.stringToTerraform(this._type),
      managed: cdktf.listMapper(computeManagedSslCertificateManagedToTerraform)(this._managed),
      timeouts: computeManagedSslCertificateTimeoutsToTerraform(this._timeouts),
    };
  }
}
