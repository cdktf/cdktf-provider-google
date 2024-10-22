# `certificateManagerCertificate` Submodule <a name="`certificateManagerCertificate` Submodule" id="@cdktf/provider-google.certificateManagerCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerCertificate <a name="CertificateManagerCertificate" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate google_certificate_manager_certificate}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  managed: CertificateManagerCertificateManaged = None,
  project: str = None,
  scope: str = None,
  self_managed: CertificateManagerCertificateSelfManaged = None,
  timeouts: CertificateManagerCertificateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.name">name</a></code> | <code>str</code> | A user-defined name of the certificate. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#id CertificateManagerCertificate#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the Certificate resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.location">location</a></code> | <code>str</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.managed">managed</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a></code> | managed block. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#project CertificateManagerCertificate#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.scope">scope</a></code> | <code>str</code> | The scope of the certificate. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.selfManaged">self_managed</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a></code> | self_managed block. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.name"></a>

- *Type:* str

A user-defined name of the certificate.

Certificate names must be unique
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#name CertificateManagerCertificate#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#description CertificateManagerCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#id CertificateManagerCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the Certificate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#labels CertificateManagerCertificate#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.location"></a>

- *Type:* str

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#location CertificateManagerCertificate#location}

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.managed"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a>

managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#managed CertificateManagerCertificate#managed}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#project CertificateManagerCertificate#project}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.scope"></a>

- *Type:* str

The scope of the certificate.

DEFAULT: Certificates with default scope are served from core Google data centers.
If unsure, choose this option.

EDGE_CACHE: Certificates with scope EDGE_CACHE are special-purposed certificates, served from Edge Points of Presence.
See https://cloud.google.com/vpc/docs/edge-locations.

ALL_REGIONS: Certificates with ALL_REGIONS scope are served from all GCP regions (You can only use ALL_REGIONS with global certs).
See https://cloud.google.com/compute/docs/regions-zones

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#scope CertificateManagerCertificate#scope}

---

##### `self_managed`<sup>Optional</sup> <a name="self_managed" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.selfManaged"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a>

self_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#self_managed CertificateManagerCertificate#self_managed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#timeouts CertificateManagerCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putManaged">put_managed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putSelfManaged">put_self_managed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetManaged">reset_managed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetSelfManaged">reset_self_managed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_managed` <a name="put_managed" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putManaged"></a>

```python
def put_managed(
  dns_authorizations: typing.List[str] = None,
  domains: typing.List[str] = None,
  issuance_config: str = None
) -> None
```

###### `dns_authorizations`<sup>Optional</sup> <a name="dns_authorizations" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putManaged.parameter.dnsAuthorizations"></a>

- *Type:* typing.List[str]

Authorizations that will be used for performing domain authorization. Either issuanceConfig or dnsAuthorizations should be specificed, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#dns_authorizations CertificateManagerCertificate#dns_authorizations}

---

###### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putManaged.parameter.domains"></a>

- *Type:* typing.List[str]

The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#domains CertificateManagerCertificate#domains}

---

###### `issuance_config`<sup>Optional</sup> <a name="issuance_config" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putManaged.parameter.issuanceConfig"></a>

- *Type:* str

The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/* /locations/* /certificateIssuanceConfigs/*.

If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa.
Either issuanceConfig or dnsAuthorizations should be specificed, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#issuance_config CertificateManagerCertificate#issuance_config}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_self_managed` <a name="put_self_managed" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putSelfManaged"></a>

```python
def put_self_managed(
  certificate_pem: str = None,
  pem_certificate: str = None,
  pem_private_key: str = None,
  private_key_pem: str = None
) -> None
```

###### `certificate_pem`<sup>Optional</sup> <a name="certificate_pem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putSelfManaged.parameter.certificatePem"></a>

- *Type:* str

The certificate chain in PEM-encoded form.

Leaf certificate comes first, followed by intermediate ones if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#certificate_pem CertificateManagerCertificate#certificate_pem}

---

###### `pem_certificate`<sup>Optional</sup> <a name="pem_certificate" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putSelfManaged.parameter.pemCertificate"></a>

- *Type:* str

The certificate chain in PEM-encoded form.

Leaf certificate comes first, followed by intermediate ones if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#pem_certificate CertificateManagerCertificate#pem_certificate}

---

###### `pem_private_key`<sup>Optional</sup> <a name="pem_private_key" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putSelfManaged.parameter.pemPrivateKey"></a>

- *Type:* str

The private key of the leaf certificate in PEM-encoded form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#pem_private_key CertificateManagerCertificate#pem_private_key}

---

###### `private_key_pem`<sup>Optional</sup> <a name="private_key_pem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putSelfManaged.parameter.privateKeyPem"></a>

- *Type:* str

The private key of the leaf certificate in PEM-encoded form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#private_key_pem CertificateManagerCertificate#private_key_pem}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#create CertificateManagerCertificate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#delete CertificateManagerCertificate#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#update CertificateManagerCertificate#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_managed` <a name="reset_managed" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetManaged"></a>

```python
def reset_managed() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_self_managed` <a name="reset_self_managed" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetSelfManaged"></a>

```python
def reset_self_managed() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CertificateManagerCertificate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CertificateManagerCertificate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CertificateManagerCertificate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CertificateManagerCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CertificateManagerCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.managed">managed</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference">CertificateManagerCertificateManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.sanDnsnames">san_dnsnames</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.selfManaged">self_managed</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference">CertificateManagerCertificateSelfManagedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference">CertificateManagerCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.managedInput">managed_input</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.selfManagedInput">self_managed_input</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.scope">scope</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.managed"></a>

```python
managed: CertificateManagerCertificateManagedOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference">CertificateManagerCertificateManagedOutputReference</a>

---

##### `san_dnsnames`<sup>Required</sup> <a name="san_dnsnames" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.sanDnsnames"></a>

```python
san_dnsnames: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `self_managed`<sup>Required</sup> <a name="self_managed" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.selfManaged"></a>

```python
self_managed: CertificateManagerCertificateSelfManagedOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference">CertificateManagerCertificateSelfManagedOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.timeouts"></a>

```python
timeouts: CertificateManagerCertificateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference">CertificateManagerCertificateTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `managed_input`<sup>Optional</sup> <a name="managed_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.managedInput"></a>

```python
managed_input: CertificateManagerCertificateManaged
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `self_managed_input`<sup>Optional</sup> <a name="self_managed_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.selfManagedInput"></a>

```python
self_managed_input: CertificateManagerCertificateSelfManaged
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CertificateManagerCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerCertificateConfig <a name="CertificateManagerCertificateConfig" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  managed: CertificateManagerCertificateManaged = None,
  project: str = None,
  scope: str = None,
  self_managed: CertificateManagerCertificateSelfManaged = None,
  timeouts: CertificateManagerCertificateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.name">name</a></code> | <code>str</code> | A user-defined name of the certificate. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#id CertificateManagerCertificate#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the Certificate resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.location">location</a></code> | <code>str</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.managed">managed</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a></code> | managed block. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#project CertificateManagerCertificate#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.scope">scope</a></code> | <code>str</code> | The scope of the certificate. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.selfManaged">self_managed</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a></code> | self_managed block. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

A user-defined name of the certificate.

Certificate names must be unique
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#name CertificateManagerCertificate#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#description CertificateManagerCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#id CertificateManagerCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the Certificate resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#labels CertificateManagerCertificate#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#location CertificateManagerCertificate#location}

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.managed"></a>

```python
managed: CertificateManagerCertificateManaged
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a>

managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#managed CertificateManagerCertificate#managed}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#project CertificateManagerCertificate#project}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

The scope of the certificate.

DEFAULT: Certificates with default scope are served from core Google data centers.
If unsure, choose this option.

EDGE_CACHE: Certificates with scope EDGE_CACHE are special-purposed certificates, served from Edge Points of Presence.
See https://cloud.google.com/vpc/docs/edge-locations.

ALL_REGIONS: Certificates with ALL_REGIONS scope are served from all GCP regions (You can only use ALL_REGIONS with global certs).
See https://cloud.google.com/compute/docs/regions-zones

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#scope CertificateManagerCertificate#scope}

---

##### `self_managed`<sup>Optional</sup> <a name="self_managed" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.selfManaged"></a>

```python
self_managed: CertificateManagerCertificateSelfManaged
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a>

self_managed block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#self_managed CertificateManagerCertificate#self_managed}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateConfig.property.timeouts"></a>

```python
timeouts: CertificateManagerCertificateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#timeouts CertificateManagerCertificate#timeouts}

---

### CertificateManagerCertificateManaged <a name="CertificateManagerCertificateManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificateManaged(
  dns_authorizations: typing.List[str] = None,
  domains: typing.List[str] = None,
  issuance_config: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.dnsAuthorizations">dns_authorizations</a></code> | <code>typing.List[str]</code> | Authorizations that will be used for performing domain authorization. Either issuanceConfig or dnsAuthorizations should be specificed, but not both. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.domains">domains</a></code> | <code>typing.List[str]</code> | The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.issuanceConfig">issuance_config</a></code> | <code>str</code> | The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/* /locations/* /certificateIssuanceConfigs/*. |

---

##### `dns_authorizations`<sup>Optional</sup> <a name="dns_authorizations" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.dnsAuthorizations"></a>

```python
dns_authorizations: typing.List[str]
```

- *Type:* typing.List[str]

Authorizations that will be used for performing domain authorization. Either issuanceConfig or dnsAuthorizations should be specificed, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#dns_authorizations CertificateManagerCertificate#dns_authorizations}

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

The domains for which a managed SSL certificate will be generated. Wildcard domains are only supported with DNS challenge resolution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#domains CertificateManagerCertificate#domains}

---

##### `issuance_config`<sup>Optional</sup> <a name="issuance_config" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged.property.issuanceConfig"></a>

```python
issuance_config: str
```

- *Type:* str

The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/* /locations/* /certificateIssuanceConfigs/*.

If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa.
Either issuanceConfig or dnsAuthorizations should be specificed, but not both.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#issuance_config CertificateManagerCertificate#issuance_config}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### CertificateManagerCertificateManagedAuthorizationAttemptInfo <a name="CertificateManagerCertificateManagedAuthorizationAttemptInfo" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfo()
```


### CertificateManagerCertificateManagedProvisioningIssue <a name="CertificateManagerCertificateManagedProvisioningIssue" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssue.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssue()
```


### CertificateManagerCertificateSelfManaged <a name="CertificateManagerCertificateSelfManaged" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificateSelfManaged(
  certificate_pem: str = None,
  pem_certificate: str = None,
  pem_private_key: str = None,
  private_key_pem: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.certificatePem">certificate_pem</a></code> | <code>str</code> | The certificate chain in PEM-encoded form. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | The certificate chain in PEM-encoded form. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.pemPrivateKey">pem_private_key</a></code> | <code>str</code> | The private key of the leaf certificate in PEM-encoded form. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.privateKeyPem">private_key_pem</a></code> | <code>str</code> | The private key of the leaf certificate in PEM-encoded form. |

---

##### `certificate_pem`<sup>Optional</sup> <a name="certificate_pem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.certificatePem"></a>

```python
certificate_pem: str
```

- *Type:* str

The certificate chain in PEM-encoded form.

Leaf certificate comes first, followed by intermediate ones if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#certificate_pem CertificateManagerCertificate#certificate_pem}

---

##### `pem_certificate`<sup>Optional</sup> <a name="pem_certificate" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

The certificate chain in PEM-encoded form.

Leaf certificate comes first, followed by intermediate ones if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#pem_certificate CertificateManagerCertificate#pem_certificate}

---

##### `pem_private_key`<sup>Optional</sup> <a name="pem_private_key" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.pemPrivateKey"></a>

```python
pem_private_key: str
```

- *Type:* str

The private key of the leaf certificate in PEM-encoded form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#pem_private_key CertificateManagerCertificate#pem_private_key}

---

##### `private_key_pem`<sup>Optional</sup> <a name="private_key_pem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged.property.privateKeyPem"></a>

```python
private_key_pem: str
```

- *Type:* str

The private key of the leaf certificate in PEM-encoded form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#private_key_pem CertificateManagerCertificate#private_key_pem}

---

### CertificateManagerCertificateTimeouts <a name="CertificateManagerCertificateTimeouts" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificateTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#create CertificateManagerCertificate#create}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#delete CertificateManagerCertificate#delete}. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#update CertificateManagerCertificate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#create CertificateManagerCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#delete CertificateManagerCertificate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/certificate_manager_certificate#update CertificateManagerCertificate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerCertificateManagedAuthorizationAttemptInfoList <a name="CertificateManagerCertificateManagedAuthorizationAttemptInfoList" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference <a name="CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.details">details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.failureReason">failure_reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfo">CertificateManagerCertificateManagedAuthorizationAttemptInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.details"></a>

```python
details: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `failure_reason`<sup>Required</sup> <a name="failure_reason" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.failureReason"></a>

```python
failure_reason: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference.property.internalValue"></a>

```python
internal_value: CertificateManagerCertificateManagedAuthorizationAttemptInfo
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfo">CertificateManagerCertificateManagedAuthorizationAttemptInfo</a>

---


### CertificateManagerCertificateManagedOutputReference <a name="CertificateManagerCertificateManagedOutputReference" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetDnsAuthorizations">reset_dns_authorizations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetDomains">reset_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetIssuanceConfig">reset_issuance_config</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dns_authorizations` <a name="reset_dns_authorizations" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetDnsAuthorizations"></a>

```python
def reset_dns_authorizations() -> None
```

##### `reset_domains` <a name="reset_domains" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetDomains"></a>

```python
def reset_domains() -> None
```

##### `reset_issuance_config` <a name="reset_issuance_config" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.resetIssuanceConfig"></a>

```python
def reset_issuance_config() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.authorizationAttemptInfo">authorization_attempt_info</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList">CertificateManagerCertificateManagedAuthorizationAttemptInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.provisioningIssue">provisioning_issue</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList">CertificateManagerCertificateManagedProvisioningIssueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.dnsAuthorizationsInput">dns_authorizations_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.domainsInput">domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.issuanceConfigInput">issuance_config_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.dnsAuthorizations">dns_authorizations</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.domains">domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.issuanceConfig">issuance_config</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_attempt_info`<sup>Required</sup> <a name="authorization_attempt_info" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.authorizationAttemptInfo"></a>

```python
authorization_attempt_info: CertificateManagerCertificateManagedAuthorizationAttemptInfoList
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedAuthorizationAttemptInfoList">CertificateManagerCertificateManagedAuthorizationAttemptInfoList</a>

---

##### `provisioning_issue`<sup>Required</sup> <a name="provisioning_issue" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.provisioningIssue"></a>

```python
provisioning_issue: CertificateManagerCertificateManagedProvisioningIssueList
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList">CertificateManagerCertificateManagedProvisioningIssueList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `dns_authorizations_input`<sup>Optional</sup> <a name="dns_authorizations_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.dnsAuthorizationsInput"></a>

```python
dns_authorizations_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domains_input`<sup>Optional</sup> <a name="domains_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.domainsInput"></a>

```python
domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuance_config_input`<sup>Optional</sup> <a name="issuance_config_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.issuanceConfigInput"></a>

```python
issuance_config_input: str
```

- *Type:* str

---

##### `dns_authorizations`<sup>Required</sup> <a name="dns_authorizations" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.dnsAuthorizations"></a>

```python
dns_authorizations: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.domains"></a>

```python
domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `issuance_config`<sup>Required</sup> <a name="issuance_config" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.issuanceConfig"></a>

```python
issuance_config: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedOutputReference.property.internalValue"></a>

```python
internal_value: CertificateManagerCertificateManaged
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManaged">CertificateManagerCertificateManaged</a>

---


### CertificateManagerCertificateManagedProvisioningIssueList <a name="CertificateManagerCertificateManagedProvisioningIssueList" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificateManagerCertificateManagedProvisioningIssueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CertificateManagerCertificateManagedProvisioningIssueOutputReference <a name="CertificateManagerCertificateManagedProvisioningIssueOutputReference" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.details">details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssue">CertificateManagerCertificateManagedProvisioningIssue</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.details"></a>

```python
details: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssueOutputReference.property.internalValue"></a>

```python
internal_value: CertificateManagerCertificateManagedProvisioningIssue
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateManagedProvisioningIssue">CertificateManagerCertificateManagedProvisioningIssue</a>

---


### CertificateManagerCertificateSelfManagedOutputReference <a name="CertificateManagerCertificateSelfManagedOutputReference" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetCertificatePem">reset_certificate_pem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPemCertificate">reset_pem_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPemPrivateKey">reset_pem_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPrivateKeyPem">reset_private_key_pem</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_certificate_pem` <a name="reset_certificate_pem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetCertificatePem"></a>

```python
def reset_certificate_pem() -> None
```

##### `reset_pem_certificate` <a name="reset_pem_certificate" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPemCertificate"></a>

```python
def reset_pem_certificate() -> None
```

##### `reset_pem_private_key` <a name="reset_pem_private_key" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPemPrivateKey"></a>

```python
def reset_pem_private_key() -> None
```

##### `reset_private_key_pem` <a name="reset_private_key_pem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.resetPrivateKeyPem"></a>

```python
def reset_private_key_pem() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.certificatePemInput">certificate_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemCertificateInput">pem_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKeyInput">pem_private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPemInput">private_key_pem_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.certificatePem">certificate_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemCertificate">pem_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKey">pem_private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPem">private_key_pem</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_pem_input`<sup>Optional</sup> <a name="certificate_pem_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.certificatePemInput"></a>

```python
certificate_pem_input: str
```

- *Type:* str

---

##### `pem_certificate_input`<sup>Optional</sup> <a name="pem_certificate_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemCertificateInput"></a>

```python
pem_certificate_input: str
```

- *Type:* str

---

##### `pem_private_key_input`<sup>Optional</sup> <a name="pem_private_key_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKeyInput"></a>

```python
pem_private_key_input: str
```

- *Type:* str

---

##### `private_key_pem_input`<sup>Optional</sup> <a name="private_key_pem_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPemInput"></a>

```python
private_key_pem_input: str
```

- *Type:* str

---

##### `certificate_pem`<sup>Required</sup> <a name="certificate_pem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.certificatePem"></a>

```python
certificate_pem: str
```

- *Type:* str

---

##### `pem_certificate`<sup>Required</sup> <a name="pem_certificate" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemCertificate"></a>

```python
pem_certificate: str
```

- *Type:* str

---

##### `pem_private_key`<sup>Required</sup> <a name="pem_private_key" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.pemPrivateKey"></a>

```python
pem_private_key: str
```

- *Type:* str

---

##### `private_key_pem`<sup>Required</sup> <a name="private_key_pem" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.privateKeyPem"></a>

```python
private_key_pem: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManagedOutputReference.property.internalValue"></a>

```python
internal_value: CertificateManagerCertificateSelfManaged
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateSelfManaged">CertificateManagerCertificateSelfManaged</a>

---


### CertificateManagerCertificateTimeoutsOutputReference <a name="CertificateManagerCertificateTimeoutsOutputReference" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_certificate

certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CertificateManagerCertificateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerCertificate.CertificateManagerCertificateTimeouts">CertificateManagerCertificateTimeouts</a>]

---



