# `certificateManagerCertificateIssuanceConfig` Submodule <a name="`certificateManagerCertificateIssuanceConfig` Submodule" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerCertificateIssuanceConfig <a name="CertificateManagerCertificateIssuanceConfig" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config google_certificate_manager_certificate_issuance_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate_issuance_config

certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_authority_config: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig,
  key_algorithm: str,
  lifetime: str,
  name: str,
  rotation_window_percentage: typing.Union[int, float],
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: CertificateManagerCertificateIssuanceConfigTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.certificateAuthorityConfig">certificate_authority_config</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a></code> | certificate_authority_config block. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | Key algorithm to use when generating the private key. Possible values: ["RSA_2048", "ECDSA_P256"]. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.lifetime">lifetime</a></code> | <code>str</code> | Lifetime of issued certificates. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.rotationWindowPercentage">rotation_window_percentage</a></code> | <code>typing.Union[int, float]</code> | It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | One or more paragraphs of text description of a CertificateIssuanceConfig. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#id CertificateManagerCertificateIssuanceConfig#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | 'Set of label tags associated with the CertificateIssuanceConfig resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#project CertificateManagerCertificateIssuanceConfig#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts">CertificateManagerCertificateIssuanceConfigTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_config`<sup>Required</sup> <a name="certificate_authority_config" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.certificateAuthorityConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a>

certificate_authority_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#certificate_authority_config CertificateManagerCertificateIssuanceConfig#certificate_authority_config}

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.keyAlgorithm"></a>

- *Type:* str

Key algorithm to use when generating the private key. Possible values: ["RSA_2048", "ECDSA_P256"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#key_algorithm CertificateManagerCertificateIssuanceConfig#key_algorithm}

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.lifetime"></a>

- *Type:* str

Lifetime of issued certificates.

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "1814400s". Valid values are from 21 days (1814400s) to 30 days (2592000s)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#lifetime CertificateManagerCertificateIssuanceConfig#lifetime}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.name"></a>

- *Type:* str

A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#name CertificateManagerCertificateIssuanceConfig#name}

---

##### `rotation_window_percentage`<sup>Required</sup> <a name="rotation_window_percentage" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.rotationWindowPercentage"></a>

- *Type:* typing.Union[int, float]

It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate.

Must be a number between 1-99, inclusive.
You must set the rotation window percentage in relation to the certificate lifetime so that certificate renewal occurs at least 7 days after
the certificate has been issued and at least 7 days before it expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#rotation_window_percentage CertificateManagerCertificateIssuanceConfig#rotation_window_percentage}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.description"></a>

- *Type:* str

One or more paragraphs of text description of a CertificateIssuanceConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#description CertificateManagerCertificateIssuanceConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#id CertificateManagerCertificateIssuanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

'Set of label tags associated with the CertificateIssuanceConfig resource.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#labels CertificateManagerCertificateIssuanceConfig#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.location"></a>

- *Type:* str

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#location CertificateManagerCertificateIssuanceConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#project CertificateManagerCertificateIssuanceConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts">CertificateManagerCertificateIssuanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#timeouts CertificateManagerCertificateIssuanceConfig#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.putCertificateAuthorityConfig">put_certificate_authority_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_certificate_authority_config` <a name="put_certificate_authority_config" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.putCertificateAuthorityConfig"></a>

```python
def put_certificate_authority_config(
  certificate_authority_service_config: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig = None
) -> None
```

###### `certificate_authority_service_config`<sup>Optional</sup> <a name="certificate_authority_service_config" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.putCertificateAuthorityConfig.parameter.certificateAuthorityServiceConfig"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a>

certificate_authority_service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#certificate_authority_service_config CertificateManagerCertificateIssuanceConfig#certificate_authority_service_config}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#create CertificateManagerCertificateIssuanceConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#delete CertificateManagerCertificateIssuanceConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#update CertificateManagerCertificateIssuanceConfig#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CertificateManagerCertificateIssuanceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate_issuance_config

certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate_issuance_config

certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate_issuance_config

certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate_issuance_config

certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CertificateManagerCertificateIssuanceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CertificateManagerCertificateIssuanceConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CertificateManagerCertificateIssuanceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CertificateManagerCertificateIssuanceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.certificateAuthorityConfig">certificate_authority_config</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference">CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.certificateAuthorityConfigInput">certificate_authority_config_input</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.keyAlgorithmInput">key_algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.lifetimeInput">lifetime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.rotationWindowPercentageInput">rotation_window_percentage_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts">CertificateManagerCertificateIssuanceConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.lifetime">lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.rotationWindowPercentage">rotation_window_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_config`<sup>Required</sup> <a name="certificate_authority_config" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.certificateAuthorityConfig"></a>

```python
certificate_authority_config: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.timeouts"></a>

```python
timeouts: CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference">CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `certificate_authority_config_input`<sup>Optional</sup> <a name="certificate_authority_config_input" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.certificateAuthorityConfigInput"></a>

```python
certificate_authority_config_input: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_algorithm_input`<sup>Optional</sup> <a name="key_algorithm_input" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.keyAlgorithmInput"></a>

```python
key_algorithm_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `lifetime_input`<sup>Optional</sup> <a name="lifetime_input" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.lifetimeInput"></a>

```python
lifetime_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `rotation_window_percentage_input`<sup>Optional</sup> <a name="rotation_window_percentage_input" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.rotationWindowPercentageInput"></a>

```python
rotation_window_percentage_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CertificateManagerCertificateIssuanceConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts">CertificateManagerCertificateIssuanceConfigTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.lifetime"></a>

```python
lifetime: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `rotation_window_percentage`<sup>Required</sup> <a name="rotation_window_percentage" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.rotationWindowPercentage"></a>

```python
rotation_window_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig <a name="CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate_issuance_config

certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig(
  certificate_authority_service_config: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig.property.certificateAuthorityServiceConfig">certificate_authority_service_config</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a></code> | certificate_authority_service_config block. |

---

##### `certificate_authority_service_config`<sup>Optional</sup> <a name="certificate_authority_service_config" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig.property.certificateAuthorityServiceConfig"></a>

```python
certificate_authority_service_config: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a>

certificate_authority_service_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#certificate_authority_service_config CertificateManagerCertificateIssuanceConfig#certificate_authority_service_config}

---

### CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig <a name="CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate_issuance_config

certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig(
  ca_pool: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig.property.caPool">ca_pool</a></code> | <code>str</code> | A CA pool resource used to issue a certificate. |

---

##### `ca_pool`<sup>Required</sup> <a name="ca_pool" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig.property.caPool"></a>

```python
ca_pool: str
```

- *Type:* str

A CA pool resource used to issue a certificate.

The CA pool string has a relative resource path following the form
"projects/{project}/locations/{location}/caPools/{caPool}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#ca_pool CertificateManagerCertificateIssuanceConfig#ca_pool}

---

### CertificateManagerCertificateIssuanceConfigConfig <a name="CertificateManagerCertificateIssuanceConfigConfig" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate_issuance_config

certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  certificate_authority_config: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig,
  key_algorithm: str,
  lifetime: str,
  name: str,
  rotation_window_percentage: typing.Union[int, float],
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: CertificateManagerCertificateIssuanceConfigTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.certificateAuthorityConfig">certificate_authority_config</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a></code> | certificate_authority_config block. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.keyAlgorithm">key_algorithm</a></code> | <code>str</code> | Key algorithm to use when generating the private key. Possible values: ["RSA_2048", "ECDSA_P256"]. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.lifetime">lifetime</a></code> | <code>str</code> | Lifetime of issued certificates. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.name">name</a></code> | <code>str</code> | A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.rotationWindowPercentage">rotation_window_percentage</a></code> | <code>typing.Union[int, float]</code> | It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.description">description</a></code> | <code>str</code> | One or more paragraphs of text description of a CertificateIssuanceConfig. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#id CertificateManagerCertificateIssuanceConfig#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | 'Set of label tags associated with the CertificateIssuanceConfig resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.location">location</a></code> | <code>str</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#project CertificateManagerCertificateIssuanceConfig#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts">CertificateManagerCertificateIssuanceConfigTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `certificate_authority_config`<sup>Required</sup> <a name="certificate_authority_config" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.certificateAuthorityConfig"></a>

```python
certificate_authority_config: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a>

certificate_authority_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#certificate_authority_config CertificateManagerCertificateIssuanceConfig#certificate_authority_config}

---

##### `key_algorithm`<sup>Required</sup> <a name="key_algorithm" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.keyAlgorithm"></a>

```python
key_algorithm: str
```

- *Type:* str

Key algorithm to use when generating the private key. Possible values: ["RSA_2048", "ECDSA_P256"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#key_algorithm CertificateManagerCertificateIssuanceConfig#key_algorithm}

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.lifetime"></a>

```python
lifetime: str
```

- *Type:* str

Lifetime of issued certificates.

A duration in seconds with up to nine fractional digits, ending with 's'.
Example: "1814400s". Valid values are from 21 days (1814400s) to 30 days (2592000s)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#lifetime CertificateManagerCertificateIssuanceConfig#lifetime}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A user-defined name of the certificate issuance config. CertificateIssuanceConfig names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#name CertificateManagerCertificateIssuanceConfig#name}

---

##### `rotation_window_percentage`<sup>Required</sup> <a name="rotation_window_percentage" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.rotationWindowPercentage"></a>

```python
rotation_window_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

It specifies the percentage of elapsed time of the certificate lifetime to wait before renewing the certificate.

Must be a number between 1-99, inclusive.
You must set the rotation window percentage in relation to the certificate lifetime so that certificate renewal occurs at least 7 days after
the certificate has been issued and at least 7 days before it expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#rotation_window_percentage CertificateManagerCertificateIssuanceConfig#rotation_window_percentage}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

One or more paragraphs of text description of a CertificateIssuanceConfig.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#description CertificateManagerCertificateIssuanceConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#id CertificateManagerCertificateIssuanceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

'Set of label tags associated with the CertificateIssuanceConfig resource.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#labels CertificateManagerCertificateIssuanceConfig#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#location CertificateManagerCertificateIssuanceConfig#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#project CertificateManagerCertificateIssuanceConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigConfig.property.timeouts"></a>

```python
timeouts: CertificateManagerCertificateIssuanceConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts">CertificateManagerCertificateIssuanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#timeouts CertificateManagerCertificateIssuanceConfig#timeouts}

---

### CertificateManagerCertificateIssuanceConfigTimeouts <a name="CertificateManagerCertificateIssuanceConfigTimeouts" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate_issuance_config

certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#create CertificateManagerCertificateIssuanceConfig#create}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#delete CertificateManagerCertificateIssuanceConfig#delete}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#update CertificateManagerCertificateIssuanceConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#create CertificateManagerCertificateIssuanceConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#delete CertificateManagerCertificateIssuanceConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#update CertificateManagerCertificateIssuanceConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference <a name="CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate_issuance_config

certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.caPoolInput">ca_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.caPool">ca_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ca_pool_input`<sup>Optional</sup> <a name="ca_pool_input" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.caPoolInput"></a>

```python
ca_pool_input: str
```

- *Type:* str

---

##### `ca_pool`<sup>Required</sup> <a name="ca_pool" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.caPool"></a>

```python
ca_pool: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference.property.internalValue"></a>

```python
internal_value: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a>

---


### CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference <a name="CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate_issuance_config

certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.putCertificateAuthorityServiceConfig">put_certificate_authority_service_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resetCertificateAuthorityServiceConfig">reset_certificate_authority_service_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_certificate_authority_service_config` <a name="put_certificate_authority_service_config" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.putCertificateAuthorityServiceConfig"></a>

```python
def put_certificate_authority_service_config(
  ca_pool: str
) -> None
```

###### `ca_pool`<sup>Required</sup> <a name="ca_pool" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.putCertificateAuthorityServiceConfig.parameter.caPool"></a>

- *Type:* str

A CA pool resource used to issue a certificate.

The CA pool string has a relative resource path following the form
"projects/{project}/locations/{location}/caPools/{caPool}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.0/docs/resources/certificate_manager_certificate_issuance_config#ca_pool CertificateManagerCertificateIssuanceConfig#ca_pool}

---

##### `reset_certificate_authority_service_config` <a name="reset_certificate_authority_service_config" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.resetCertificateAuthorityServiceConfig"></a>

```python
def reset_certificate_authority_service_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.certificateAuthorityServiceConfig">certificate_authority_service_config</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.certificateAuthorityServiceConfigInput">certificate_authority_service_config_input</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_authority_service_config`<sup>Required</sup> <a name="certificate_authority_service_config" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.certificateAuthorityServiceConfig"></a>

```python
certificate_authority_service_config: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfigOutputReference</a>

---

##### `certificate_authority_service_config_input`<sup>Optional</sup> <a name="certificate_authority_service_config_input" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.certificateAuthorityServiceConfigInput"></a>

```python
certificate_authority_service_config_input: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigCertificateAuthorityServiceConfig</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfigOutputReference.property.internalValue"></a>

```python
internal_value: CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig">CertificateManagerCertificateIssuanceConfigCertificateAuthorityConfig</a>

---


### CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference <a name="CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate_issuance_config

certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts">CertificateManagerCertificateIssuanceConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CertificateManagerCertificateIssuanceConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerCertificateIssuanceConfig.CertificateManagerCertificateIssuanceConfigTimeouts">CertificateManagerCertificateIssuanceConfigTimeouts</a>]

---



