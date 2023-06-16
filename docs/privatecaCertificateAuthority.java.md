# `google_privateca_certificate_authority`

Refer to the Terraform Registory for docs: [`google_privateca_certificate_authority`](https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority).

# `privatecaCertificateAuthority` Submodule <a name="`privatecaCertificateAuthority` Submodule" id="@cdktf/provider-google.privatecaCertificateAuthority"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatecaCertificateAuthority <a name="PrivatecaCertificateAuthority" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority google_privateca_certificate_authority}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthority;

PrivatecaCertificateAuthority.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .certificateAuthorityId(java.lang.String)
    .config(PrivatecaCertificateAuthorityConfigA)
    .keySpec(PrivatecaCertificateAuthorityKeySpec)
    .location(java.lang.String)
    .pool(java.lang.String)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .desiredState(java.lang.String)
//  .gcsBucket(java.lang.String)
//  .id(java.lang.String)
//  .ignoreActiveCertificatesOnDeletion(java.lang.Boolean)
//  .ignoreActiveCertificatesOnDeletion(IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .lifetime(java.lang.String)
//  .pemCaCertificate(java.lang.String)
//  .project(java.lang.String)
//  .skipGracePeriod(java.lang.Boolean)
//  .skipGracePeriod(IResolvable)
//  .subordinateConfig(PrivatecaCertificateAuthoritySubordinateConfig)
//  .timeouts(PrivatecaCertificateAuthorityTimeouts)
//  .type(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.certificateAuthorityId">certificateAuthorityId</a></code> | <code>java.lang.String</code> | The user provided Resource ID for this Certificate Authority. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA">PrivatecaCertificateAuthorityConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.keySpec">keySpec</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec">PrivatecaCertificateAuthorityKeySpec</a></code> | key_spec block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Location of the CertificateAuthority. A full list of valid locations can be found by running 'gcloud privateca locations list'. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.pool">pool</a></code> | <code>java.lang.String</code> | The name of the CaPool this Certificate Authority belongs to. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to allow Terraform to destroy the CertificateAuthority. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Desired state of the CertificateAuthority. Set this field to 'STAGED' to create a 'STAGED' root CA. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.gcsBucket">gcsBucket</a></code> | <code>java.lang.String</code> | The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#id PrivatecaCertificateAuthority#id}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.ignoreActiveCertificatesOnDeletion">ignoreActiveCertificatesOnDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This field allows the CA to be deleted even if the CA has active certs. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.lifetime">lifetime</a></code> | <code>java.lang.String</code> | The desired lifetime of the CA certificate. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.pemCaCertificate">pemCaCertificate</a></code> | <code>java.lang.String</code> | The signed CA certificate issued from the subordinated CA's CSR. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#project PrivatecaCertificateAuthority#project}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.skipGracePeriod">skipGracePeriod</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this flag is set, the Certificate Authority will be deleted as soon as possible without a 30-day grace period where undeletion would have been allowed. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.subordinateConfig">subordinateConfig</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig">PrivatecaCertificateAuthoritySubordinateConfig</a></code> | subordinate_config block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts">PrivatecaCertificateAuthorityTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | The Type of this CertificateAuthority. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.certificateAuthorityId"></a>

- *Type:* java.lang.String

The user provided Resource ID for this Certificate Authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#certificate_authority_id PrivatecaCertificateAuthority#certificate_authority_id}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA">PrivatecaCertificateAuthorityConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#config PrivatecaCertificateAuthority#config}

---

##### `keySpec`<sup>Required</sup> <a name="keySpec" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.keySpec"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec">PrivatecaCertificateAuthorityKeySpec</a>

key_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#key_spec PrivatecaCertificateAuthority#key_spec}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Location of the CertificateAuthority. A full list of valid locations can be found by running 'gcloud privateca locations list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#location PrivatecaCertificateAuthority#location}

---

##### `pool`<sup>Required</sup> <a name="pool" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.pool"></a>

- *Type:* java.lang.String

The name of the CaPool this Certificate Authority belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#pool PrivatecaCertificateAuthority#pool}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.deletionProtection"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to allow Terraform to destroy the CertificateAuthority.

Unless this field is set to false
in Terraform state, a 'terraform destroy' or 'terraform apply' that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#deletion_protection PrivatecaCertificateAuthority#deletion_protection}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.desiredState"></a>

- *Type:* java.lang.String

Desired state of the CertificateAuthority. Set this field to 'STAGED' to create a 'STAGED' root CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#desired_state PrivatecaCertificateAuthority#desired_state}

---

##### `gcsBucket`<sup>Optional</sup> <a name="gcsBucket" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.gcsBucket"></a>

- *Type:* java.lang.String

The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs.

This must be a bucket name, without any prefixes
(such as 'gs://') or suffixes (such as '.googleapis.com'). For example, to use a bucket named
my-bucket, you would simply specify 'my-bucket'. If not specified, a managed bucket will be
created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#gcs_bucket PrivatecaCertificateAuthority#gcs_bucket}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#id PrivatecaCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreActiveCertificatesOnDeletion`<sup>Optional</sup> <a name="ignoreActiveCertificatesOnDeletion" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.ignoreActiveCertificatesOnDeletion"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This field allows the CA to be deleted even if the CA has active certs.

Active certs include both unrevoked and unexpired certs.
Use with care. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#ignore_active_certificates_on_deletion PrivatecaCertificateAuthority#ignore_active_certificates_on_deletion}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels with user-defined metadata.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#labels PrivatecaCertificateAuthority#labels}

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.lifetime"></a>

- *Type:* java.lang.String

The desired lifetime of the CA certificate.

Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#lifetime PrivatecaCertificateAuthority#lifetime}

---

##### `pemCaCertificate`<sup>Optional</sup> <a name="pemCaCertificate" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.pemCaCertificate"></a>

- *Type:* java.lang.String

The signed CA certificate issued from the subordinated CA's CSR.

This is needed when activating the subordiante CA with a third party issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#pem_ca_certificate PrivatecaCertificateAuthority#pem_ca_certificate}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#project PrivatecaCertificateAuthority#project}.

---

##### `skipGracePeriod`<sup>Optional</sup> <a name="skipGracePeriod" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.skipGracePeriod"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this flag is set, the Certificate Authority will be deleted as soon as possible without a 30-day grace period where undeletion would have been allowed.

If you proceed, there will be no way to recover this CA.
Use with care. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#skip_grace_period PrivatecaCertificateAuthority#skip_grace_period}

---

##### `subordinateConfig`<sup>Optional</sup> <a name="subordinateConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.subordinateConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig">PrivatecaCertificateAuthoritySubordinateConfig</a>

subordinate_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#subordinate_config PrivatecaCertificateAuthority#subordinate_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts">PrivatecaCertificateAuthorityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#timeouts PrivatecaCertificateAuthority#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.Initializer.parameter.type"></a>

- *Type:* java.lang.String

The Type of this CertificateAuthority.

~> **Note:** For 'SUBORDINATE' Certificate Authorities, they need to
be activated before they can issue certificates. Default value: "SELF_SIGNED" Possible values: ["SELF_SIGNED", "SUBORDINATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#type PrivatecaCertificateAuthority#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putKeySpec">putKeySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putSubordinateConfig">putSubordinateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetDeletionProtection">resetDeletionProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetGcsBucket">resetGcsBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetIgnoreActiveCertificatesOnDeletion">resetIgnoreActiveCertificatesOnDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetLifetime">resetLifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetPemCaCertificate">resetPemCaCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetSkipGracePeriod">resetSkipGracePeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetSubordinateConfig">resetSubordinateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetType">resetType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putConfig` <a name="putConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putConfig"></a>

```java
public void putConfig(PrivatecaCertificateAuthorityConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA">PrivatecaCertificateAuthorityConfigA</a>

---

##### `putKeySpec` <a name="putKeySpec" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putKeySpec"></a>

```java
public void putKeySpec(PrivatecaCertificateAuthorityKeySpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putKeySpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec">PrivatecaCertificateAuthorityKeySpec</a>

---

##### `putSubordinateConfig` <a name="putSubordinateConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putSubordinateConfig"></a>

```java
public void putSubordinateConfig(PrivatecaCertificateAuthoritySubordinateConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putSubordinateConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig">PrivatecaCertificateAuthoritySubordinateConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putTimeouts"></a>

```java
public void putTimeouts(PrivatecaCertificateAuthorityTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts">PrivatecaCertificateAuthorityTimeouts</a>

---

##### `resetDeletionProtection` <a name="resetDeletionProtection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetDeletionProtection"></a>

```java
public void resetDeletionProtection()
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetDesiredState"></a>

```java
public void resetDesiredState()
```

##### `resetGcsBucket` <a name="resetGcsBucket" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetGcsBucket"></a>

```java
public void resetGcsBucket()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetId"></a>

```java
public void resetId()
```

##### `resetIgnoreActiveCertificatesOnDeletion` <a name="resetIgnoreActiveCertificatesOnDeletion" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetIgnoreActiveCertificatesOnDeletion"></a>

```java
public void resetIgnoreActiveCertificatesOnDeletion()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLifetime` <a name="resetLifetime" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetLifetime"></a>

```java
public void resetLifetime()
```

##### `resetPemCaCertificate` <a name="resetPemCaCertificate" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetPemCaCertificate"></a>

```java
public void resetPemCaCertificate()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetProject"></a>

```java
public void resetProject()
```

##### `resetSkipGracePeriod` <a name="resetSkipGracePeriod" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetSkipGracePeriod"></a>

```java
public void resetSkipGracePeriod()
```

##### `resetSubordinateConfig` <a name="resetSubordinateConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetSubordinateConfig"></a>

```java
public void resetSubordinateConfig()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.resetType"></a>

```java
public void resetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthority;

PrivatecaCertificateAuthority.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthority;

PrivatecaCertificateAuthority.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthority;

PrivatecaCertificateAuthority.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.accessUrls">accessUrls</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList">PrivatecaCertificateAuthorityAccessUrlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference">PrivatecaCertificateAuthorityConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.keySpec">keySpec</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference">PrivatecaCertificateAuthorityKeySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.pemCaCertificates">pemCaCertificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.subordinateConfig">subordinateConfig</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference">PrivatecaCertificateAuthoritySubordinateConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference">PrivatecaCertificateAuthorityTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.certificateAuthorityIdInput">certificateAuthorityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.configInput">configInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA">PrivatecaCertificateAuthorityConfigA</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.deletionProtectionInput">deletionProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.desiredStateInput">desiredStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.gcsBucketInput">gcsBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.ignoreActiveCertificatesOnDeletionInput">ignoreActiveCertificatesOnDeletionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.keySpecInput">keySpecInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec">PrivatecaCertificateAuthorityKeySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.lifetimeInput">lifetimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.pemCaCertificateInput">pemCaCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.poolInput">poolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.skipGracePeriodInput">skipGracePeriodInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.subordinateConfigInput">subordinateConfigInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig">PrivatecaCertificateAuthoritySubordinateConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts">PrivatecaCertificateAuthorityTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.gcsBucket">gcsBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.ignoreActiveCertificatesOnDeletion">ignoreActiveCertificatesOnDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.lifetime">lifetime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.pemCaCertificate">pemCaCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.pool">pool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.skipGracePeriod">skipGracePeriod</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessUrls`<sup>Required</sup> <a name="accessUrls" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.accessUrls"></a>

```java
public PrivatecaCertificateAuthorityAccessUrlsList getAccessUrls();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList">PrivatecaCertificateAuthorityAccessUrlsList</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.config"></a>

```java
public PrivatecaCertificateAuthorityConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference">PrivatecaCertificateAuthorityConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `keySpec`<sup>Required</sup> <a name="keySpec" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.keySpec"></a>

```java
public PrivatecaCertificateAuthorityKeySpecOutputReference getKeySpec();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference">PrivatecaCertificateAuthorityKeySpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pemCaCertificates`<sup>Required</sup> <a name="pemCaCertificates" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.pemCaCertificates"></a>

```java
public java.util.List<java.lang.String> getPemCaCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subordinateConfig`<sup>Required</sup> <a name="subordinateConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.subordinateConfig"></a>

```java
public PrivatecaCertificateAuthoritySubordinateConfigOutputReference getSubordinateConfig();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference">PrivatecaCertificateAuthoritySubordinateConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.timeouts"></a>

```java
public PrivatecaCertificateAuthorityTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference">PrivatecaCertificateAuthorityTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `certificateAuthorityIdInput`<sup>Optional</sup> <a name="certificateAuthorityIdInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.certificateAuthorityIdInput"></a>

```java
public java.lang.String getCertificateAuthorityIdInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.configInput"></a>

```java
public PrivatecaCertificateAuthorityConfigA getConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA">PrivatecaCertificateAuthorityConfigA</a>

---

##### `deletionProtectionInput`<sup>Optional</sup> <a name="deletionProtectionInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.deletionProtectionInput"></a>

```java
public java.lang.Object getDeletionProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.desiredStateInput"></a>

```java
public java.lang.String getDesiredStateInput();
```

- *Type:* java.lang.String

---

##### `gcsBucketInput`<sup>Optional</sup> <a name="gcsBucketInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.gcsBucketInput"></a>

```java
public java.lang.String getGcsBucketInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ignoreActiveCertificatesOnDeletionInput`<sup>Optional</sup> <a name="ignoreActiveCertificatesOnDeletionInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.ignoreActiveCertificatesOnDeletionInput"></a>

```java
public java.lang.Object getIgnoreActiveCertificatesOnDeletionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keySpecInput`<sup>Optional</sup> <a name="keySpecInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.keySpecInput"></a>

```java
public PrivatecaCertificateAuthorityKeySpec getKeySpecInput();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec">PrivatecaCertificateAuthorityKeySpec</a>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.lifetimeInput"></a>

```java
public java.lang.String getLifetimeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `pemCaCertificateInput`<sup>Optional</sup> <a name="pemCaCertificateInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.pemCaCertificateInput"></a>

```java
public java.lang.String getPemCaCertificateInput();
```

- *Type:* java.lang.String

---

##### `poolInput`<sup>Optional</sup> <a name="poolInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.poolInput"></a>

```java
public java.lang.String getPoolInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `skipGracePeriodInput`<sup>Optional</sup> <a name="skipGracePeriodInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.skipGracePeriodInput"></a>

```java
public java.lang.Object getSkipGracePeriodInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `subordinateConfigInput`<sup>Optional</sup> <a name="subordinateConfigInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.subordinateConfigInput"></a>

```java
public PrivatecaCertificateAuthoritySubordinateConfig getSubordinateConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig">PrivatecaCertificateAuthoritySubordinateConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts">PrivatecaCertificateAuthorityTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.certificateAuthorityId"></a>

```java
public java.lang.String getCertificateAuthorityId();
```

- *Type:* java.lang.String

---

##### `deletionProtection`<sup>Required</sup> <a name="deletionProtection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

---

##### `gcsBucket`<sup>Required</sup> <a name="gcsBucket" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.gcsBucket"></a>

```java
public java.lang.String getGcsBucket();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ignoreActiveCertificatesOnDeletion`<sup>Required</sup> <a name="ignoreActiveCertificatesOnDeletion" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.ignoreActiveCertificatesOnDeletion"></a>

```java
public java.lang.Object getIgnoreActiveCertificatesOnDeletion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.lifetime"></a>

```java
public java.lang.String getLifetime();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `pemCaCertificate`<sup>Required</sup> <a name="pemCaCertificate" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.pemCaCertificate"></a>

```java
public java.lang.String getPemCaCertificate();
```

- *Type:* java.lang.String

---

##### `pool`<sup>Required</sup> <a name="pool" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.pool"></a>

```java
public java.lang.String getPool();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `skipGracePeriod`<sup>Required</sup> <a name="skipGracePeriod" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.skipGracePeriod"></a>

```java
public java.lang.Object getSkipGracePeriod();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthority.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatecaCertificateAuthorityAccessUrls <a name="PrivatecaCertificateAuthorityAccessUrls" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityAccessUrls;

PrivatecaCertificateAuthorityAccessUrls.builder()
    .build();
```


### PrivatecaCertificateAuthorityConfig <a name="PrivatecaCertificateAuthorityConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfig;

PrivatecaCertificateAuthorityConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .certificateAuthorityId(java.lang.String)
    .config(PrivatecaCertificateAuthorityConfigA)
    .keySpec(PrivatecaCertificateAuthorityKeySpec)
    .location(java.lang.String)
    .pool(java.lang.String)
//  .deletionProtection(java.lang.Boolean)
//  .deletionProtection(IResolvable)
//  .desiredState(java.lang.String)
//  .gcsBucket(java.lang.String)
//  .id(java.lang.String)
//  .ignoreActiveCertificatesOnDeletion(java.lang.Boolean)
//  .ignoreActiveCertificatesOnDeletion(IResolvable)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .lifetime(java.lang.String)
//  .pemCaCertificate(java.lang.String)
//  .project(java.lang.String)
//  .skipGracePeriod(java.lang.Boolean)
//  .skipGracePeriod(IResolvable)
//  .subordinateConfig(PrivatecaCertificateAuthoritySubordinateConfig)
//  .timeouts(PrivatecaCertificateAuthorityTimeouts)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>java.lang.String</code> | The user provided Resource ID for this Certificate Authority. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.config">config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA">PrivatecaCertificateAuthorityConfigA</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.keySpec">keySpec</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec">PrivatecaCertificateAuthorityKeySpec</a></code> | key_spec block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.location">location</a></code> | <code>java.lang.String</code> | Location of the CertificateAuthority. A full list of valid locations can be found by running 'gcloud privateca locations list'. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.pool">pool</a></code> | <code>java.lang.String</code> | The name of the CaPool this Certificate Authority belongs to. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.deletionProtection">deletionProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether or not to allow Terraform to destroy the CertificateAuthority. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Desired state of the CertificateAuthority. Set this field to 'STAGED' to create a 'STAGED' root CA. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.gcsBucket">gcsBucket</a></code> | <code>java.lang.String</code> | The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#id PrivatecaCertificateAuthority#id}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.ignoreActiveCertificatesOnDeletion">ignoreActiveCertificatesOnDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This field allows the CA to be deleted even if the CA has active certs. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.lifetime">lifetime</a></code> | <code>java.lang.String</code> | The desired lifetime of the CA certificate. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.pemCaCertificate">pemCaCertificate</a></code> | <code>java.lang.String</code> | The signed CA certificate issued from the subordinated CA's CSR. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#project PrivatecaCertificateAuthority#project}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.skipGracePeriod">skipGracePeriod</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | If this flag is set, the Certificate Authority will be deleted as soon as possible without a 30-day grace period where undeletion would have been allowed. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.subordinateConfig">subordinateConfig</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig">PrivatecaCertificateAuthoritySubordinateConfig</a></code> | subordinate_config block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts">PrivatecaCertificateAuthorityTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.type">type</a></code> | <code>java.lang.String</code> | The Type of this CertificateAuthority. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.certificateAuthorityId"></a>

```java
public java.lang.String getCertificateAuthorityId();
```

- *Type:* java.lang.String

The user provided Resource ID for this Certificate Authority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#certificate_authority_id PrivatecaCertificateAuthority#certificate_authority_id}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.config"></a>

```java
public PrivatecaCertificateAuthorityConfigA getConfig();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA">PrivatecaCertificateAuthorityConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#config PrivatecaCertificateAuthority#config}

---

##### `keySpec`<sup>Required</sup> <a name="keySpec" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.keySpec"></a>

```java
public PrivatecaCertificateAuthorityKeySpec getKeySpec();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec">PrivatecaCertificateAuthorityKeySpec</a>

key_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#key_spec PrivatecaCertificateAuthority#key_spec}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Location of the CertificateAuthority. A full list of valid locations can be found by running 'gcloud privateca locations list'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#location PrivatecaCertificateAuthority#location}

---

##### `pool`<sup>Required</sup> <a name="pool" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.pool"></a>

```java
public java.lang.String getPool();
```

- *Type:* java.lang.String

The name of the CaPool this Certificate Authority belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#pool PrivatecaCertificateAuthority#pool}

---

##### `deletionProtection`<sup>Optional</sup> <a name="deletionProtection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.deletionProtection"></a>

```java
public java.lang.Object getDeletionProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether or not to allow Terraform to destroy the CertificateAuthority.

Unless this field is set to false
in Terraform state, a 'terraform destroy' or 'terraform apply' that would delete the instance will fail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#deletion_protection PrivatecaCertificateAuthority#deletion_protection}

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

Desired state of the CertificateAuthority. Set this field to 'STAGED' to create a 'STAGED' root CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#desired_state PrivatecaCertificateAuthority#desired_state}

---

##### `gcsBucket`<sup>Optional</sup> <a name="gcsBucket" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.gcsBucket"></a>

```java
public java.lang.String getGcsBucket();
```

- *Type:* java.lang.String

The name of a Cloud Storage bucket where this CertificateAuthority will publish content, such as the CA certificate and CRLs.

This must be a bucket name, without any prefixes
(such as 'gs://') or suffixes (such as '.googleapis.com'). For example, to use a bucket named
my-bucket, you would simply specify 'my-bucket'. If not specified, a managed bucket will be
created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#gcs_bucket PrivatecaCertificateAuthority#gcs_bucket}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#id PrivatecaCertificateAuthority#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignoreActiveCertificatesOnDeletion`<sup>Optional</sup> <a name="ignoreActiveCertificatesOnDeletion" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.ignoreActiveCertificatesOnDeletion"></a>

```java
public java.lang.Object getIgnoreActiveCertificatesOnDeletion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This field allows the CA to be deleted even if the CA has active certs.

Active certs include both unrevoked and unexpired certs.
Use with care. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#ignore_active_certificates_on_deletion PrivatecaCertificateAuthority#ignore_active_certificates_on_deletion}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels with user-defined metadata.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#labels PrivatecaCertificateAuthority#labels}

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.lifetime"></a>

```java
public java.lang.String getLifetime();
```

- *Type:* java.lang.String

The desired lifetime of the CA certificate.

Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#lifetime PrivatecaCertificateAuthority#lifetime}

---

##### `pemCaCertificate`<sup>Optional</sup> <a name="pemCaCertificate" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.pemCaCertificate"></a>

```java
public java.lang.String getPemCaCertificate();
```

- *Type:* java.lang.String

The signed CA certificate issued from the subordinated CA's CSR.

This is needed when activating the subordiante CA with a third party issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#pem_ca_certificate PrivatecaCertificateAuthority#pem_ca_certificate}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#project PrivatecaCertificateAuthority#project}.

---

##### `skipGracePeriod`<sup>Optional</sup> <a name="skipGracePeriod" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.skipGracePeriod"></a>

```java
public java.lang.Object getSkipGracePeriod();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

If this flag is set, the Certificate Authority will be deleted as soon as possible without a 30-day grace period where undeletion would have been allowed.

If you proceed, there will be no way to recover this CA.
Use with care. Defaults to 'false'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#skip_grace_period PrivatecaCertificateAuthority#skip_grace_period}

---

##### `subordinateConfig`<sup>Optional</sup> <a name="subordinateConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.subordinateConfig"></a>

```java
public PrivatecaCertificateAuthoritySubordinateConfig getSubordinateConfig();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig">PrivatecaCertificateAuthoritySubordinateConfig</a>

subordinate_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#subordinate_config PrivatecaCertificateAuthority#subordinate_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.timeouts"></a>

```java
public PrivatecaCertificateAuthorityTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts">PrivatecaCertificateAuthorityTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#timeouts PrivatecaCertificateAuthority#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The Type of this CertificateAuthority.

~> **Note:** For 'SUBORDINATE' Certificate Authorities, they need to
be activated before they can issue certificates. Default value: "SELF_SIGNED" Possible values: ["SELF_SIGNED", "SUBORDINATE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#type PrivatecaCertificateAuthority#type}

---

### PrivatecaCertificateAuthorityConfigA <a name="PrivatecaCertificateAuthorityConfigA" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigA;

PrivatecaCertificateAuthorityConfigA.builder()
    .subjectConfig(PrivatecaCertificateAuthorityConfigSubjectConfig)
    .x509Config(PrivatecaCertificateAuthorityConfigX509Config)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA.property.subjectConfig">subjectConfig</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig">PrivatecaCertificateAuthorityConfigSubjectConfig</a></code> | subject_config block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA.property.x509Config">x509Config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config">PrivatecaCertificateAuthorityConfigX509Config</a></code> | x509_config block. |

---

##### `subjectConfig`<sup>Required</sup> <a name="subjectConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA.property.subjectConfig"></a>

```java
public PrivatecaCertificateAuthorityConfigSubjectConfig getSubjectConfig();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig">PrivatecaCertificateAuthorityConfigSubjectConfig</a>

subject_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#subject_config PrivatecaCertificateAuthority#subject_config}

---

##### `x509Config`<sup>Required</sup> <a name="x509Config" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA.property.x509Config"></a>

```java
public PrivatecaCertificateAuthorityConfigX509Config getX509Config();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config">PrivatecaCertificateAuthorityConfigX509Config</a>

x509_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#x509_config PrivatecaCertificateAuthority#x509_config}

---

### PrivatecaCertificateAuthorityConfigSubjectConfig <a name="PrivatecaCertificateAuthorityConfigSubjectConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigSubjectConfig;

PrivatecaCertificateAuthorityConfigSubjectConfig.builder()
    .subject(PrivatecaCertificateAuthorityConfigSubjectConfigSubject)
//  .subjectAltName(PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject">PrivatecaCertificateAuthorityConfigSubjectConfigSubject</a></code> | subject block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig.property.subjectAltName">subjectAltName</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName</a></code> | subject_alt_name block. |

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig.property.subject"></a>

```java
public PrivatecaCertificateAuthorityConfigSubjectConfigSubject getSubject();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject">PrivatecaCertificateAuthorityConfigSubjectConfigSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#subject PrivatecaCertificateAuthority#subject}

---

##### `subjectAltName`<sup>Optional</sup> <a name="subjectAltName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig.property.subjectAltName"></a>

```java
public PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName getSubjectAltName();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName</a>

subject_alt_name block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#subject_alt_name PrivatecaCertificateAuthority#subject_alt_name}

---

### PrivatecaCertificateAuthorityConfigSubjectConfigSubject <a name="PrivatecaCertificateAuthorityConfigSubjectConfigSubject" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject;

PrivatecaCertificateAuthorityConfigSubjectConfigSubject.builder()
    .commonName(java.lang.String)
    .organization(java.lang.String)
//  .countryCode(java.lang.String)
//  .locality(java.lang.String)
//  .organizationalUnit(java.lang.String)
//  .postalCode(java.lang.String)
//  .province(java.lang.String)
//  .streetAddress(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.commonName">commonName</a></code> | <code>java.lang.String</code> | The common name of the distinguished name. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.organization">organization</a></code> | <code>java.lang.String</code> | The organization of the subject. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | The country code of the subject. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.locality">locality</a></code> | <code>java.lang.String</code> | The locality or city of the subject. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | The organizational unit of the subject. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | The postal code of the subject. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.province">province</a></code> | <code>java.lang.String</code> | The province, territory, or regional state of the subject. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | The street address of the subject. |

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

The common name of the distinguished name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#common_name PrivatecaCertificateAuthority#common_name}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

The organization of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#organization PrivatecaCertificateAuthority#organization}

---

##### `countryCode`<sup>Optional</sup> <a name="countryCode" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

The country code of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#country_code PrivatecaCertificateAuthority#country_code}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

The locality or city of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#locality PrivatecaCertificateAuthority#locality}

---

##### `organizationalUnit`<sup>Optional</sup> <a name="organizationalUnit" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

The organizational unit of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#organizational_unit PrivatecaCertificateAuthority#organizational_unit}

---

##### `postalCode`<sup>Optional</sup> <a name="postalCode" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

The postal code of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#postal_code PrivatecaCertificateAuthority#postal_code}

---

##### `province`<sup>Optional</sup> <a name="province" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

The province, territory, or regional state of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#province PrivatecaCertificateAuthority#province}

---

##### `streetAddress`<sup>Optional</sup> <a name="streetAddress" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

The street address of the subject.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#street_address PrivatecaCertificateAuthority#street_address}

---

### PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName <a name="PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName;

PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.builder()
//  .dnsNames(java.util.List<java.lang.String>)
//  .emailAddresses(java.util.List<java.lang.String>)
//  .ipAddresses(java.util.List<java.lang.String>)
//  .uris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.property.dnsNames">dnsNames</a></code> | <code>java.util.List<java.lang.String></code> | Contains only valid, fully-qualified host names. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Contains only valid RFC 2822 E-mail addresses. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.property.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | Contains only valid RFC 3986 URIs. |

---

##### `dnsNames`<sup>Optional</sup> <a name="dnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.property.dnsNames"></a>

```java
public java.util.List<java.lang.String> getDnsNames();
```

- *Type:* java.util.List<java.lang.String>

Contains only valid, fully-qualified host names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#dns_names PrivatecaCertificateAuthority#dns_names}

---

##### `emailAddresses`<sup>Optional</sup> <a name="emailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

Contains only valid RFC 2822 E-mail addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#email_addresses PrivatecaCertificateAuthority#email_addresses}

---

##### `ipAddresses`<sup>Optional</sup> <a name="ipAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#ip_addresses PrivatecaCertificateAuthority#ip_addresses}

---

##### `uris`<sup>Optional</sup> <a name="uris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName.property.uris"></a>

```java
public java.util.List<java.lang.String> getUris();
```

- *Type:* java.util.List<java.lang.String>

Contains only valid RFC 3986 URIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#uris PrivatecaCertificateAuthority#uris}

---

### PrivatecaCertificateAuthorityConfigX509Config <a name="PrivatecaCertificateAuthorityConfigX509Config" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509Config;

PrivatecaCertificateAuthorityConfigX509Config.builder()
    .caOptions(PrivatecaCertificateAuthorityConfigX509ConfigCaOptions)
    .keyUsage(PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage)
//  .additionalExtensions(IResolvable)
//  .additionalExtensions(java.util.List<PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions>)
//  .aiaOcspServers(java.util.List<java.lang.String>)
//  .nameConstraints(PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints)
//  .policyIds(IResolvable)
//  .policyIds(java.util.List<PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.caOptions">caOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions">PrivatecaCertificateAuthorityConfigX509ConfigCaOptions</a></code> | ca_options block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage</a></code> | key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.additionalExtensions">additionalExtensions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a>></code> | additional_extensions block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.aiaOcspServers">aiaOcspServers</a></code> | <code>java.util.List<java.lang.String></code> | Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.nameConstraints">nameConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints</a></code> | name_constraints block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.policyIds">policyIds</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a>></code> | policy_ids block. |

---

##### `caOptions`<sup>Required</sup> <a name="caOptions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.caOptions"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigCaOptions getCaOptions();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions">PrivatecaCertificateAuthorityConfigX509ConfigCaOptions</a>

ca_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#ca_options PrivatecaCertificateAuthority#ca_options}

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.keyUsage"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage getKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage</a>

key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#key_usage PrivatecaCertificateAuthority#key_usage}

---

##### `additionalExtensions`<sup>Optional</sup> <a name="additionalExtensions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.additionalExtensions"></a>

```java
public java.lang.Object getAdditionalExtensions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a>>

additional_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#additional_extensions PrivatecaCertificateAuthority#additional_extensions}

---

##### `aiaOcspServers`<sup>Optional</sup> <a name="aiaOcspServers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.aiaOcspServers"></a>

```java
public java.util.List<java.lang.String> getAiaOcspServers();
```

- *Type:* java.util.List<java.lang.String>

Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#aia_ocsp_servers PrivatecaCertificateAuthority#aia_ocsp_servers}

---

##### `nameConstraints`<sup>Optional</sup> <a name="nameConstraints" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.nameConstraints"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints getNameConstraints();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints</a>

name_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#name_constraints PrivatecaCertificateAuthority#name_constraints}

---

##### `policyIds`<sup>Optional</sup> <a name="policyIds" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config.property.policyIds"></a>

```java
public java.lang.Object getPolicyIds();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a>>

policy_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#policy_ids PrivatecaCertificateAuthority#policy_ids}

---

### PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions <a name="PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions;

PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions.builder()
    .critical(java.lang.Boolean)
    .critical(IResolvable)
    .objectId(PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId)
    .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions.property.critical">critical</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error). |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions.property.objectId">objectId</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId</a></code> | object_id block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions.property.value">value</a></code> | <code>java.lang.String</code> | The value of this X.509 extension. A base64-encoded string. |

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions.property.critical"></a>

```java
public java.lang.Object getCritical();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#critical PrivatecaCertificateAuthority#critical}

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions.property.objectId"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId getObjectId();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId</a>

object_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#object_id PrivatecaCertificateAuthority#object_id}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of this X.509 extension. A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#value PrivatecaCertificateAuthority#value}

---

### PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId <a name="PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId;

PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId.builder()
    .objectIdPath(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#object_id_path PrivatecaCertificateAuthority#object_id_path}

---

### PrivatecaCertificateAuthorityConfigX509ConfigCaOptions <a name="PrivatecaCertificateAuthorityConfigX509ConfigCaOptions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions;

PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.builder()
    .isCa(java.lang.Boolean)
    .isCa(IResolvable)
//  .maxIssuerPathLength(java.lang.Number)
//  .nonCa(java.lang.Boolean)
//  .nonCa(IResolvable)
//  .zeroMaxIssuerPathLength(java.lang.Boolean)
//  .zeroMaxIssuerPathLength(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.property.isCa">isCa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, the "CA" in Basic Constraints extension will be set to true. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.property.maxIssuerPathLength">maxIssuerPathLength</a></code> | <code>java.lang.Number</code> | Refers to the "path length constraint" in Basic Constraints extension. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.property.nonCa">nonCa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, the "CA" in Basic Constraints extension will be set to false. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.property.zeroMaxIssuerPathLength">zeroMaxIssuerPathLength</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When true, the "path length constraint" in Basic Constraints extension will be set to 0. |

---

##### `isCa`<sup>Required</sup> <a name="isCa" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.property.isCa"></a>

```java
public java.lang.Object getIsCa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, the "CA" in Basic Constraints extension will be set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#is_ca PrivatecaCertificateAuthority#is_ca}

---

##### `maxIssuerPathLength`<sup>Optional</sup> <a name="maxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.property.maxIssuerPathLength"></a>

```java
public java.lang.Number getMaxIssuerPathLength();
```

- *Type:* java.lang.Number

Refers to the "path length constraint" in Basic Constraints extension.

For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. Setting the value to 0
requires setting 'zero_max_issuer_path_length = true'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#max_issuer_path_length PrivatecaCertificateAuthority#max_issuer_path_length}

---

##### `nonCa`<sup>Optional</sup> <a name="nonCa" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.property.nonCa"></a>

```java
public java.lang.Object getNonCa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, the "CA" in Basic Constraints extension will be set to false.

If both 'is_ca' and 'non_ca' are unset, the extension will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#non_ca PrivatecaCertificateAuthority#non_ca}

---

##### `zeroMaxIssuerPathLength`<sup>Optional</sup> <a name="zeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions.property.zeroMaxIssuerPathLength"></a>

```java
public java.lang.Object getZeroMaxIssuerPathLength();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When true, the "path length constraint" in Basic Constraints extension will be set to 0.

If both 'max_issuer_path_length' and 'zero_max_issuer_path_length' are unset,
the max path length will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#zero_max_issuer_path_length PrivatecaCertificateAuthority#zero_max_issuer_path_length}

---

### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage;

PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage.builder()
    .baseKeyUsage(PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage)
    .extendedKeyUsage(PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage)
//  .unknownExtendedKeyUsages(IResolvable)
//  .unknownExtendedKeyUsages(java.util.List<PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage.property.baseKeyUsage">baseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage</a></code> | base_key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage.property.extendedKeyUsage">extendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage</a></code> | extended_key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage.property.unknownExtendedKeyUsages">unknownExtendedKeyUsages</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a>></code> | unknown_extended_key_usages block. |

---

##### `baseKeyUsage`<sup>Required</sup> <a name="baseKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage.property.baseKeyUsage"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage getBaseKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage</a>

base_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#base_key_usage PrivatecaCertificateAuthority#base_key_usage}

---

##### `extendedKeyUsage`<sup>Required</sup> <a name="extendedKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage.property.extendedKeyUsage"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage getExtendedKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage</a>

extended_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#extended_key_usage PrivatecaCertificateAuthority#extended_key_usage}

---

##### `unknownExtendedKeyUsages`<sup>Optional</sup> <a name="unknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage.property.unknownExtendedKeyUsages"></a>

```java
public java.lang.Object getUnknownExtendedKeyUsages();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a>>

unknown_extended_key_usages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#unknown_extended_key_usages PrivatecaCertificateAuthority#unknown_extended_key_usages}

---

### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage;

PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.builder()
//  .certSign(java.lang.Boolean)
//  .certSign(IResolvable)
//  .contentCommitment(java.lang.Boolean)
//  .contentCommitment(IResolvable)
//  .crlSign(java.lang.Boolean)
//  .crlSign(IResolvable)
//  .dataEncipherment(java.lang.Boolean)
//  .dataEncipherment(IResolvable)
//  .decipherOnly(java.lang.Boolean)
//  .decipherOnly(IResolvable)
//  .digitalSignature(java.lang.Boolean)
//  .digitalSignature(IResolvable)
//  .encipherOnly(java.lang.Boolean)
//  .encipherOnly(IResolvable)
//  .keyAgreement(java.lang.Boolean)
//  .keyAgreement(IResolvable)
//  .keyEncipherment(java.lang.Boolean)
//  .keyEncipherment(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.certSign">certSign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used to sign certificates. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.contentCommitment">contentCommitment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation". |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.crlSign">crlSign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used sign certificate revocation lists. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.dataEncipherment">dataEncipherment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used to encipher data. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.decipherOnly">decipherOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used to decipher only. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.digitalSignature">digitalSignature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used for digital signatures. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.encipherOnly">encipherOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used to encipher only. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.keyAgreement">keyAgreement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used in a key agreement protocol. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.keyEncipherment">keyEncipherment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | The key may be used to encipher other keys. |

---

##### `certSign`<sup>Optional</sup> <a name="certSign" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.certSign"></a>

```java
public java.lang.Object getCertSign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used to sign certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#cert_sign PrivatecaCertificateAuthority#cert_sign}

---

##### `contentCommitment`<sup>Optional</sup> <a name="contentCommitment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.contentCommitment"></a>

```java
public java.lang.Object getContentCommitment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#content_commitment PrivatecaCertificateAuthority#content_commitment}

---

##### `crlSign`<sup>Optional</sup> <a name="crlSign" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.crlSign"></a>

```java
public java.lang.Object getCrlSign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used sign certificate revocation lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#crl_sign PrivatecaCertificateAuthority#crl_sign}

---

##### `dataEncipherment`<sup>Optional</sup> <a name="dataEncipherment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.dataEncipherment"></a>

```java
public java.lang.Object getDataEncipherment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used to encipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#data_encipherment PrivatecaCertificateAuthority#data_encipherment}

---

##### `decipherOnly`<sup>Optional</sup> <a name="decipherOnly" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.decipherOnly"></a>

```java
public java.lang.Object getDecipherOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used to decipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#decipher_only PrivatecaCertificateAuthority#decipher_only}

---

##### `digitalSignature`<sup>Optional</sup> <a name="digitalSignature" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.digitalSignature"></a>

```java
public java.lang.Object getDigitalSignature();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used for digital signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#digital_signature PrivatecaCertificateAuthority#digital_signature}

---

##### `encipherOnly`<sup>Optional</sup> <a name="encipherOnly" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.encipherOnly"></a>

```java
public java.lang.Object getEncipherOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used to encipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#encipher_only PrivatecaCertificateAuthority#encipher_only}

---

##### `keyAgreement`<sup>Optional</sup> <a name="keyAgreement" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.keyAgreement"></a>

```java
public java.lang.Object getKeyAgreement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used in a key agreement protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#key_agreement PrivatecaCertificateAuthority#key_agreement}

---

##### `keyEncipherment`<sup>Optional</sup> <a name="keyEncipherment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage.property.keyEncipherment"></a>

```java
public java.lang.Object getKeyEncipherment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

The key may be used to encipher other keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#key_encipherment PrivatecaCertificateAuthority#key_encipherment}

---

### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage;

PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.builder()
//  .clientAuth(java.lang.Boolean)
//  .clientAuth(IResolvable)
//  .codeSigning(java.lang.Boolean)
//  .codeSigning(IResolvable)
//  .emailProtection(java.lang.Boolean)
//  .emailProtection(IResolvable)
//  .ocspSigning(java.lang.Boolean)
//  .ocspSigning(IResolvable)
//  .serverAuth(java.lang.Boolean)
//  .serverAuth(IResolvable)
//  .timeStamping(java.lang.Boolean)
//  .timeStamping(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.clientAuth">clientAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.codeSigning">codeSigning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication". |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.emailProtection">emailProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection". |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.ocspSigning">ocspSigning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses". |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.serverAuth">serverAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.timeStamping">timeStamping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time". |

---

##### `clientAuth`<sup>Optional</sup> <a name="clientAuth" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.clientAuth"></a>

```java
public java.lang.Object getClientAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#client_auth PrivatecaCertificateAuthority#client_auth}

---

##### `codeSigning`<sup>Optional</sup> <a name="codeSigning" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.codeSigning"></a>

```java
public java.lang.Object getCodeSigning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#code_signing PrivatecaCertificateAuthority#code_signing}

---

##### `emailProtection`<sup>Optional</sup> <a name="emailProtection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.emailProtection"></a>

```java
public java.lang.Object getEmailProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#email_protection PrivatecaCertificateAuthority#email_protection}

---

##### `ocspSigning`<sup>Optional</sup> <a name="ocspSigning" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.ocspSigning"></a>

```java
public java.lang.Object getOcspSigning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#ocsp_signing PrivatecaCertificateAuthority#ocsp_signing}

---

##### `serverAuth`<sup>Optional</sup> <a name="serverAuth" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.serverAuth"></a>

```java
public java.lang.Object getServerAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#server_auth PrivatecaCertificateAuthority#server_auth}

---

##### `timeStamping`<sup>Optional</sup> <a name="timeStamping" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage.property.timeStamping"></a>

```java
public java.lang.Object getTimeStamping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#time_stamping PrivatecaCertificateAuthority#time_stamping}

---

### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages;

PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages.builder()
    .objectIdPath(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#object_id_path PrivatecaCertificateAuthority#object_id_path}

---

### PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints <a name="PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints;

PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.builder()
    .critical(java.lang.Boolean)
    .critical(IResolvable)
//  .excludedDnsNames(java.util.List<java.lang.String>)
//  .excludedEmailAddresses(java.util.List<java.lang.String>)
//  .excludedIpRanges(java.util.List<java.lang.String>)
//  .excludedUris(java.util.List<java.lang.String>)
//  .permittedDnsNames(java.util.List<java.lang.String>)
//  .permittedEmailAddresses(java.util.List<java.lang.String>)
//  .permittedIpRanges(java.util.List<java.lang.String>)
//  .permittedUris(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.critical">critical</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Indicates whether or not the name constraints are marked critical. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.excludedDnsNames">excludedDnsNames</a></code> | <code>java.util.List<java.lang.String></code> | Contains excluded DNS names. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.excludedEmailAddresses">excludedEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Contains the excluded email addresses. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.excludedIpRanges">excludedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | Contains the excluded IP ranges. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.excludedUris">excludedUris</a></code> | <code>java.util.List<java.lang.String></code> | Contains the excluded URIs that apply to the host part of the name. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.permittedDnsNames">permittedDnsNames</a></code> | <code>java.util.List<java.lang.String></code> | Contains permitted DNS names. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.permittedEmailAddresses">permittedEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | Contains the permitted email addresses. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.permittedIpRanges">permittedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | Contains the permitted IP ranges. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.permittedUris">permittedUris</a></code> | <code>java.util.List<java.lang.String></code> | Contains the permitted URIs that apply to the host part of the name. |

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.critical"></a>

```java
public java.lang.Object getCritical();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Indicates whether or not the name constraints are marked critical.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#critical PrivatecaCertificateAuthority#critical}

---

##### `excludedDnsNames`<sup>Optional</sup> <a name="excludedDnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.excludedDnsNames"></a>

```java
public java.util.List<java.lang.String> getExcludedDnsNames();
```

- *Type:* java.util.List<java.lang.String>

Contains excluded DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#excluded_dns_names PrivatecaCertificateAuthority#excluded_dns_names}

---

##### `excludedEmailAddresses`<sup>Optional</sup> <a name="excludedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.excludedEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getExcludedEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

Contains the excluded email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#excluded_email_addresses PrivatecaCertificateAuthority#excluded_email_addresses}

---

##### `excludedIpRanges`<sup>Optional</sup> <a name="excludedIpRanges" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.excludedIpRanges"></a>

```java
public java.util.List<java.lang.String> getExcludedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

Contains the excluded IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#excluded_ip_ranges PrivatecaCertificateAuthority#excluded_ip_ranges}

---

##### `excludedUris`<sup>Optional</sup> <a name="excludedUris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.excludedUris"></a>

```java
public java.util.List<java.lang.String> getExcludedUris();
```

- *Type:* java.util.List<java.lang.String>

Contains the excluded URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#excluded_uris PrivatecaCertificateAuthority#excluded_uris}

---

##### `permittedDnsNames`<sup>Optional</sup> <a name="permittedDnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.permittedDnsNames"></a>

```java
public java.util.List<java.lang.String> getPermittedDnsNames();
```

- *Type:* java.util.List<java.lang.String>

Contains permitted DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#permitted_dns_names PrivatecaCertificateAuthority#permitted_dns_names}

---

##### `permittedEmailAddresses`<sup>Optional</sup> <a name="permittedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.permittedEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getPermittedEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

Contains the permitted email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#permitted_email_addresses PrivatecaCertificateAuthority#permitted_email_addresses}

---

##### `permittedIpRanges`<sup>Optional</sup> <a name="permittedIpRanges" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.permittedIpRanges"></a>

```java
public java.util.List<java.lang.String> getPermittedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

Contains the permitted IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#permitted_ip_ranges PrivatecaCertificateAuthority#permitted_ip_ranges}

---

##### `permittedUris`<sup>Optional</sup> <a name="permittedUris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints.property.permittedUris"></a>

```java
public java.util.List<java.lang.String> getPermittedUris();
```

- *Type:* java.util.List<java.lang.String>

Contains the permitted URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#permitted_uris PrivatecaCertificateAuthority#permitted_uris}

---

### PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds <a name="PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds;

PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds.builder()
    .objectIdPath(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#object_id_path PrivatecaCertificateAuthority#object_id_path}

---

### PrivatecaCertificateAuthorityKeySpec <a name="PrivatecaCertificateAuthorityKeySpec" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityKeySpec;

PrivatecaCertificateAuthorityKeySpec.builder()
//  .algorithm(java.lang.String)
//  .cloudKmsKeyVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | The algorithm to use for creating a managed Cloud KMS key for a for a simplified experience. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec.property.cloudKmsKeyVersion">cloudKmsKeyVersion</a></code> | <code>java.lang.String</code> | The resource name for an existing Cloud KMS CryptoKeyVersion in the format 'projects/*\/locations/*\/keyRings/*\/cryptoKeys/*\/cryptoKeyVersions/*'. |

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

The algorithm to use for creating a managed Cloud KMS key for a for a simplified experience.

All managed keys will be have their ProtectionLevel as HSM. Possible values: ["SIGN_HASH_ALGORITHM_UNSPECIFIED", "RSA_PSS_2048_SHA256", "RSA_PSS_3072_SHA256", "RSA_PSS_4096_SHA256", "RSA_PKCS1_2048_SHA256", "RSA_PKCS1_3072_SHA256", "RSA_PKCS1_4096_SHA256", "EC_P256_SHA256", "EC_P384_SHA384"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#algorithm PrivatecaCertificateAuthority#algorithm}

---

##### `cloudKmsKeyVersion`<sup>Optional</sup> <a name="cloudKmsKeyVersion" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec.property.cloudKmsKeyVersion"></a>

```java
public java.lang.String getCloudKmsKeyVersion();
```

- *Type:* java.lang.String

The resource name for an existing Cloud KMS CryptoKeyVersion in the format 'projects/*\/locations/*\/keyRings/*\/cryptoKeys/*\/cryptoKeyVersions/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#cloud_kms_key_version PrivatecaCertificateAuthority#cloud_kms_key_version}

---

### PrivatecaCertificateAuthoritySubordinateConfig <a name="PrivatecaCertificateAuthoritySubordinateConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthoritySubordinateConfig;

PrivatecaCertificateAuthoritySubordinateConfig.builder()
//  .certificateAuthority(java.lang.String)
//  .pemIssuerChain(PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig.property.certificateAuthority">certificateAuthority</a></code> | <code>java.lang.String</code> | This can refer to a CertificateAuthority that was used to create a subordinate CertificateAuthority. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig.property.pemIssuerChain">pemIssuerChain</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain</a></code> | pem_issuer_chain block. |

---

##### `certificateAuthority`<sup>Optional</sup> <a name="certificateAuthority" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig.property.certificateAuthority"></a>

```java
public java.lang.String getCertificateAuthority();
```

- *Type:* java.lang.String

This can refer to a CertificateAuthority that was used to create a subordinate CertificateAuthority.

This field is used for information
and usability purposes only. The resource name is in the format
'projects/*/locations/*/caPools/*/certificateAuthorities/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#certificate_authority PrivatecaCertificateAuthority#certificate_authority}

---

##### `pemIssuerChain`<sup>Optional</sup> <a name="pemIssuerChain" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig.property.pemIssuerChain"></a>

```java
public PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain getPemIssuerChain();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain</a>

pem_issuer_chain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#pem_issuer_chain PrivatecaCertificateAuthority#pem_issuer_chain}

---

### PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain <a name="PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain;

PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain.builder()
//  .pemCertificates(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain.property.pemCertificates">pemCertificates</a></code> | <code>java.util.List<java.lang.String></code> | Expected to be in leaf-to-root order according to RFC 5246. |

---

##### `pemCertificates`<sup>Optional</sup> <a name="pemCertificates" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain.property.pemCertificates"></a>

```java
public java.util.List<java.lang.String> getPemCertificates();
```

- *Type:* java.util.List<java.lang.String>

Expected to be in leaf-to-root order according to RFC 5246.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#pem_certificates PrivatecaCertificateAuthority#pem_certificates}

---

### PrivatecaCertificateAuthorityTimeouts <a name="PrivatecaCertificateAuthorityTimeouts" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityTimeouts;

PrivatecaCertificateAuthorityTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#create PrivatecaCertificateAuthority#create}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#delete PrivatecaCertificateAuthority#delete}. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#update PrivatecaCertificateAuthority#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#create PrivatecaCertificateAuthority#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#delete PrivatecaCertificateAuthority#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.69.1/docs/resources/privateca_certificate_authority#update PrivatecaCertificateAuthority#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatecaCertificateAuthorityAccessUrlsList <a name="PrivatecaCertificateAuthorityAccessUrlsList" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityAccessUrlsList;

new PrivatecaCertificateAuthorityAccessUrlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.get"></a>

```java
public PrivatecaCertificateAuthorityAccessUrlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### PrivatecaCertificateAuthorityAccessUrlsOutputReference <a name="PrivatecaCertificateAuthorityAccessUrlsOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityAccessUrlsOutputReference;

new PrivatecaCertificateAuthorityAccessUrlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.caCertificateAccessUrl">caCertificateAccessUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.crlAccessUrls">crlAccessUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrls">PrivatecaCertificateAuthorityAccessUrls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCertificateAccessUrl`<sup>Required</sup> <a name="caCertificateAccessUrl" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.caCertificateAccessUrl"></a>

```java
public java.lang.String getCaCertificateAccessUrl();
```

- *Type:* java.lang.String

---

##### `crlAccessUrls`<sup>Required</sup> <a name="crlAccessUrls" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.crlAccessUrls"></a>

```java
public java.util.List<java.lang.String> getCrlAccessUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrlsOutputReference.property.internalValue"></a>

```java
public PrivatecaCertificateAuthorityAccessUrls getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityAccessUrls">PrivatecaCertificateAuthorityAccessUrls</a>

---


### PrivatecaCertificateAuthorityConfigAOutputReference <a name="PrivatecaCertificateAuthorityConfigAOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigAOutputReference;

new PrivatecaCertificateAuthorityConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.putSubjectConfig">putSubjectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.putX509Config">putX509Config</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubjectConfig` <a name="putSubjectConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.putSubjectConfig"></a>

```java
public void putSubjectConfig(PrivatecaCertificateAuthorityConfigSubjectConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.putSubjectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig">PrivatecaCertificateAuthorityConfigSubjectConfig</a>

---

##### `putX509Config` <a name="putX509Config" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.putX509Config"></a>

```java
public void putX509Config(PrivatecaCertificateAuthorityConfigX509Config value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.putX509Config.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config">PrivatecaCertificateAuthorityConfigX509Config</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.subjectConfig">subjectConfig</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference">PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.x509Config">x509Config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.subjectConfigInput">subjectConfigInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig">PrivatecaCertificateAuthorityConfigSubjectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.x509ConfigInput">x509ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config">PrivatecaCertificateAuthorityConfigX509Config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA">PrivatecaCertificateAuthorityConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subjectConfig`<sup>Required</sup> <a name="subjectConfig" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.subjectConfig"></a>

```java
public PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference getSubjectConfig();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference">PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference</a>

---

##### `x509Config`<sup>Required</sup> <a name="x509Config" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.x509Config"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigOutputReference getX509Config();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigOutputReference</a>

---

##### `subjectConfigInput`<sup>Optional</sup> <a name="subjectConfigInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.subjectConfigInput"></a>

```java
public PrivatecaCertificateAuthorityConfigSubjectConfig getSubjectConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig">PrivatecaCertificateAuthorityConfigSubjectConfig</a>

---

##### `x509ConfigInput`<sup>Optional</sup> <a name="x509ConfigInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.x509ConfigInput"></a>

```java
public PrivatecaCertificateAuthorityConfigX509Config getX509ConfigInput();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config">PrivatecaCertificateAuthorityConfigX509Config</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigAOutputReference.property.internalValue"></a>

```java
public PrivatecaCertificateAuthorityConfigA getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigA">PrivatecaCertificateAuthorityConfigA</a>

---


### PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference <a name="PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference;

new PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.putSubject">putSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.putSubjectAltName">putSubjectAltName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.resetSubjectAltName">resetSubjectAltName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSubject` <a name="putSubject" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.putSubject"></a>

```java
public void putSubject(PrivatecaCertificateAuthorityConfigSubjectConfigSubject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.putSubject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject">PrivatecaCertificateAuthorityConfigSubjectConfigSubject</a>

---

##### `putSubjectAltName` <a name="putSubjectAltName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.putSubjectAltName"></a>

```java
public void putSubjectAltName(PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.putSubjectAltName.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName</a>

---

##### `resetSubjectAltName` <a name="resetSubjectAltName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.resetSubjectAltName"></a>

```java
public void resetSubjectAltName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subjectAltName">subjectAltName</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subjectAltNameInput">subjectAltNameInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subjectInput">subjectInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject">PrivatecaCertificateAuthorityConfigSubjectConfigSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig">PrivatecaCertificateAuthorityConfigSubjectConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subject"></a>

```java
public PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference getSubject();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference</a>

---

##### `subjectAltName`<sup>Required</sup> <a name="subjectAltName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subjectAltName"></a>

```java
public PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference getSubjectAltName();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference</a>

---

##### `subjectAltNameInput`<sup>Optional</sup> <a name="subjectAltNameInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subjectAltNameInput"></a>

```java
public PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName getSubjectAltNameInput();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName</a>

---

##### `subjectInput`<sup>Optional</sup> <a name="subjectInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.subjectInput"></a>

```java
public PrivatecaCertificateAuthorityConfigSubjectConfigSubject getSubjectInput();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject">PrivatecaCertificateAuthorityConfigSubjectConfigSubject</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference.property.internalValue"></a>

```java
public PrivatecaCertificateAuthorityConfigSubjectConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfig">PrivatecaCertificateAuthorityConfigSubjectConfig</a>

---


### PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference <a name="PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference;

new PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resetDnsNames">resetDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resetEmailAddresses">resetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resetIpAddresses">resetIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resetUris">resetUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDnsNames` <a name="resetDnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resetDnsNames"></a>

```java
public void resetDnsNames()
```

##### `resetEmailAddresses` <a name="resetEmailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resetEmailAddresses"></a>

```java
public void resetEmailAddresses()
```

##### `resetIpAddresses` <a name="resetIpAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resetIpAddresses"></a>

```java
public void resetIpAddresses()
```

##### `resetUris` <a name="resetUris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.resetUris"></a>

```java
public void resetUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.dnsNamesInput">dnsNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.emailAddressesInput">emailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.ipAddressesInput">ipAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.urisInput">urisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.dnsNames">dnsNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.emailAddresses">emailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.ipAddresses">ipAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.uris">uris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsNamesInput`<sup>Optional</sup> <a name="dnsNamesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.dnsNamesInput"></a>

```java
public java.util.List<java.lang.String> getDnsNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="emailAddressesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.emailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddressesInput`<sup>Optional</sup> <a name="ipAddressesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.ipAddressesInput"></a>

```java
public java.util.List<java.lang.String> getIpAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `urisInput`<sup>Optional</sup> <a name="urisInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.urisInput"></a>

```java
public java.util.List<java.lang.String> getUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsNames`<sup>Required</sup> <a name="dnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.dnsNames"></a>

```java
public java.util.List<java.lang.String> getDnsNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `emailAddresses`<sup>Required</sup> <a name="emailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.emailAddresses"></a>

```java
public java.util.List<java.lang.String> getEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddresses`<sup>Required</sup> <a name="ipAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.ipAddresses"></a>

```java
public java.util.List<java.lang.String> getIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `uris`<sup>Required</sup> <a name="uris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.uris"></a>

```java
public java.util.List<java.lang.String> getUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference.property.internalValue"></a>

```java
public PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName">PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName</a>

---


### PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference <a name="PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference;

new PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetCountryCode">resetCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetLocality">resetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetOrganizationalUnit">resetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetPostalCode">resetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetProvince">resetProvince</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetStreetAddress">resetStreetAddress</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCountryCode` <a name="resetCountryCode" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetCountryCode"></a>

```java
public void resetCountryCode()
```

##### `resetLocality` <a name="resetLocality" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetLocality"></a>

```java
public void resetLocality()
```

##### `resetOrganizationalUnit` <a name="resetOrganizationalUnit" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetOrganizationalUnit"></a>

```java
public void resetOrganizationalUnit()
```

##### `resetPostalCode` <a name="resetPostalCode" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetPostalCode"></a>

```java
public void resetPostalCode()
```

##### `resetProvince` <a name="resetProvince" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetProvince"></a>

```java
public void resetProvince()
```

##### `resetStreetAddress` <a name="resetStreetAddress" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.resetStreetAddress"></a>

```java
public void resetStreetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.commonNameInput">commonNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.countryCodeInput">countryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.localityInput">localityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organizationalUnitInput">organizationalUnitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.postalCodeInput">postalCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.provinceInput">provinceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.streetAddressInput">streetAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.commonName">commonName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.countryCode">countryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.locality">locality</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organizationalUnit">organizationalUnit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.postalCode">postalCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.province">province</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.streetAddress">streetAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject">PrivatecaCertificateAuthorityConfigSubjectConfigSubject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `commonNameInput`<sup>Optional</sup> <a name="commonNameInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.commonNameInput"></a>

```java
public java.lang.String getCommonNameInput();
```

- *Type:* java.lang.String

---

##### `countryCodeInput`<sup>Optional</sup> <a name="countryCodeInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.countryCodeInput"></a>

```java
public java.lang.String getCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `localityInput`<sup>Optional</sup> <a name="localityInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.localityInput"></a>

```java
public java.lang.String getLocalityInput();
```

- *Type:* java.lang.String

---

##### `organizationalUnitInput`<sup>Optional</sup> <a name="organizationalUnitInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organizationalUnitInput"></a>

```java
public java.lang.String getOrganizationalUnitInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `postalCodeInput`<sup>Optional</sup> <a name="postalCodeInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.postalCodeInput"></a>

```java
public java.lang.String getPostalCodeInput();
```

- *Type:* java.lang.String

---

##### `provinceInput`<sup>Optional</sup> <a name="provinceInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.provinceInput"></a>

```java
public java.lang.String getProvinceInput();
```

- *Type:* java.lang.String

---

##### `streetAddressInput`<sup>Optional</sup> <a name="streetAddressInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.streetAddressInput"></a>

```java
public java.lang.String getStreetAddressInput();
```

- *Type:* java.lang.String

---

##### `commonName`<sup>Required</sup> <a name="commonName" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.commonName"></a>

```java
public java.lang.String getCommonName();
```

- *Type:* java.lang.String

---

##### `countryCode`<sup>Required</sup> <a name="countryCode" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.countryCode"></a>

```java
public java.lang.String getCountryCode();
```

- *Type:* java.lang.String

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.locality"></a>

```java
public java.lang.String getLocality();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `organizationalUnit`<sup>Required</sup> <a name="organizationalUnit" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.organizationalUnit"></a>

```java
public java.lang.String getOrganizationalUnit();
```

- *Type:* java.lang.String

---

##### `postalCode`<sup>Required</sup> <a name="postalCode" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.postalCode"></a>

```java
public java.lang.String getPostalCode();
```

- *Type:* java.lang.String

---

##### `province`<sup>Required</sup> <a name="province" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.province"></a>

```java
public java.lang.String getProvince();
```

- *Type:* java.lang.String

---

##### `streetAddress`<sup>Required</sup> <a name="streetAddress" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.streetAddress"></a>

```java
public java.lang.String getStreetAddress();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference.property.internalValue"></a>

```java
public PrivatecaCertificateAuthorityConfigSubjectConfigSubject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigSubjectConfigSubject">PrivatecaCertificateAuthorityConfigSubjectConfigSubject</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList <a name="PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList;

new PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.get"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a>>

---


### PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference;

new PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput">objectIdPathInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectIdPathInput`<sup>Optional</sup> <a name="objectIdPathInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPathInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference.property.internalValue"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference;

new PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.putObjectId">putObjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putObjectId` <a name="putObjectId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.putObjectId"></a>

```java
public void putObjectId(PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.putObjectId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.objectId">objectId</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.criticalInput">criticalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.objectIdInput">objectIdInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.critical">critical</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectId`<sup>Required</sup> <a name="objectId" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.objectId"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference getObjectId();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference</a>

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.criticalInput"></a>

```java
public java.lang.Object getCriticalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `objectIdInput`<sup>Optional</sup> <a name="objectIdInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.objectIdInput"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId getObjectIdInput();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.critical"></a>

```java
public java.lang.Object getCritical();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference;

new PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resetMaxIssuerPathLength">resetMaxIssuerPathLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resetNonCa">resetNonCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resetZeroMaxIssuerPathLength">resetZeroMaxIssuerPathLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxIssuerPathLength` <a name="resetMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resetMaxIssuerPathLength"></a>

```java
public void resetMaxIssuerPathLength()
```

##### `resetNonCa` <a name="resetNonCa" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resetNonCa"></a>

```java
public void resetNonCa()
```

##### `resetZeroMaxIssuerPathLength` <a name="resetZeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.resetZeroMaxIssuerPathLength"></a>

```java
public void resetZeroMaxIssuerPathLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.isCaInput">isCaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.maxIssuerPathLengthInput">maxIssuerPathLengthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.nonCaInput">nonCaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput">zeroMaxIssuerPathLengthInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.isCa">isCa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.maxIssuerPathLength">maxIssuerPathLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.nonCa">nonCa</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.zeroMaxIssuerPathLength">zeroMaxIssuerPathLength</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions">PrivatecaCertificateAuthorityConfigX509ConfigCaOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isCaInput`<sup>Optional</sup> <a name="isCaInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.isCaInput"></a>

```java
public java.lang.Object getIsCaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxIssuerPathLengthInput`<sup>Optional</sup> <a name="maxIssuerPathLengthInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.maxIssuerPathLengthInput"></a>

```java
public java.lang.Number getMaxIssuerPathLengthInput();
```

- *Type:* java.lang.Number

---

##### `nonCaInput`<sup>Optional</sup> <a name="nonCaInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.nonCaInput"></a>

```java
public java.lang.Object getNonCaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zeroMaxIssuerPathLengthInput`<sup>Optional</sup> <a name="zeroMaxIssuerPathLengthInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput"></a>

```java
public java.lang.Object getZeroMaxIssuerPathLengthInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isCa`<sup>Required</sup> <a name="isCa" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.isCa"></a>

```java
public java.lang.Object getIsCa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxIssuerPathLength`<sup>Required</sup> <a name="maxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.maxIssuerPathLength"></a>

```java
public java.lang.Number getMaxIssuerPathLength();
```

- *Type:* java.lang.Number

---

##### `nonCa`<sup>Required</sup> <a name="nonCa" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.nonCa"></a>

```java
public java.lang.Object getNonCa();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `zeroMaxIssuerPathLength`<sup>Required</sup> <a name="zeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.zeroMaxIssuerPathLength"></a>

```java
public java.lang.Object getZeroMaxIssuerPathLength();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference.property.internalValue"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigCaOptions getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions">PrivatecaCertificateAuthorityConfigX509ConfigCaOptions</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference;

new PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetCertSign">resetCertSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetContentCommitment">resetContentCommitment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetCrlSign">resetCrlSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment">resetDataEncipherment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly">resetDecipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature">resetDigitalSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly">resetEncipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement">resetKeyAgreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment">resetKeyEncipherment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertSign` <a name="resetCertSign" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetCertSign"></a>

```java
public void resetCertSign()
```

##### `resetContentCommitment` <a name="resetContentCommitment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetContentCommitment"></a>

```java
public void resetContentCommitment()
```

##### `resetCrlSign` <a name="resetCrlSign" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetCrlSign"></a>

```java
public void resetCrlSign()
```

##### `resetDataEncipherment` <a name="resetDataEncipherment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment"></a>

```java
public void resetDataEncipherment()
```

##### `resetDecipherOnly` <a name="resetDecipherOnly" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly"></a>

```java
public void resetDecipherOnly()
```

##### `resetDigitalSignature` <a name="resetDigitalSignature" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature"></a>

```java
public void resetDigitalSignature()
```

##### `resetEncipherOnly` <a name="resetEncipherOnly" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly"></a>

```java
public void resetEncipherOnly()
```

##### `resetKeyAgreement` <a name="resetKeyAgreement" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement"></a>

```java
public void resetKeyAgreement()
```

##### `resetKeyEncipherment` <a name="resetKeyEncipherment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment"></a>

```java
public void resetKeyEncipherment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.certSignInput">certSignInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput">contentCommitmentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.crlSignInput">crlSignInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput">dataEnciphermentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput">decipherOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput">digitalSignatureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput">encipherOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput">keyAgreementInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput">keyEnciphermentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.certSign">certSign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.contentCommitment">contentCommitment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.crlSign">crlSign</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment">dataEncipherment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.decipherOnly">decipherOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.digitalSignature">digitalSignature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.encipherOnly">encipherOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyAgreement">keyAgreement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment">keyEncipherment</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certSignInput`<sup>Optional</sup> <a name="certSignInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.certSignInput"></a>

```java
public java.lang.Object getCertSignInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contentCommitmentInput`<sup>Optional</sup> <a name="contentCommitmentInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput"></a>

```java
public java.lang.Object getContentCommitmentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `crlSignInput`<sup>Optional</sup> <a name="crlSignInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.crlSignInput"></a>

```java
public java.lang.Object getCrlSignInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataEnciphermentInput`<sup>Optional</sup> <a name="dataEnciphermentInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput"></a>

```java
public java.lang.Object getDataEnciphermentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `decipherOnlyInput`<sup>Optional</sup> <a name="decipherOnlyInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput"></a>

```java
public java.lang.Object getDecipherOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `digitalSignatureInput`<sup>Optional</sup> <a name="digitalSignatureInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput"></a>

```java
public java.lang.Object getDigitalSignatureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encipherOnlyInput`<sup>Optional</sup> <a name="encipherOnlyInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput"></a>

```java
public java.lang.Object getEncipherOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyAgreementInput`<sup>Optional</sup> <a name="keyAgreementInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput"></a>

```java
public java.lang.Object getKeyAgreementInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyEnciphermentInput`<sup>Optional</sup> <a name="keyEnciphermentInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput"></a>

```java
public java.lang.Object getKeyEnciphermentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `certSign`<sup>Required</sup> <a name="certSign" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.certSign"></a>

```java
public java.lang.Object getCertSign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `contentCommitment`<sup>Required</sup> <a name="contentCommitment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.contentCommitment"></a>

```java
public java.lang.Object getContentCommitment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `crlSign`<sup>Required</sup> <a name="crlSign" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.crlSign"></a>

```java
public java.lang.Object getCrlSign();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `dataEncipherment`<sup>Required</sup> <a name="dataEncipherment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment"></a>

```java
public java.lang.Object getDataEncipherment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `decipherOnly`<sup>Required</sup> <a name="decipherOnly" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.decipherOnly"></a>

```java
public java.lang.Object getDecipherOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `digitalSignature`<sup>Required</sup> <a name="digitalSignature" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.digitalSignature"></a>

```java
public java.lang.Object getDigitalSignature();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `encipherOnly`<sup>Required</sup> <a name="encipherOnly" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.encipherOnly"></a>

```java
public java.lang.Object getEncipherOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyAgreement`<sup>Required</sup> <a name="keyAgreement" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyAgreement"></a>

```java
public java.lang.Object getKeyAgreement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `keyEncipherment`<sup>Required</sup> <a name="keyEncipherment" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment"></a>

```java
public java.lang.Object getKeyEncipherment();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference.property.internalValue"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference;

new PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetClientAuth">resetClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning">resetCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection">resetEmailProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning">resetOcspSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetServerAuth">resetServerAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping">resetTimeStamping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientAuth` <a name="resetClientAuth" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetClientAuth"></a>

```java
public void resetClientAuth()
```

##### `resetCodeSigning` <a name="resetCodeSigning" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning"></a>

```java
public void resetCodeSigning()
```

##### `resetEmailProtection` <a name="resetEmailProtection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection"></a>

```java
public void resetEmailProtection()
```

##### `resetOcspSigning` <a name="resetOcspSigning" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning"></a>

```java
public void resetOcspSigning()
```

##### `resetServerAuth` <a name="resetServerAuth" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetServerAuth"></a>

```java
public void resetServerAuth()
```

##### `resetTimeStamping` <a name="resetTimeStamping" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping"></a>

```java
public void resetTimeStamping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput">clientAuthInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput">codeSigningInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput">emailProtectionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput">ocspSigningInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput">serverAuthInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput">timeStampingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.clientAuth">clientAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.codeSigning">codeSigning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.emailProtection">emailProtection</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning">ocspSigning</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.serverAuth">serverAuth</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.timeStamping">timeStamping</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientAuthInput`<sup>Optional</sup> <a name="clientAuthInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput"></a>

```java
public java.lang.Object getClientAuthInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `codeSigningInput`<sup>Optional</sup> <a name="codeSigningInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput"></a>

```java
public java.lang.Object getCodeSigningInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailProtectionInput`<sup>Optional</sup> <a name="emailProtectionInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput"></a>

```java
public java.lang.Object getEmailProtectionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspSigningInput`<sup>Optional</sup> <a name="ocspSigningInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput"></a>

```java
public java.lang.Object getOcspSigningInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverAuthInput`<sup>Optional</sup> <a name="serverAuthInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput"></a>

```java
public java.lang.Object getServerAuthInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeStampingInput`<sup>Optional</sup> <a name="timeStampingInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput"></a>

```java
public java.lang.Object getTimeStampingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientAuth`<sup>Required</sup> <a name="clientAuth" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.clientAuth"></a>

```java
public java.lang.Object getClientAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `codeSigning`<sup>Required</sup> <a name="codeSigning" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.codeSigning"></a>

```java
public java.lang.Object getCodeSigning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailProtection`<sup>Required</sup> <a name="emailProtection" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.emailProtection"></a>

```java
public java.lang.Object getEmailProtection();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `ocspSigning`<sup>Required</sup> <a name="ocspSigning" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning"></a>

```java
public java.lang.Object getOcspSigning();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverAuth`<sup>Required</sup> <a name="serverAuth" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.serverAuth"></a>

```java
public java.lang.Object getServerAuth();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timeStamping`<sup>Required</sup> <a name="timeStamping" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.timeStamping"></a>

```java
public java.lang.Object getTimeStamping();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference.property.internalValue"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference;

new PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putBaseKeyUsage">putBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putExtendedKeyUsage">putExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putUnknownExtendedKeyUsages">putUnknownExtendedKeyUsages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.resetUnknownExtendedKeyUsages">resetUnknownExtendedKeyUsages</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaseKeyUsage` <a name="putBaseKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putBaseKeyUsage"></a>

```java
public void putBaseKeyUsage(PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putBaseKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage</a>

---

##### `putExtendedKeyUsage` <a name="putExtendedKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putExtendedKeyUsage"></a>

```java
public void putExtendedKeyUsage(PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putExtendedKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage</a>

---

##### `putUnknownExtendedKeyUsages` <a name="putUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putUnknownExtendedKeyUsages"></a>

```java
public void putUnknownExtendedKeyUsages(IResolvable OR java.util.List<PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.putUnknownExtendedKeyUsages.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a>>

---

##### `resetUnknownExtendedKeyUsages` <a name="resetUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.resetUnknownExtendedKeyUsages"></a>

```java
public void resetUnknownExtendedKeyUsages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.baseKeyUsage">baseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.extendedKeyUsage">extendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.unknownExtendedKeyUsages">unknownExtendedKeyUsages</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.baseKeyUsageInput">baseKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.extendedKeyUsageInput">extendedKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput">unknownExtendedKeyUsagesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `baseKeyUsage`<sup>Required</sup> <a name="baseKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.baseKeyUsage"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference getBaseKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference</a>

---

##### `extendedKeyUsage`<sup>Required</sup> <a name="extendedKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.extendedKeyUsage"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference getExtendedKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference</a>

---

##### `unknownExtendedKeyUsages`<sup>Required</sup> <a name="unknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.unknownExtendedKeyUsages"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList getUnknownExtendedKeyUsages();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList</a>

---

##### `baseKeyUsageInput`<sup>Optional</sup> <a name="baseKeyUsageInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.baseKeyUsageInput"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage getBaseKeyUsageInput();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage</a>

---

##### `extendedKeyUsageInput`<sup>Optional</sup> <a name="extendedKeyUsageInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.extendedKeyUsageInput"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage getExtendedKeyUsageInput();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage</a>

---

##### `unknownExtendedKeyUsagesInput`<sup>Optional</sup> <a name="unknownExtendedKeyUsagesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput"></a>

```java
public java.lang.Object getUnknownExtendedKeyUsagesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference.property.internalValue"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList;

new PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.get"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a>>

---


### PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference;

new PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput">objectIdPathInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectIdPathInput`<sup>Optional</sup> <a name="objectIdPathInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPathInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference;

new PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetExcludedDnsNames">resetExcludedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetExcludedEmailAddresses">resetExcludedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetExcludedIpRanges">resetExcludedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetExcludedUris">resetExcludedUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetPermittedDnsNames">resetPermittedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetPermittedEmailAddresses">resetPermittedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetPermittedIpRanges">resetPermittedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetPermittedUris">resetPermittedUris</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExcludedDnsNames` <a name="resetExcludedDnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetExcludedDnsNames"></a>

```java
public void resetExcludedDnsNames()
```

##### `resetExcludedEmailAddresses` <a name="resetExcludedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetExcludedEmailAddresses"></a>

```java
public void resetExcludedEmailAddresses()
```

##### `resetExcludedIpRanges` <a name="resetExcludedIpRanges" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetExcludedIpRanges"></a>

```java
public void resetExcludedIpRanges()
```

##### `resetExcludedUris` <a name="resetExcludedUris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetExcludedUris"></a>

```java
public void resetExcludedUris()
```

##### `resetPermittedDnsNames` <a name="resetPermittedDnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetPermittedDnsNames"></a>

```java
public void resetPermittedDnsNames()
```

##### `resetPermittedEmailAddresses` <a name="resetPermittedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetPermittedEmailAddresses"></a>

```java
public void resetPermittedEmailAddresses()
```

##### `resetPermittedIpRanges` <a name="resetPermittedIpRanges" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetPermittedIpRanges"></a>

```java
public void resetPermittedIpRanges()
```

##### `resetPermittedUris` <a name="resetPermittedUris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.resetPermittedUris"></a>

```java
public void resetPermittedUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.criticalInput">criticalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedDnsNamesInput">excludedDnsNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedEmailAddressesInput">excludedEmailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedIpRangesInput">excludedIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedUrisInput">excludedUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedDnsNamesInput">permittedDnsNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedEmailAddressesInput">permittedEmailAddressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedIpRangesInput">permittedIpRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedUrisInput">permittedUrisInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.critical">critical</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedDnsNames">excludedDnsNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedEmailAddresses">excludedEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedIpRanges">excludedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedUris">excludedUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedDnsNames">permittedDnsNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedEmailAddresses">permittedEmailAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedIpRanges">permittedIpRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedUris">permittedUris</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `criticalInput`<sup>Optional</sup> <a name="criticalInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.criticalInput"></a>

```java
public java.lang.Object getCriticalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludedDnsNamesInput`<sup>Optional</sup> <a name="excludedDnsNamesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedDnsNamesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedDnsNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedEmailAddressesInput`<sup>Optional</sup> <a name="excludedEmailAddressesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedEmailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedIpRangesInput`<sup>Optional</sup> <a name="excludedIpRangesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getExcludedIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedUrisInput`<sup>Optional</sup> <a name="excludedUrisInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedUrisInput"></a>

```java
public java.util.List<java.lang.String> getExcludedUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedDnsNamesInput`<sup>Optional</sup> <a name="permittedDnsNamesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedDnsNamesInput"></a>

```java
public java.util.List<java.lang.String> getPermittedDnsNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedEmailAddressesInput`<sup>Optional</sup> <a name="permittedEmailAddressesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedEmailAddressesInput"></a>

```java
public java.util.List<java.lang.String> getPermittedEmailAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedIpRangesInput`<sup>Optional</sup> <a name="permittedIpRangesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedIpRangesInput"></a>

```java
public java.util.List<java.lang.String> getPermittedIpRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedUrisInput`<sup>Optional</sup> <a name="permittedUrisInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedUrisInput"></a>

```java
public java.util.List<java.lang.String> getPermittedUrisInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.critical"></a>

```java
public java.lang.Object getCritical();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `excludedDnsNames`<sup>Required</sup> <a name="excludedDnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedDnsNames"></a>

```java
public java.util.List<java.lang.String> getExcludedDnsNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedEmailAddresses`<sup>Required</sup> <a name="excludedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getExcludedEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedIpRanges`<sup>Required</sup> <a name="excludedIpRanges" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedIpRanges"></a>

```java
public java.util.List<java.lang.String> getExcludedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `excludedUris`<sup>Required</sup> <a name="excludedUris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.excludedUris"></a>

```java
public java.util.List<java.lang.String> getExcludedUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedDnsNames`<sup>Required</sup> <a name="permittedDnsNames" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedDnsNames"></a>

```java
public java.util.List<java.lang.String> getPermittedDnsNames();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedEmailAddresses`<sup>Required</sup> <a name="permittedEmailAddresses" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedEmailAddresses"></a>

```java
public java.util.List<java.lang.String> getPermittedEmailAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedIpRanges`<sup>Required</sup> <a name="permittedIpRanges" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedIpRanges"></a>

```java
public java.util.List<java.lang.String> getPermittedIpRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedUris`<sup>Required</sup> <a name="permittedUris" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.permittedUris"></a>

```java
public java.util.List<java.lang.String> getPermittedUris();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference.property.internalValue"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference;

new PrivatecaCertificateAuthorityConfigX509ConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putAdditionalExtensions">putAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putCaOptions">putCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putKeyUsage">putKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putNameConstraints">putNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putPolicyIds">putPolicyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resetAdditionalExtensions">resetAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resetAiaOcspServers">resetAiaOcspServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resetNameConstraints">resetNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resetPolicyIds">resetPolicyIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalExtensions` <a name="putAdditionalExtensions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putAdditionalExtensions"></a>

```java
public void putAdditionalExtensions(IResolvable OR java.util.List<PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putAdditionalExtensions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a>>

---

##### `putCaOptions` <a name="putCaOptions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putCaOptions"></a>

```java
public void putCaOptions(PrivatecaCertificateAuthorityConfigX509ConfigCaOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putCaOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions">PrivatecaCertificateAuthorityConfigX509ConfigCaOptions</a>

---

##### `putKeyUsage` <a name="putKeyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putKeyUsage"></a>

```java
public void putKeyUsage(PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage</a>

---

##### `putNameConstraints` <a name="putNameConstraints" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putNameConstraints"></a>

```java
public void putNameConstraints(PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putNameConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints</a>

---

##### `putPolicyIds` <a name="putPolicyIds" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putPolicyIds"></a>

```java
public void putPolicyIds(IResolvable OR java.util.List<PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.putPolicyIds.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a>>

---

##### `resetAdditionalExtensions` <a name="resetAdditionalExtensions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resetAdditionalExtensions"></a>

```java
public void resetAdditionalExtensions()
```

##### `resetAiaOcspServers` <a name="resetAiaOcspServers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resetAiaOcspServers"></a>

```java
public void resetAiaOcspServers()
```

##### `resetNameConstraints` <a name="resetNameConstraints" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resetNameConstraints"></a>

```java
public void resetNameConstraints()
```

##### `resetPolicyIds` <a name="resetPolicyIds" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.resetPolicyIds"></a>

```java
public void resetPolicyIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.additionalExtensions">additionalExtensions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.caOptions">caOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.keyUsage">keyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.nameConstraints">nameConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.policyIds">policyIds</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.additionalExtensionsInput">additionalExtensionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.aiaOcspServersInput">aiaOcspServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.caOptionsInput">caOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions">PrivatecaCertificateAuthorityConfigX509ConfigCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.keyUsageInput">keyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.nameConstraintsInput">nameConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.policyIdsInput">policyIdsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.aiaOcspServers">aiaOcspServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config">PrivatecaCertificateAuthorityConfigX509Config</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalExtensions`<sup>Required</sup> <a name="additionalExtensions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.additionalExtensions"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList getAdditionalExtensions();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList</a>

---

##### `caOptions`<sup>Required</sup> <a name="caOptions" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.caOptions"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference getCaOptions();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference</a>

---

##### `keyUsage`<sup>Required</sup> <a name="keyUsage" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.keyUsage"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference getKeyUsage();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference</a>

---

##### `nameConstraints`<sup>Required</sup> <a name="nameConstraints" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.nameConstraints"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference getNameConstraints();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraintsOutputReference</a>

---

##### `policyIds`<sup>Required</sup> <a name="policyIds" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.policyIds"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList getPolicyIds();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList</a>

---

##### `additionalExtensionsInput`<sup>Optional</sup> <a name="additionalExtensionsInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.additionalExtensionsInput"></a>

```java
public java.lang.Object getAdditionalExtensionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions">PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions</a>>

---

##### `aiaOcspServersInput`<sup>Optional</sup> <a name="aiaOcspServersInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.aiaOcspServersInput"></a>

```java
public java.util.List<java.lang.String> getAiaOcspServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `caOptionsInput`<sup>Optional</sup> <a name="caOptionsInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.caOptionsInput"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigCaOptions getCaOptionsInput();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigCaOptions">PrivatecaCertificateAuthorityConfigX509ConfigCaOptions</a>

---

##### `keyUsageInput`<sup>Optional</sup> <a name="keyUsageInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.keyUsageInput"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage getKeyUsageInput();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage">PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage</a>

---

##### `nameConstraintsInput`<sup>Optional</sup> <a name="nameConstraintsInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.nameConstraintsInput"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints getNameConstraintsInput();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints">PrivatecaCertificateAuthorityConfigX509ConfigNameConstraints</a>

---

##### `policyIdsInput`<sup>Optional</sup> <a name="policyIdsInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.policyIdsInput"></a>

```java
public java.lang.Object getPolicyIdsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a>>

---

##### `aiaOcspServers`<sup>Required</sup> <a name="aiaOcspServers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.aiaOcspServers"></a>

```java
public java.util.List<java.lang.String> getAiaOcspServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigOutputReference.property.internalValue"></a>

```java
public PrivatecaCertificateAuthorityConfigX509Config getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509Config">PrivatecaCertificateAuthorityConfigX509Config</a>

---


### PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList <a name="PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList;

new PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.get"></a>

```java
public PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a>>

---


### PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference <a name="PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference;

new PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.objectIdPathInput">objectIdPathInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.objectIdPath">objectIdPath</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `objectIdPathInput`<sup>Optional</sup> <a name="objectIdPathInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.objectIdPathInput"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPathInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `objectIdPath`<sup>Required</sup> <a name="objectIdPath" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.objectIdPath"></a>

```java
public java.util.List<java.lang.Number> getObjectIdPath();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds">PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds</a>

---


### PrivatecaCertificateAuthorityKeySpecOutputReference <a name="PrivatecaCertificateAuthorityKeySpecOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityKeySpecOutputReference;

new PrivatecaCertificateAuthorityKeySpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.resetCloudKmsKeyVersion">resetCloudKmsKeyVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAlgorithm` <a name="resetAlgorithm" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.resetAlgorithm"></a>

```java
public void resetAlgorithm()
```

##### `resetCloudKmsKeyVersion` <a name="resetCloudKmsKeyVersion" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.resetCloudKmsKeyVersion"></a>

```java
public void resetCloudKmsKeyVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.algorithmInput">algorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.cloudKmsKeyVersionInput">cloudKmsKeyVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.algorithm">algorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.cloudKmsKeyVersion">cloudKmsKeyVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec">PrivatecaCertificateAuthorityKeySpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.algorithmInput"></a>

```java
public java.lang.String getAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `cloudKmsKeyVersionInput`<sup>Optional</sup> <a name="cloudKmsKeyVersionInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.cloudKmsKeyVersionInput"></a>

```java
public java.lang.String getCloudKmsKeyVersionInput();
```

- *Type:* java.lang.String

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.algorithm"></a>

```java
public java.lang.String getAlgorithm();
```

- *Type:* java.lang.String

---

##### `cloudKmsKeyVersion`<sup>Required</sup> <a name="cloudKmsKeyVersion" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.cloudKmsKeyVersion"></a>

```java
public java.lang.String getCloudKmsKeyVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpecOutputReference.property.internalValue"></a>

```java
public PrivatecaCertificateAuthorityKeySpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityKeySpec">PrivatecaCertificateAuthorityKeySpec</a>

---


### PrivatecaCertificateAuthoritySubordinateConfigOutputReference <a name="PrivatecaCertificateAuthoritySubordinateConfigOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference;

new PrivatecaCertificateAuthoritySubordinateConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.putPemIssuerChain">putPemIssuerChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.resetCertificateAuthority">resetCertificateAuthority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.resetPemIssuerChain">resetPemIssuerChain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPemIssuerChain` <a name="putPemIssuerChain" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.putPemIssuerChain"></a>

```java
public void putPemIssuerChain(PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.putPemIssuerChain.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain</a>

---

##### `resetCertificateAuthority` <a name="resetCertificateAuthority" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.resetCertificateAuthority"></a>

```java
public void resetCertificateAuthority()
```

##### `resetPemIssuerChain` <a name="resetPemIssuerChain" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.resetPemIssuerChain"></a>

```java
public void resetPemIssuerChain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.pemIssuerChain">pemIssuerChain</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.certificateAuthorityInput">certificateAuthorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.pemIssuerChainInput">pemIssuerChainInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.certificateAuthority">certificateAuthority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig">PrivatecaCertificateAuthoritySubordinateConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pemIssuerChain`<sup>Required</sup> <a name="pemIssuerChain" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.pemIssuerChain"></a>

```java
public PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference getPemIssuerChain();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference</a>

---

##### `certificateAuthorityInput`<sup>Optional</sup> <a name="certificateAuthorityInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.certificateAuthorityInput"></a>

```java
public java.lang.String getCertificateAuthorityInput();
```

- *Type:* java.lang.String

---

##### `pemIssuerChainInput`<sup>Optional</sup> <a name="pemIssuerChainInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.pemIssuerChainInput"></a>

```java
public PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain getPemIssuerChainInput();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain</a>

---

##### `certificateAuthority`<sup>Required</sup> <a name="certificateAuthority" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.certificateAuthority"></a>

```java
public java.lang.String getCertificateAuthority();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigOutputReference.property.internalValue"></a>

```java
public PrivatecaCertificateAuthoritySubordinateConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfig">PrivatecaCertificateAuthoritySubordinateConfig</a>

---


### PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference <a name="PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference;

new PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.resetPemCertificates">resetPemCertificates</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPemCertificates` <a name="resetPemCertificates" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.resetPemCertificates"></a>

```java
public void resetPemCertificates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.pemCertificatesInput">pemCertificatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.pemCertificates">pemCertificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pemCertificatesInput`<sup>Optional</sup> <a name="pemCertificatesInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.pemCertificatesInput"></a>

```java
public java.util.List<java.lang.String> getPemCertificatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pemCertificates`<sup>Required</sup> <a name="pemCertificates" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.pemCertificates"></a>

```java
public java.util.List<java.lang.String> getPemCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference.property.internalValue"></a>

```java
public PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain">PrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain</a>

---


### PrivatecaCertificateAuthorityTimeoutsOutputReference <a name="PrivatecaCertificateAuthorityTimeoutsOutputReference" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.privateca_certificate_authority.PrivatecaCertificateAuthorityTimeoutsOutputReference;

new PrivatecaCertificateAuthorityTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts">PrivatecaCertificateAuthorityTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.privatecaCertificateAuthority.PrivatecaCertificateAuthorityTimeouts">PrivatecaCertificateAuthorityTimeouts</a>

---



