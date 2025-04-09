# `certificateManagerDnsAuthorization` Submodule <a name="`certificateManagerDnsAuthorization` Submodule" id="@cdktf/provider-google.certificateManagerDnsAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateManagerDnsAuthorization <a name="CertificateManagerDnsAuthorization" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization google_certificate_manager_dns_authorization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_dns_authorization

certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain: str,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: CertificateManagerDnsAuthorizationTimeouts = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.domain">domain</a></code> | <code>str</code> | A domain which is being authorized. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#id CertificateManagerDnsAuthorization#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the DNS Authorization resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.location">location</a></code> | <code>str</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#project CertificateManagerDnsAuthorization#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.type">type</a></code> | <code>str</code> | type of DNS authorization. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.domain"></a>

- *Type:* str

A domain which is being authorized.

A DnsAuthorization resource covers a
single domain and its wildcard, e.g. authorization for "example.com" can
be used to issue certificates for "example.com" and "*.example.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#domain CertificateManagerDnsAuthorization#domain}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.name"></a>

- *Type:* str

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#name CertificateManagerDnsAuthorization#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.description"></a>

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#description CertificateManagerDnsAuthorization#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#id CertificateManagerDnsAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the DNS Authorization resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#labels CertificateManagerDnsAuthorization#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.location"></a>

- *Type:* str

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#location CertificateManagerDnsAuthorization#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#project CertificateManagerDnsAuthorization#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#timeouts CertificateManagerDnsAuthorization#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.Initializer.parameter.type"></a>

- *Type:* str

type of DNS authorization.

If unset during the resource creation, FIXED_RECORD will
be used for global resources, and PER_PROJECT_RECORD will be used for other locations.

FIXED_RECORD DNS authorization uses DNS-01 validation method

PER_PROJECT_RECORD DNS authorization allows for independent management
of Google-managed certificates with DNS authorization across multiple
projects. Possible values: ["FIXED_RECORD", "PER_PROJECT_RECORD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#type CertificateManagerDnsAuthorization#type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#create CertificateManagerDnsAuthorization#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#delete CertificateManagerDnsAuthorization#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#update CertificateManagerDnsAuthorization#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CertificateManagerDnsAuthorization resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_dns_authorization

certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_dns_authorization

certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_dns_authorization

certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_dns_authorization

certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CertificateManagerDnsAuthorization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CertificateManagerDnsAuthorization to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CertificateManagerDnsAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CertificateManagerDnsAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.dnsResourceRecord">dns_resource_record</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList">CertificateManagerDnsAuthorizationDnsResourceRecordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference">CertificateManagerDnsAuthorizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.domainInput">domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dns_resource_record`<sup>Required</sup> <a name="dns_resource_record" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.dnsResourceRecord"></a>

```python
dns_resource_record: CertificateManagerDnsAuthorizationDnsResourceRecordList
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList">CertificateManagerDnsAuthorizationDnsResourceRecordList</a>

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.timeouts"></a>

```python
timeouts: CertificateManagerDnsAuthorizationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference">CertificateManagerDnsAuthorizationTimeoutsOutputReference</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `domain_input`<sup>Optional</sup> <a name="domain_input" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.domainInput"></a>

```python
domain_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CertificateManagerDnsAuthorizationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CertificateManagerDnsAuthorizationConfig <a name="CertificateManagerDnsAuthorizationConfig" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_dns_authorization

certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  domain: str,
  name: str,
  description: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  project: str = None,
  timeouts: CertificateManagerDnsAuthorizationTimeouts = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.domain">domain</a></code> | <code>str</code> | A domain which is being authorized. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.name">name</a></code> | <code>str</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.description">description</a></code> | <code>str</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#id CertificateManagerDnsAuthorization#id}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the DNS Authorization resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.location">location</a></code> | <code>str</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#project CertificateManagerDnsAuthorization#project}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.type">type</a></code> | <code>str</code> | type of DNS authorization. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.domain"></a>

```python
domain: str
```

- *Type:* str

A domain which is being authorized.

A DnsAuthorization resource covers a
single domain and its wildcard, e.g. authorization for "example.com" can
be used to issue certificates for "example.com" and "*.example.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#domain CertificateManagerDnsAuthorization#domain}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#name CertificateManagerDnsAuthorization#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#description CertificateManagerDnsAuthorization#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#id CertificateManagerDnsAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the DNS Authorization resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#labels CertificateManagerDnsAuthorization#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#location CertificateManagerDnsAuthorization#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#project CertificateManagerDnsAuthorization#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.timeouts"></a>

```python
timeouts: CertificateManagerDnsAuthorizationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#timeouts CertificateManagerDnsAuthorization#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationConfig.property.type"></a>

```python
type: str
```

- *Type:* str

type of DNS authorization.

If unset during the resource creation, FIXED_RECORD will
be used for global resources, and PER_PROJECT_RECORD will be used for other locations.

FIXED_RECORD DNS authorization uses DNS-01 validation method

PER_PROJECT_RECORD DNS authorization allows for independent management
of Google-managed certificates with DNS authorization across multiple
projects. Possible values: ["FIXED_RECORD", "PER_PROJECT_RECORD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#type CertificateManagerDnsAuthorization#type}

---

### CertificateManagerDnsAuthorizationDnsResourceRecord <a name="CertificateManagerDnsAuthorizationDnsResourceRecord" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_dns_authorization

certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord()
```


### CertificateManagerDnsAuthorizationTimeouts <a name="CertificateManagerDnsAuthorizationTimeouts" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_dns_authorization

certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#create CertificateManagerDnsAuthorization#create}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#delete CertificateManagerDnsAuthorization#delete}. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#update CertificateManagerDnsAuthorization#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#create CertificateManagerDnsAuthorization#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#delete CertificateManagerDnsAuthorization#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/certificate_manager_dns_authorization#update CertificateManagerDnsAuthorization#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CertificateManagerDnsAuthorizationDnsResourceRecordList <a name="CertificateManagerDnsAuthorizationDnsResourceRecordList" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_dns_authorization

certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference <a name="CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_dns_authorization

certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.data">data</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord">CertificateManagerDnsAuthorizationDnsResourceRecord</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.data"></a>

```python
data: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.internalValue"></a>

```python
internal_value: CertificateManagerDnsAuthorizationDnsResourceRecord
```

- *Type:* <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationDnsResourceRecord">CertificateManagerDnsAuthorizationDnsResourceRecord</a>

---


### CertificateManagerDnsAuthorizationTimeoutsOutputReference <a name="CertificateManagerDnsAuthorizationTimeoutsOutputReference" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import certificate_manager_dns_authorization

certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CertificateManagerDnsAuthorizationTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.certificateManagerDnsAuthorization.CertificateManagerDnsAuthorizationTimeouts">CertificateManagerDnsAuthorizationTimeouts</a>]

---



