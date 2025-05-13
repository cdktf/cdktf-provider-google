# `certificateManagerTrustConfig` Submodule <a name="`certificateManagerTrustConfig` Submodule" id="@cdktf/provider-google.certificateManagerTrustConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerTrustConfig <a name="CertificateManagerTrustConfig" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config google_certificate_manager_trust_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  allowlisted_certificates: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigAllowlistedCertificates]] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: CertificateManagerTrustConfigTimeouts = None,
  trust_stores: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigTrustStores]] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The trust config location. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.name">name</a></code> | <code>str</code> | A user-defined name of the trust config. Trust config names must be unique globally. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.allowlistedCertificates">allowlisted_certificates</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>]]</code> | allowlisted_certificates block. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | One or more paragraphs of text description of a trust config. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#id CertificateManagerTrustConfig#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the trust config. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#project CertificateManagerTrustConfig#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.trustStores">trust_stores</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>]]</code> | trust_stores block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.location"></a>

- *Type:* str

The trust config location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#location CertificateManagerTrustConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.name"></a>

- *Type:* str

A user-defined name of the trust config. Trust config names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#name CertificateManagerTrustConfig#name}

---

##### `allowlisted_certificates`<sup>Optional</sup> <a name="allowlisted_certificates" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.allowlistedCertificates"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>]]

allowlisted_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#allowlisted_certificates CertificateManagerTrustConfig#allowlisted_certificates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.description"></a>

- *Type:* str

One or more paragraphs of text description of a trust config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#description CertificateManagerTrustConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#id CertificateManagerTrustConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the trust config.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#labels CertificateManagerTrustConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#project CertificateManagerTrustConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#timeouts CertificateManagerTrustConfig#timeouts}

---

##### `trust_stores`<sup>Optional</sup> <a name="trust_stores" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.Initializer.parameter.trustStores"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>]]

trust_stores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#trust_stores CertificateManagerTrustConfig#trust_stores}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putAllowlistedCertificates">put_allowlisted_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTrustStores">put_trust_stores</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetAllowlistedCertificates">reset_allowlisted_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetTrustStores">reset_trust_stores</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_allowlisted_certificates` <a name="put_allowlisted_certificates" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putAllowlistedCertificates"></a>

```python
def put_allowlisted_certificates(
  value: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigAllowlistedCertificates]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putAllowlistedCertificates.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#create CertificateManagerTrustConfig#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#delete CertificateManagerTrustConfig#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#update CertificateManagerTrustConfig#update}.

---

##### `put_trust_stores` <a name="put_trust_stores" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTrustStores"></a>

```python
def put_trust_stores(
  value: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigTrustStores]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.putTrustStores.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>]]

---

##### `reset_allowlisted_certificates` <a name="reset_allowlisted_certificates" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetAllowlistedCertificates"></a>

```python
def reset_allowlisted_certificates() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_trust_stores` <a name="reset_trust_stores" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.resetTrustStores"></a>

```python
def reset_trust_stores() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CertificateManagerTrustConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CertificateManagerTrustConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CertificateManagerTrustConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CertificateManagerTrustConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CertificateManagerTrustConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.allowlistedCertificates">allowlisted_certificates</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList">CertificateManagerTrustConfigAllowlistedCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference">CertificateManagerTrustConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.trustStores">trust_stores</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList">CertificateManagerTrustConfigTrustStoresList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.allowlistedCertificatesInput">allowlisted_certificates_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.trustStoresInput">trust_stores_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowlisted_certificates`<sup>Required</sup> <a name="allowlisted_certificates" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.allowlistedCertificates"></a>

```python
allowlisted_certificates: CertificateManagerTrustConfigAllowlistedCertificatesList
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList">CertificateManagerTrustConfigAllowlistedCertificatesList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.timeouts"></a>

```python
timeouts: CertificateManagerTrustConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference">CertificateManagerTrustConfigTimeoutsOutputReference</a>

---

##### `trust_stores`<sup>Required</sup> <a name="trust_stores" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.trustStores"></a>

```python
trust_stores: CertificateManagerTrustConfigTrustStoresList
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList">CertificateManagerTrustConfigTrustStoresList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `allowlisted_certificates_input`<sup>Optional</sup> <a name="allowlisted_certificates_input" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.allowlistedCertificatesInput"></a>

```python
allowlisted_certificates_input: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigAllowlistedCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CertificateManagerTrustConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a>]

---

##### `trust_stores_input`<sup>Optional</sup> <a name="trust_stores_input" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.trustStoresInput"></a>

```python
trust_stores_input: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigTrustStores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>]]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerTrustConfigAllowlistedCertificates <a name="CertificateManagerTrustConfigAllowlistedCertificates" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates(
  pem_certificate: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | PEM certificate that is allowlisted. |

---

##### `pem_certificate`<sup>Required</sup> <a name="pem_certificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

PEM certificate that is allowlisted.

The certificate can be up to 5k bytes, and must be a parseable X.509 certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#pem_certificate CertificateManagerTrustConfig#pem_certificate}

---

### CertificateManagerTrustConfigConfig <a name="CertificateManagerTrustConfigConfig" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  allowlisted_certificates: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigAllowlistedCertificates]] = None,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: CertificateManagerTrustConfigTimeouts = None,
  trust_stores: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigTrustStores]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.location">location</a></code> | <code>str</code> | The trust config location. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.name">name</a></code> | <code>str</code> | A user-defined name of the trust config. Trust config names must be unique globally. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.allowlistedCertificates">allowlisted_certificates</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>]]</code> | allowlisted_certificates block. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.description">description</a></code> | <code>str</code> | One or more paragraphs of text description of a trust config. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#id CertificateManagerTrustConfig#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the trust config. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#project CertificateManagerTrustConfig#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.trustStores">trust_stores</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>]]</code> | trust_stores block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The trust config location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#location CertificateManagerTrustConfig#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A user-defined name of the trust config. Trust config names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#name CertificateManagerTrustConfig#name}

---

##### `allowlisted_certificates`<sup>Optional</sup> <a name="allowlisted_certificates" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.allowlistedCertificates"></a>

```python
allowlisted_certificates: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigAllowlistedCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>]]

allowlisted_certificates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#allowlisted_certificates CertificateManagerTrustConfig#allowlisted_certificates}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

One or more paragraphs of text description of a trust config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#description CertificateManagerTrustConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#id CertificateManagerTrustConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the trust config.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#labels CertificateManagerTrustConfig#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#project CertificateManagerTrustConfig#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.timeouts"></a>

```python
timeouts: CertificateManagerTrustConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#timeouts CertificateManagerTrustConfig#timeouts}

---

##### `trust_stores`<sup>Optional</sup> <a name="trust_stores" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigConfig.property.trustStores"></a>

```python
trust_stores: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigTrustStores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>]]

trust_stores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#trust_stores CertificateManagerTrustConfig#trust_stores}

---

### CertificateManagerTrustConfigTimeouts <a name="CertificateManagerTrustConfigTimeouts" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#create CertificateManagerTrustConfig#create}. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#delete CertificateManagerTrustConfig#delete}. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#update CertificateManagerTrustConfig#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#create CertificateManagerTrustConfig#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#delete CertificateManagerTrustConfig#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#update CertificateManagerTrustConfig#update}.

---

### CertificateManagerTrustConfigTrustStores <a name="CertificateManagerTrustConfigTrustStores" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores(
  intermediate_cas: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigTrustStoresIntermediateCas]] = None,
  trust_anchors: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigTrustStoresTrustAnchors]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.property.intermediateCas">intermediate_cas</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>]]</code> | intermediate_cas block. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.property.trustAnchors">trust_anchors</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>]]</code> | trust_anchors block. |

---

##### `intermediate_cas`<sup>Optional</sup> <a name="intermediate_cas" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.property.intermediateCas"></a>

```python
intermediate_cas: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigTrustStoresIntermediateCas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>]]

intermediate_cas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#intermediate_cas CertificateManagerTrustConfig#intermediate_cas}

---

##### `trust_anchors`<sup>Optional</sup> <a name="trust_anchors" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores.property.trustAnchors"></a>

```python
trust_anchors: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigTrustStoresTrustAnchors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>]]

trust_anchors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#trust_anchors CertificateManagerTrustConfig#trust_anchors}

---

### CertificateManagerTrustConfigTrustStoresIntermediateCas <a name="CertificateManagerTrustConfigTrustStoresIntermediateCas" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas(
  pem_certificate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | PEM intermediate certificate used for building up paths for validation. |

---

##### `pem_certificate`<sup>Optional</sup> <a name="pem_certificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

PEM intermediate certificate used for building up paths for validation.

Each certificate provided in PEM format may occupy up to 5kB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#pem_certificate CertificateManagerTrustConfig#pem_certificate}

---

### CertificateManagerTrustConfigTrustStoresTrustAnchors <a name="CertificateManagerTrustConfigTrustStoresTrustAnchors" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors(
  pem_certificate: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB. |

---

##### `pem_certificate`<sup>Optional</sup> <a name="pem_certificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

PEM root certificate of the PKI used for validation. Each certificate provided in PEM format may occupy up to 5kB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/certificate_manager_trust_config#pem_certificate CertificateManagerTrustConfig#pem_certificate}

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerTrustConfigAllowlistedCertificatesList <a name="CertificateManagerTrustConfigAllowlistedCertificatesList" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificateManagerTrustConfigAllowlistedCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigAllowlistedCertificates]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>]]

---


### CertificateManagerTrustConfigAllowlistedCertificatesOutputReference <a name="CertificateManagerTrustConfigAllowlistedCertificatesOutputReference" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificateInput">pem_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pem_certificate_input`<sup>Optional</sup> <a name="pem_certificate_input" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificateInput"></a>

```python
pem_certificate_input: str
```

- *Type:* str

---

##### `pem_certificate`<sup>Required</sup> <a name="pem_certificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificatesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CertificateManagerTrustConfigAllowlistedCertificates]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigAllowlistedCertificates">CertificateManagerTrustConfigAllowlistedCertificates</a>]

---


### CertificateManagerTrustConfigTimeoutsOutputReference <a name="CertificateManagerTrustConfigTimeoutsOutputReference" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CertificateManagerTrustConfigTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTimeouts">CertificateManagerTrustConfigTimeouts</a>]

---


### CertificateManagerTrustConfigTrustStoresIntermediateCasList <a name="CertificateManagerTrustConfigTrustStoresIntermediateCasList" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigTrustStoresIntermediateCas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>]]

---


### CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference <a name="CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resetPemCertificate">reset_pem_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pem_certificate` <a name="reset_pem_certificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.resetPemCertificate"></a>

```python
def reset_pem_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificateInput">pem_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pem_certificate_input`<sup>Optional</sup> <a name="pem_certificate_input" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificateInput"></a>

```python
pem_certificate_input: str
```

- *Type:* str

---

##### `pem_certificate`<sup>Required</sup> <a name="pem_certificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CertificateManagerTrustConfigTrustStoresIntermediateCas]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>]

---


### CertificateManagerTrustConfigTrustStoresList <a name="CertificateManagerTrustConfigTrustStoresList" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificateManagerTrustConfigTrustStoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigTrustStores]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>]]

---


### CertificateManagerTrustConfigTrustStoresOutputReference <a name="CertificateManagerTrustConfigTrustStoresOutputReference" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas">put_intermediate_cas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors">put_trust_anchors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resetIntermediateCas">reset_intermediate_cas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resetTrustAnchors">reset_trust_anchors</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_intermediate_cas` <a name="put_intermediate_cas" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas"></a>

```python
def put_intermediate_cas(
  value: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigTrustStoresIntermediateCas]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putIntermediateCas.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>]]

---

##### `put_trust_anchors` <a name="put_trust_anchors" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors"></a>

```python
def put_trust_anchors(
  value: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigTrustStoresTrustAnchors]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.putTrustAnchors.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>]]

---

##### `reset_intermediate_cas` <a name="reset_intermediate_cas" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resetIntermediateCas"></a>

```python
def reset_intermediate_cas() -> None
```

##### `reset_trust_anchors` <a name="reset_trust_anchors" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.resetTrustAnchors"></a>

```python
def reset_trust_anchors() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCas">intermediate_cas</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList">CertificateManagerTrustConfigTrustStoresIntermediateCasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchors">trust_anchors</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList">CertificateManagerTrustConfigTrustStoresTrustAnchorsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCasInput">intermediate_cas_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchorsInput">trust_anchors_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `intermediate_cas`<sup>Required</sup> <a name="intermediate_cas" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCas"></a>

```python
intermediate_cas: CertificateManagerTrustConfigTrustStoresIntermediateCasList
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCasList">CertificateManagerTrustConfigTrustStoresIntermediateCasList</a>

---

##### `trust_anchors`<sup>Required</sup> <a name="trust_anchors" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchors"></a>

```python
trust_anchors: CertificateManagerTrustConfigTrustStoresTrustAnchorsList
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList">CertificateManagerTrustConfigTrustStoresTrustAnchorsList</a>

---

##### `intermediate_cas_input`<sup>Optional</sup> <a name="intermediate_cas_input" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.intermediateCasInput"></a>

```python
intermediate_cas_input: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigTrustStoresIntermediateCas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresIntermediateCas">CertificateManagerTrustConfigTrustStoresIntermediateCas</a>]]

---

##### `trust_anchors_input`<sup>Optional</sup> <a name="trust_anchors_input" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.trustAnchorsInput"></a>

```python
trust_anchors_input: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigTrustStoresTrustAnchors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CertificateManagerTrustConfigTrustStores]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStores">CertificateManagerTrustConfigTrustStores</a>]

---


### CertificateManagerTrustConfigTrustStoresTrustAnchorsList <a name="CertificateManagerTrustConfigTrustStoresTrustAnchorsList" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CertificateManagerTrustConfigTrustStoresTrustAnchors]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>]]

---


### CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference <a name="CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_trust_config

certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resetPemCertificate">reset_pem_certificate</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_pem_certificate` <a name="reset_pem_certificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.resetPemCertificate"></a>

```python
def reset_pem_certificate() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificateInput">pem_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `pem_certificate_input`<sup>Optional</sup> <a name="pem_certificate_input" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificateInput"></a>

```python
pem_certificate_input: str
```

- *Type:* str

---

##### `pem_certificate`<sup>Required</sup> <a name="pem_certificate" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchorsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CertificateManagerTrustConfigTrustStoresTrustAnchors]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerTrustConfig.CertificateManagerTrustConfigTrustStoresTrustAnchors">CertificateManagerTrustConfigTrustStoresTrustAnchors</a>]

---



