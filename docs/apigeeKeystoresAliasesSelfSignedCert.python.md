# `apigeeKeystoresAliasesSelfSignedCert` Submodule <a name="`apigeeKeystoresAliasesSelfSignedCert` Submodule" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeKeystoresAliasesSelfSignedCert <a name="ApigeeKeystoresAliasesSelfSignedCert" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert google_apigee_keystores_aliases_self_signed_cert}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alias: str,
  environment: str,
  keystore: str,
  org_id: str,
  sig_alg: str,
  subject: ApigeeKeystoresAliasesSelfSignedCertSubject,
  cert_validity_in_days: typing.Union[int, float] = None,
  id: str = None,
  key_size: str = None,
  subject_alternative_dns_names: ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames = None,
  timeouts: ApigeeKeystoresAliasesSelfSignedCertTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias for the key/certificate pair. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.environment">environment</a></code> | <code>str</code> | The Apigee environment name. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.keystore">keystore</a></code> | <code>str</code> | The Apigee keystore name associated in an Apigee environment. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization name associated with the Apigee environment. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.sigAlg">sig_alg</a></code> | <code>str</code> | Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.subject">subject</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | subject block. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.certValidityInDays">cert_validity_in_days</a></code> | <code>typing.Union[int, float]</code> | Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#id ApigeeKeystoresAliasesSelfSignedCert#id}. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.keySize">key_size</a></code> | <code>str</code> | Key size. Default and maximum value is 2048 bits. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.subjectAlternativeDnsNames">subject_alternative_dns_names</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | subject_alternative_dns_names block. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.alias"></a>

- *Type:* str

Alias for the key/certificate pair.

Values must match the regular expression [\w\s-.]{1,255}.
This must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either
this parameter or the JSON body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#alias ApigeeKeystoresAliasesSelfSignedCert#alias}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.environment"></a>

- *Type:* str

The Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#environment ApigeeKeystoresAliasesSelfSignedCert#environment}

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.keystore"></a>

- *Type:* str

The Apigee keystore name associated in an Apigee environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#keystore ApigeeKeystoresAliasesSelfSignedCert#keystore}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.orgId"></a>

- *Type:* str

The Apigee Organization name associated with the Apigee environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#org_id ApigeeKeystoresAliasesSelfSignedCert#org_id}

---

##### `sig_alg`<sup>Required</sup> <a name="sig_alg" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.sigAlg"></a>

- *Type:* str

Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#sig_alg ApigeeKeystoresAliasesSelfSignedCert#sig_alg}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.subject"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#subject ApigeeKeystoresAliasesSelfSignedCert#subject}

---

##### `cert_validity_in_days`<sup>Optional</sup> <a name="cert_validity_in_days" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.certValidityInDays"></a>

- *Type:* typing.Union[int, float]

Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#cert_validity_in_days ApigeeKeystoresAliasesSelfSignedCert#cert_validity_in_days}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#id ApigeeKeystoresAliasesSelfSignedCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_size`<sup>Optional</sup> <a name="key_size" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.keySize"></a>

- *Type:* str

Key size. Default and maximum value is 2048 bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#key_size ApigeeKeystoresAliasesSelfSignedCert#key_size}

---

##### `subject_alternative_dns_names`<sup>Optional</sup> <a name="subject_alternative_dns_names" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.subjectAlternativeDnsNames"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

subject_alternative_dns_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#subject_alternative_dns_names ApigeeKeystoresAliasesSelfSignedCert#subject_alternative_dns_names}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#timeouts ApigeeKeystoresAliasesSelfSignedCert#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubject">put_subject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubjectAlternativeDnsNames">put_subject_alternative_dns_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetCertValidityInDays">reset_cert_validity_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetKeySize">reset_key_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetSubjectAlternativeDnsNames">reset_subject_alternative_dns_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_subject` <a name="put_subject" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubject"></a>

```python
def put_subject(
  common_name: str = None,
  country_code: str = None,
  email: str = None,
  locality: str = None,
  org: str = None,
  org_unit: str = None,
  state: str = None
) -> None
```

###### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubject.parameter.commonName"></a>

- *Type:* str

Common name of the organization. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#common_name ApigeeKeystoresAliasesSelfSignedCert#common_name}

---

###### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubject.parameter.countryCode"></a>

- *Type:* str

Two-letter country code. Example, IN for India, US for United States of America.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#country_code ApigeeKeystoresAliasesSelfSignedCert#country_code}

---

###### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubject.parameter.email"></a>

- *Type:* str

Email address. Max 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#email ApigeeKeystoresAliasesSelfSignedCert#email}

---

###### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubject.parameter.locality"></a>

- *Type:* str

City or town name. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#locality ApigeeKeystoresAliasesSelfSignedCert#locality}

---

###### `org`<sup>Optional</sup> <a name="org" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubject.parameter.org"></a>

- *Type:* str

Organization name. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#org ApigeeKeystoresAliasesSelfSignedCert#org}

---

###### `org_unit`<sup>Optional</sup> <a name="org_unit" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubject.parameter.orgUnit"></a>

- *Type:* str

Organization team name. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#org_unit ApigeeKeystoresAliasesSelfSignedCert#org_unit}

---

###### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubject.parameter.state"></a>

- *Type:* str

State or district name. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#state ApigeeKeystoresAliasesSelfSignedCert#state}

---

##### `put_subject_alternative_dns_names` <a name="put_subject_alternative_dns_names" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubjectAlternativeDnsNames"></a>

```python
def put_subject_alternative_dns_names(
  subject_alternative_name: str = None
) -> None
```

###### `subject_alternative_name`<sup>Optional</sup> <a name="subject_alternative_name" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putSubjectAlternativeDnsNames.parameter.subjectAlternativeName"></a>

- *Type:* str

Subject Alternative Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#subject_alternative_name ApigeeKeystoresAliasesSelfSignedCert#subject_alternative_name}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#create ApigeeKeystoresAliasesSelfSignedCert#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#delete ApigeeKeystoresAliasesSelfSignedCert#delete}.

---

##### `reset_cert_validity_in_days` <a name="reset_cert_validity_in_days" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetCertValidityInDays"></a>

```python
def reset_cert_validity_in_days() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key_size` <a name="reset_key_size" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetKeySize"></a>

```python
def reset_key_size() -> None
```

##### `reset_subject_alternative_dns_names` <a name="reset_subject_alternative_dns_names" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetSubjectAlternativeDnsNames"></a>

```python
def reset_subject_alternative_dns_names() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApigeeKeystoresAliasesSelfSignedCert resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.is_construct(
  x: typing.Any
)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApigeeKeystoresAliasesSelfSignedCert resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApigeeKeystoresAliasesSelfSignedCert to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApigeeKeystoresAliasesSelfSignedCert that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeKeystoresAliasesSelfSignedCert to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certsInfo">certs_info</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList">ApigeeKeystoresAliasesSelfSignedCertCertsInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference">ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNames">subject_alternative_dns_names</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference">ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDaysInput">cert_validity_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.environmentInput">environment_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keySizeInput">key_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keystoreInput">keystore_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.sigAlgInput">sig_alg_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNamesInput">subject_alternative_dns_names_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectInput">subject_input</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDays">cert_validity_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.environment">environment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keySize">key_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keystore">keystore</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.sigAlg">sig_alg</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certs_info`<sup>Required</sup> <a name="certs_info" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certsInfo"></a>

```python
certs_info: ApigeeKeystoresAliasesSelfSignedCertCertsInfoList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList">ApigeeKeystoresAliasesSelfSignedCertCertsInfoList</a>

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subject"></a>

```python
subject: ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference">ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference</a>

---

##### `subject_alternative_dns_names`<sup>Required</sup> <a name="subject_alternative_dns_names" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNames"></a>

```python
subject_alternative_dns_names: ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.timeouts"></a>

```python
timeouts: ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference">ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `cert_validity_in_days_input`<sup>Optional</sup> <a name="cert_validity_in_days_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDaysInput"></a>

```python
cert_validity_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `environment_input`<sup>Optional</sup> <a name="environment_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.environmentInput"></a>

```python
environment_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_size_input`<sup>Optional</sup> <a name="key_size_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keySizeInput"></a>

```python
key_size_input: str
```

- *Type:* str

---

##### `keystore_input`<sup>Optional</sup> <a name="keystore_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keystoreInput"></a>

```python
keystore_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `sig_alg_input`<sup>Optional</sup> <a name="sig_alg_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.sigAlgInput"></a>

```python
sig_alg_input: str
```

- *Type:* str

---

##### `subject_alternative_dns_names_input`<sup>Optional</sup> <a name="subject_alternative_dns_names_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectAlternativeDnsNamesInput"></a>

```python
subject_alternative_dns_names_input: ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

---

##### `subject_input`<sup>Optional</sup> <a name="subject_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.subjectInput"></a>

```python
subject_input: ApigeeKeystoresAliasesSelfSignedCertSubject
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApigeeKeystoresAliasesSelfSignedCertTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a>]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `cert_validity_in_days`<sup>Required</sup> <a name="cert_validity_in_days" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.certValidityInDays"></a>

```python
cert_validity_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.environment"></a>

```python
environment: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_size`<sup>Required</sup> <a name="key_size" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keySize"></a>

```python
key_size: str
```

- *Type:* str

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.keystore"></a>

```python
keystore: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `sig_alg`<sup>Required</sup> <a name="sig_alg" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.sigAlg"></a>

```python
sig_alg: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCert.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeKeystoresAliasesSelfSignedCertCertsInfo <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfo()
```


### ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo()
```


### ApigeeKeystoresAliasesSelfSignedCertConfig <a name="ApigeeKeystoresAliasesSelfSignedCertConfig" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  alias: str,
  environment: str,
  keystore: str,
  org_id: str,
  sig_alg: str,
  subject: ApigeeKeystoresAliasesSelfSignedCertSubject,
  cert_validity_in_days: typing.Union[int, float] = None,
  id: str = None,
  key_size: str = None,
  subject_alternative_dns_names: ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames = None,
  timeouts: ApigeeKeystoresAliasesSelfSignedCertTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.alias">alias</a></code> | <code>str</code> | Alias for the key/certificate pair. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.environment">environment</a></code> | <code>str</code> | The Apigee environment name. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.keystore">keystore</a></code> | <code>str</code> | The Apigee keystore name associated in an Apigee environment. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.orgId">org_id</a></code> | <code>str</code> | The Apigee Organization name associated with the Apigee environment. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.sigAlg">sig_alg</a></code> | <code>str</code> | Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.subject">subject</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | subject block. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.certValidityInDays">cert_validity_in_days</a></code> | <code>typing.Union[int, float]</code> | Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#id ApigeeKeystoresAliasesSelfSignedCert#id}. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.keySize">key_size</a></code> | <code>str</code> | Key size. Default and maximum value is 2048 bits. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.subjectAlternativeDnsNames">subject_alternative_dns_names</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | subject_alternative_dns_names block. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `alias`<sup>Required</sup> <a name="alias" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias for the key/certificate pair.

Values must match the regular expression [\w\s-.]{1,255}.
This must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either
this parameter or the JSON body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#alias ApigeeKeystoresAliasesSelfSignedCert#alias}

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.environment"></a>

```python
environment: str
```

- *Type:* str

The Apigee environment name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#environment ApigeeKeystoresAliasesSelfSignedCert#environment}

---

##### `keystore`<sup>Required</sup> <a name="keystore" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.keystore"></a>

```python
keystore: str
```

- *Type:* str

The Apigee keystore name associated in an Apigee environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#keystore ApigeeKeystoresAliasesSelfSignedCert#keystore}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The Apigee Organization name associated with the Apigee environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#org_id ApigeeKeystoresAliasesSelfSignedCert#org_id}

---

##### `sig_alg`<sup>Required</sup> <a name="sig_alg" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.sigAlg"></a>

```python
sig_alg: str
```

- *Type:* str

Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#sig_alg ApigeeKeystoresAliasesSelfSignedCert#sig_alg}

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.subject"></a>

```python
subject: ApigeeKeystoresAliasesSelfSignedCertSubject
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a>

subject block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#subject ApigeeKeystoresAliasesSelfSignedCert#subject}

---

##### `cert_validity_in_days`<sup>Optional</sup> <a name="cert_validity_in_days" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.certValidityInDays"></a>

```python
cert_validity_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#cert_validity_in_days ApigeeKeystoresAliasesSelfSignedCert#cert_validity_in_days}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#id ApigeeKeystoresAliasesSelfSignedCert#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key_size`<sup>Optional</sup> <a name="key_size" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.keySize"></a>

```python
key_size: str
```

- *Type:* str

Key size. Default and maximum value is 2048 bits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#key_size ApigeeKeystoresAliasesSelfSignedCert#key_size}

---

##### `subject_alternative_dns_names`<sup>Optional</sup> <a name="subject_alternative_dns_names" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.subjectAlternativeDnsNames"></a>

```python
subject_alternative_dns_names: ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

subject_alternative_dns_names block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#subject_alternative_dns_names ApigeeKeystoresAliasesSelfSignedCert#subject_alternative_dns_names}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertConfig.property.timeouts"></a>

```python
timeouts: ApigeeKeystoresAliasesSelfSignedCertTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#timeouts ApigeeKeystoresAliasesSelfSignedCert#timeouts}

---

### ApigeeKeystoresAliasesSelfSignedCertSubject <a name="ApigeeKeystoresAliasesSelfSignedCertSubject" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject(
  common_name: str = None,
  country_code: str = None,
  email: str = None,
  locality: str = None,
  org: str = None,
  org_unit: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.commonName">common_name</a></code> | <code>str</code> | Common name of the organization. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.countryCode">country_code</a></code> | <code>str</code> | Two-letter country code. Example, IN for India, US for United States of America. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.email">email</a></code> | <code>str</code> | Email address. Max 255 characters. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.locality">locality</a></code> | <code>str</code> | City or town name. Maximum length is 128 characters. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.org">org</a></code> | <code>str</code> | Organization name. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.orgUnit">org_unit</a></code> | <code>str</code> | Organization team name. Maximum length is 64 characters. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.state">state</a></code> | <code>str</code> | State or district name. Maximum length is 128 characters. |

---

##### `common_name`<sup>Optional</sup> <a name="common_name" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

Common name of the organization. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#common_name ApigeeKeystoresAliasesSelfSignedCert#common_name}

---

##### `country_code`<sup>Optional</sup> <a name="country_code" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

Two-letter country code. Example, IN for India, US for United States of America.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#country_code ApigeeKeystoresAliasesSelfSignedCert#country_code}

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.email"></a>

```python
email: str
```

- *Type:* str

Email address. Max 255 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#email ApigeeKeystoresAliasesSelfSignedCert#email}

---

##### `locality`<sup>Optional</sup> <a name="locality" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.locality"></a>

```python
locality: str
```

- *Type:* str

City or town name. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#locality ApigeeKeystoresAliasesSelfSignedCert#locality}

---

##### `org`<sup>Optional</sup> <a name="org" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.org"></a>

```python
org: str
```

- *Type:* str

Organization name. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#org ApigeeKeystoresAliasesSelfSignedCert#org}

---

##### `org_unit`<sup>Optional</sup> <a name="org_unit" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.orgUnit"></a>

```python
org_unit: str
```

- *Type:* str

Organization team name. Maximum length is 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#org_unit ApigeeKeystoresAliasesSelfSignedCert#org_unit}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject.property.state"></a>

```python
state: str
```

- *Type:* str

State or district name. Maximum length is 128 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#state ApigeeKeystoresAliasesSelfSignedCert#state}

---

### ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames <a name="ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames(
  subject_alternative_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames.property.subjectAlternativeName">subject_alternative_name</a></code> | <code>str</code> | Subject Alternative Name. |

---

##### `subject_alternative_name`<sup>Optional</sup> <a name="subject_alternative_name" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames.property.subjectAlternativeName"></a>

```python
subject_alternative_name: str
```

- *Type:* str

Subject Alternative Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#subject_alternative_name ApigeeKeystoresAliasesSelfSignedCert#subject_alternative_name}

---

### ApigeeKeystoresAliasesSelfSignedCertTimeouts <a name="ApigeeKeystoresAliasesSelfSignedCertTimeouts" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#create ApigeeKeystoresAliasesSelfSignedCert#create}. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#delete ApigeeKeystoresAliasesSelfSignedCert#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#create ApigeeKeystoresAliasesSelfSignedCert#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.7.0/docs/resources/apigee_keystores_aliases_self_signed_cert#delete ApigeeKeystoresAliasesSelfSignedCert#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.basicConstraints">basic_constraints</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.expiryDate">expiry_date</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.issuer">issuer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.isValid">is_valid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.publicKey">public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.serialNumber">serial_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.sigAlgName">sig_alg_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subject">subject</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subjectAlternativeNames">subject_alternative_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.validFrom">valid_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo">ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `basic_constraints`<sup>Required</sup> <a name="basic_constraints" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.basicConstraints"></a>

```python
basic_constraints: str
```

- *Type:* str

---

##### `expiry_date`<sup>Required</sup> <a name="expiry_date" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.expiryDate"></a>

```python
expiry_date: str
```

- *Type:* str

---

##### `issuer`<sup>Required</sup> <a name="issuer" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.issuer"></a>

```python
issuer: str
```

- *Type:* str

---

##### `is_valid`<sup>Required</sup> <a name="is_valid" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.isValid"></a>

```python
is_valid: str
```

- *Type:* str

---

##### `public_key`<sup>Required</sup> <a name="public_key" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.publicKey"></a>

```python
public_key: str
```

- *Type:* str

---

##### `serial_number`<sup>Required</sup> <a name="serial_number" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.serialNumber"></a>

```python
serial_number: str
```

- *Type:* str

---

##### `sig_alg_name`<sup>Required</sup> <a name="sig_alg_name" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.sigAlgName"></a>

```python
sig_alg_name: str
```

- *Type:* str

---

##### `subject`<sup>Required</sup> <a name="subject" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subject"></a>

```python
subject: str
```

- *Type:* str

---

##### `subject_alternative_names`<sup>Required</sup> <a name="subject_alternative_names" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.subjectAlternativeNames"></a>

```python
subject_alternative_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `valid_from`<sup>Required</sup> <a name="valid_from" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.validFrom"></a>

```python
valid_from: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo">ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo</a>

---


### ApigeeKeystoresAliasesSelfSignedCertCertsInfoList <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfoList" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference <a name="ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.certInfo">cert_info</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList">ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfo">ApigeeKeystoresAliasesSelfSignedCertCertsInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_info`<sup>Required</sup> <a name="cert_info" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.certInfo"></a>

```python
cert_info: ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList">ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeKeystoresAliasesSelfSignedCertCertsInfo
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertCertsInfo">ApigeeKeystoresAliasesSelfSignedCertCertsInfo</a>

---


### ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference <a name="ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resetSubjectAlternativeName">reset_subject_alternative_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_subject_alternative_name` <a name="reset_subject_alternative_name" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.resetSubjectAlternativeName"></a>

```python
def reset_subject_alternative_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeNameInput">subject_alternative_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeName">subject_alternative_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `subject_alternative_name_input`<sup>Optional</sup> <a name="subject_alternative_name_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeNameInput"></a>

```python
subject_alternative_name_input: str
```

- *Type:* str

---

##### `subject_alternative_name`<sup>Required</sup> <a name="subject_alternative_name" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.subjectAlternativeName"></a>

```python
subject_alternative_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames">ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames</a>

---


### ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference <a name="ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCommonName">reset_common_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCountryCode">reset_country_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetEmail">reset_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetLocality">reset_locality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrg">reset_org</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrgUnit">reset_org_unit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetState">reset_state</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_common_name` <a name="reset_common_name" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCommonName"></a>

```python
def reset_common_name() -> None
```

##### `reset_country_code` <a name="reset_country_code" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetCountryCode"></a>

```python
def reset_country_code() -> None
```

##### `reset_email` <a name="reset_email" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetEmail"></a>

```python
def reset_email() -> None
```

##### `reset_locality` <a name="reset_locality" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetLocality"></a>

```python
def reset_locality() -> None
```

##### `reset_org` <a name="reset_org" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrg"></a>

```python
def reset_org() -> None
```

##### `reset_org_unit` <a name="reset_org_unit" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetOrgUnit"></a>

```python
def reset_org_unit() -> None
```

##### `reset_state` <a name="reset_state" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.resetState"></a>

```python
def reset_state() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonNameInput">common_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCodeInput">country_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.localityInput">locality_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgInput">org_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnitInput">org_unit_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonName">common_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCode">country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.locality">locality</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.org">org</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnit">org_unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `common_name_input`<sup>Optional</sup> <a name="common_name_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonNameInput"></a>

```python
common_name_input: str
```

- *Type:* str

---

##### `country_code_input`<sup>Optional</sup> <a name="country_code_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCodeInput"></a>

```python
country_code_input: str
```

- *Type:* str

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `locality_input`<sup>Optional</sup> <a name="locality_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.localityInput"></a>

```python
locality_input: str
```

- *Type:* str

---

##### `org_input`<sup>Optional</sup> <a name="org_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgInput"></a>

```python
org_input: str
```

- *Type:* str

---

##### `org_unit_input`<sup>Optional</sup> <a name="org_unit_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnitInput"></a>

```python
org_unit_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `common_name`<sup>Required</sup> <a name="common_name" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.commonName"></a>

```python
common_name: str
```

- *Type:* str

---

##### `country_code`<sup>Required</sup> <a name="country_code" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.countryCode"></a>

```python
country_code: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `locality`<sup>Required</sup> <a name="locality" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.locality"></a>

```python
locality: str
```

- *Type:* str

---

##### `org`<sup>Required</sup> <a name="org" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.org"></a>

```python
org: str
```

- *Type:* str

---

##### `org_unit`<sup>Required</sup> <a name="org_unit" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.orgUnit"></a>

```python
org_unit: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference.property.internalValue"></a>

```python
internal_value: ApigeeKeystoresAliasesSelfSignedCertSubject
```

- *Type:* <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertSubject">ApigeeKeystoresAliasesSelfSignedCertSubject</a>

---


### ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference <a name="ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import apigee_keystores_aliases_self_signed_cert

apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApigeeKeystoresAliasesSelfSignedCertTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.apigeeKeystoresAliasesSelfSignedCert.ApigeeKeystoresAliasesSelfSignedCertTimeouts">ApigeeKeystoresAliasesSelfSignedCertTimeouts</a>]

---



