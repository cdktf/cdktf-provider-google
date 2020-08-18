// https://www.terraform.io/docs/providers/google/r/compute_ssl_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ComputeSslCertificateConfig extends TerraformMetaArguments {
  /** The certificate in PEM format.
The certificate chain must be no greater than 5 certs long.
The chain must include at least one intermediate cert. */
  readonly certificate: string;
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
  readonly namePrefix?: string;
  /** The write-only private key in PEM format. */
  readonly privateKey: string;
  readonly project?: string;
  /** timeouts block */
  readonly timeouts?: ComputeSslCertificateTimeouts;
}
export interface ComputeSslCertificateTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

// Resource

export class ComputeSslCertificate extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ComputeSslCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_ssl_certificate',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificate = config.certificate;
    this._description = config.description;
    this._name = config.name;
    this._namePrefix = config.namePrefix;
    this._privateKey = config.privateKey;
    this._project = config.project;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate - computed: false, optional: false, required: true
  private _certificate: string;
  public get certificate() {
    return this._certificate;
  }
  public set certificate(value: string) {
    this._certificate = value;
  }

  // certificate_id - computed: true, optional: false, required: true
  public get certificateId() {
    return this.getNumberAttribute('certificate_id');
  }

  // creation_timestamp - computed: true, optional: false, required: true
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string;
  public get name() {
    return this._name ?? this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }

  // name_prefix - computed: true, optional: true, required: false
  private _namePrefix?: string;
  public get namePrefix() {
    return this._namePrefix ?? this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string | undefined) {
    this._namePrefix = value;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey: string;
  public get privateKey() {
    return this._privateKey;
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // self_link - computed: true, optional: false, required: true
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: ComputeSslCertificateTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: ComputeSslCertificateTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate: this._certificate,
      description: this._description,
      name: this._name,
      name_prefix: this._namePrefix,
      private_key: this._privateKey,
      project: this._project,
      timeouts: this._timeouts,
    };
  }
}
