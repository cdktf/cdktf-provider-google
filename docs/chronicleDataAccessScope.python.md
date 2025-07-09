# `chronicleDataAccessScope` Submodule <a name="`chronicleDataAccessScope` Submodule" id="@cdktf/provider-google.chronicleDataAccessScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleDataAccessScope <a name="ChronicleDataAccessScope" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope google_chronicle_data_access_scope}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScope(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_access_scope_id: str,
  instance: str,
  location: str,
  allow_all: typing.Union[bool, IResolvable] = None,
  allowed_data_access_labels: typing.Union[IResolvable, typing.List[ChronicleDataAccessScopeAllowedDataAccessLabels]] = None,
  denied_data_access_labels: typing.Union[IResolvable, typing.List[ChronicleDataAccessScopeDeniedDataAccessLabels]] = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: ChronicleDataAccessScopeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.dataAccessScopeId">data_access_scope_id</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.allowAll">allow_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.allowedDataAccessLabels">allowed_data_access_labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>]]</code> | allowed_data_access_labels block. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.deniedDataAccessLabels">denied_data_access_labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>]]</code> | denied_data_access_labels block. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. A description of the data access scope for a human reader. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#id ChronicleDataAccessScope#id}. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#project ChronicleDataAccessScope#project}. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_access_scope_id`<sup>Required</sup> <a name="data_access_scope_id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.dataAccessScopeId"></a>

- *Type:* str

Required.

The user provided scope id which will become the last part of the name
of the scope resource.
Needs to be compliant with https://google.aip.dev/122

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#data_access_scope_id ChronicleDataAccessScope#data_access_scope_id}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.instance"></a>

- *Type:* str

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#instance ChronicleDataAccessScope#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.location"></a>

- *Type:* str

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#location ChronicleDataAccessScope#location}

---

##### `allow_all`<sup>Optional</sup> <a name="allow_all" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.allowAll"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Whether or not the scope allows all labels, allow_all and
allowed_data_access_labels are mutually exclusive and one of them must be
present. denied_data_access_labels can still be used along with allow_all.
When combined with denied_data_access_labels, access will be granted to all
data that doesn't have labels mentioned in denied_data_access_labels. E.g.:
A customer with scope with denied labels A and B and allow_all will be able
to see all data except data labeled with A and data labeled with B and data
with labels A and B.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#allow_all ChronicleDataAccessScope#allow_all}

---

##### `allowed_data_access_labels`<sup>Optional</sup> <a name="allowed_data_access_labels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.allowedDataAccessLabels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>]]

allowed_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#allowed_data_access_labels ChronicleDataAccessScope#allowed_data_access_labels}

---

##### `denied_data_access_labels`<sup>Optional</sup> <a name="denied_data_access_labels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.deniedDataAccessLabels"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>]]

denied_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#denied_data_access_labels ChronicleDataAccessScope#denied_data_access_labels}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.description"></a>

- *Type:* str

Optional. A description of the data access scope for a human reader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#description ChronicleDataAccessScope#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#id ChronicleDataAccessScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#project ChronicleDataAccessScope#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#timeouts ChronicleDataAccessScope#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putAllowedDataAccessLabels">put_allowed_data_access_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putDeniedDataAccessLabels">put_denied_data_access_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetAllowAll">reset_allow_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetAllowedDataAccessLabels">reset_allowed_data_access_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetDeniedDataAccessLabels">reset_denied_data_access_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_allowed_data_access_labels` <a name="put_allowed_data_access_labels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putAllowedDataAccessLabels"></a>

```python
def put_allowed_data_access_labels(
  value: typing.Union[IResolvable, typing.List[ChronicleDataAccessScopeAllowedDataAccessLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putAllowedDataAccessLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>]]

---

##### `put_denied_data_access_labels` <a name="put_denied_data_access_labels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putDeniedDataAccessLabels"></a>

```python
def put_denied_data_access_labels(
  value: typing.Union[IResolvable, typing.List[ChronicleDataAccessScopeDeniedDataAccessLabels]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putDeniedDataAccessLabels.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#create ChronicleDataAccessScope#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#delete ChronicleDataAccessScope#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#update ChronicleDataAccessScope#update}.

---

##### `reset_allow_all` <a name="reset_allow_all" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetAllowAll"></a>

```python
def reset_allow_all() -> None
```

##### `reset_allowed_data_access_labels` <a name="reset_allowed_data_access_labels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetAllowedDataAccessLabels"></a>

```python
def reset_allowed_data_access_labels() -> None
```

##### `reset_denied_data_access_labels` <a name="reset_denied_data_access_labels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetDeniedDataAccessLabels"></a>

```python
def reset_denied_data_access_labels() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ChronicleDataAccessScope resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScope.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScope.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScope.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScope.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ChronicleDataAccessScope resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ChronicleDataAccessScope to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ChronicleDataAccessScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ChronicleDataAccessScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowedDataAccessLabels">allowed_data_access_labels</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList">ChronicleDataAccessScopeAllowedDataAccessLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.author">author</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.deniedDataAccessLabels">denied_data_access_labels</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList">ChronicleDataAccessScopeDeniedDataAccessLabelsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.lastEditor">last_editor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference">ChronicleDataAccessScopeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowAllInput">allow_all_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowedDataAccessLabelsInput">allowed_data_access_labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dataAccessScopeIdInput">data_access_scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.deniedDataAccessLabelsInput">denied_data_access_labels_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.instanceInput">instance_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowAll">allow_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dataAccessScopeId">data_access_scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.instance">instance</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_data_access_labels`<sup>Required</sup> <a name="allowed_data_access_labels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowedDataAccessLabels"></a>

```python
allowed_data_access_labels: ChronicleDataAccessScopeAllowedDataAccessLabelsList
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList">ChronicleDataAccessScopeAllowedDataAccessLabelsList</a>

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.author"></a>

```python
author: str
```

- *Type:* str

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `denied_data_access_labels`<sup>Required</sup> <a name="denied_data_access_labels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.deniedDataAccessLabels"></a>

```python
denied_data_access_labels: ChronicleDataAccessScopeDeniedDataAccessLabelsList
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList">ChronicleDataAccessScopeDeniedDataAccessLabelsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `last_editor`<sup>Required</sup> <a name="last_editor" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.lastEditor"></a>

```python
last_editor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.timeouts"></a>

```python
timeouts: ChronicleDataAccessScopeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference">ChronicleDataAccessScopeTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `allow_all_input`<sup>Optional</sup> <a name="allow_all_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowAllInput"></a>

```python
allow_all_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_data_access_labels_input`<sup>Optional</sup> <a name="allowed_data_access_labels_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowedDataAccessLabelsInput"></a>

```python
allowed_data_access_labels_input: typing.Union[IResolvable, typing.List[ChronicleDataAccessScopeAllowedDataAccessLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>]]

---

##### `data_access_scope_id_input`<sup>Optional</sup> <a name="data_access_scope_id_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dataAccessScopeIdInput"></a>

```python
data_access_scope_id_input: str
```

- *Type:* str

---

##### `denied_data_access_labels_input`<sup>Optional</sup> <a name="denied_data_access_labels_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.deniedDataAccessLabelsInput"></a>

```python
denied_data_access_labels_input: typing.Union[IResolvable, typing.List[ChronicleDataAccessScopeDeniedDataAccessLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>]]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.instanceInput"></a>

```python
instance_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ChronicleDataAccessScopeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a>]

---

##### `allow_all`<sup>Required</sup> <a name="allow_all" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.allowAll"></a>

```python
allow_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_access_scope_id`<sup>Required</sup> <a name="data_access_scope_id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.dataAccessScopeId"></a>

```python
data_access_scope_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.instance"></a>

```python
instance: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScope.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleDataAccessScopeAllowedDataAccessLabels <a name="ChronicleDataAccessScopeAllowedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels(
  asset_namespace: str = None,
  data_access_label: str = None,
  ingestion_label: ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel = None,
  log_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.assetNamespace">asset_namespace</a></code> | <code>str</code> | The asset namespace configured in the forwarder of the customer's events. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.dataAccessLabel">data_access_label</a></code> | <code>str</code> | The name of the data access label. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.ingestionLabel">ingestion_label</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | ingestion_label block. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.logType">log_type</a></code> | <code>str</code> | The name of the log type. |

---

##### `asset_namespace`<sup>Optional</sup> <a name="asset_namespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.assetNamespace"></a>

```python
asset_namespace: str
```

- *Type:* str

The asset namespace configured in the forwarder of the customer's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#asset_namespace ChronicleDataAccessScope#asset_namespace}

---

##### `data_access_label`<sup>Optional</sup> <a name="data_access_label" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.dataAccessLabel"></a>

```python
data_access_label: str
```

- *Type:* str

The name of the data access label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#data_access_label ChronicleDataAccessScope#data_access_label}

---

##### `ingestion_label`<sup>Optional</sup> <a name="ingestion_label" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.ingestionLabel"></a>

```python
ingestion_label: ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

ingestion_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#ingestion_label ChronicleDataAccessScope#ingestion_label}

---

##### `log_type`<sup>Optional</sup> <a name="log_type" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels.property.logType"></a>

```python
log_type: str
```

- *Type:* str

The name of the log type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#log_type ChronicleDataAccessScope#log_type}

---

### ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel <a name="ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel(
  ingestion_label_key: str,
  ingestion_label_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelKey">ingestion_label_key</a></code> | <code>str</code> | Required. The key of the ingestion label. Always required. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelValue">ingestion_label_value</a></code> | <code>str</code> | Optional. |

---

##### `ingestion_label_key`<sup>Required</sup> <a name="ingestion_label_key" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelKey"></a>

```python
ingestion_label_key: str
```

- *Type:* str

Required. The key of the ingestion label. Always required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#ingestion_label_key ChronicleDataAccessScope#ingestion_label_key}

---

##### `ingestion_label_value`<sup>Optional</sup> <a name="ingestion_label_value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel.property.ingestionLabelValue"></a>

```python
ingestion_label_value: str
```

- *Type:* str

Optional.

The value of the ingestion label. Optional. An object
with no provided value and some key provided would match
against the given key and ANY value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#ingestion_label_value ChronicleDataAccessScope#ingestion_label_value}

---

### ChronicleDataAccessScopeConfig <a name="ChronicleDataAccessScopeConfig" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScopeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  data_access_scope_id: str,
  instance: str,
  location: str,
  allow_all: typing.Union[bool, IResolvable] = None,
  allowed_data_access_labels: typing.Union[IResolvable, typing.List[ChronicleDataAccessScopeAllowedDataAccessLabels]] = None,
  denied_data_access_labels: typing.Union[IResolvable, typing.List[ChronicleDataAccessScopeDeniedDataAccessLabels]] = None,
  description: str = None,
  id: str = None,
  project: str = None,
  timeouts: ChronicleDataAccessScopeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.dataAccessScopeId">data_access_scope_id</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.instance">instance</a></code> | <code>str</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.location">location</a></code> | <code>str</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.allowAll">allow_all</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.allowedDataAccessLabels">allowed_data_access_labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>]]</code> | allowed_data_access_labels block. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.deniedDataAccessLabels">denied_data_access_labels</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>]]</code> | denied_data_access_labels block. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.description">description</a></code> | <code>str</code> | Optional. A description of the data access scope for a human reader. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#id ChronicleDataAccessScope#id}. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#project ChronicleDataAccessScope#project}. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_access_scope_id`<sup>Required</sup> <a name="data_access_scope_id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.dataAccessScopeId"></a>

```python
data_access_scope_id: str
```

- *Type:* str

Required.

The user provided scope id which will become the last part of the name
of the scope resource.
Needs to be compliant with https://google.aip.dev/122

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#data_access_scope_id ChronicleDataAccessScope#data_access_scope_id}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.instance"></a>

```python
instance: str
```

- *Type:* str

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#instance ChronicleDataAccessScope#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#location ChronicleDataAccessScope#location}

---

##### `allow_all`<sup>Optional</sup> <a name="allow_all" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.allowAll"></a>

```python
allow_all: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Whether or not the scope allows all labels, allow_all and
allowed_data_access_labels are mutually exclusive and one of them must be
present. denied_data_access_labels can still be used along with allow_all.
When combined with denied_data_access_labels, access will be granted to all
data that doesn't have labels mentioned in denied_data_access_labels. E.g.:
A customer with scope with denied labels A and B and allow_all will be able
to see all data except data labeled with A and data labeled with B and data
with labels A and B.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#allow_all ChronicleDataAccessScope#allow_all}

---

##### `allowed_data_access_labels`<sup>Optional</sup> <a name="allowed_data_access_labels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.allowedDataAccessLabels"></a>

```python
allowed_data_access_labels: typing.Union[IResolvable, typing.List[ChronicleDataAccessScopeAllowedDataAccessLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>]]

allowed_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#allowed_data_access_labels ChronicleDataAccessScope#allowed_data_access_labels}

---

##### `denied_data_access_labels`<sup>Optional</sup> <a name="denied_data_access_labels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.deniedDataAccessLabels"></a>

```python
denied_data_access_labels: typing.Union[IResolvable, typing.List[ChronicleDataAccessScopeDeniedDataAccessLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>]]

denied_data_access_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#denied_data_access_labels ChronicleDataAccessScope#denied_data_access_labels}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. A description of the data access scope for a human reader.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#description ChronicleDataAccessScope#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#id ChronicleDataAccessScope#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#project ChronicleDataAccessScope#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeConfig.property.timeouts"></a>

```python
timeouts: ChronicleDataAccessScopeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#timeouts ChronicleDataAccessScope#timeouts}

---

### ChronicleDataAccessScopeDeniedDataAccessLabels <a name="ChronicleDataAccessScopeDeniedDataAccessLabels" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels(
  asset_namespace: str = None,
  data_access_label: str = None,
  ingestion_label: ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel = None,
  log_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.assetNamespace">asset_namespace</a></code> | <code>str</code> | The asset namespace configured in the forwarder of the customer's events. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.dataAccessLabel">data_access_label</a></code> | <code>str</code> | The name of the data access label. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.ingestionLabel">ingestion_label</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | ingestion_label block. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.logType">log_type</a></code> | <code>str</code> | The name of the log type. |

---

##### `asset_namespace`<sup>Optional</sup> <a name="asset_namespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.assetNamespace"></a>

```python
asset_namespace: str
```

- *Type:* str

The asset namespace configured in the forwarder of the customer's events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#asset_namespace ChronicleDataAccessScope#asset_namespace}

---

##### `data_access_label`<sup>Optional</sup> <a name="data_access_label" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.dataAccessLabel"></a>

```python
data_access_label: str
```

- *Type:* str

The name of the data access label.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#data_access_label ChronicleDataAccessScope#data_access_label}

---

##### `ingestion_label`<sup>Optional</sup> <a name="ingestion_label" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.ingestionLabel"></a>

```python
ingestion_label: ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

ingestion_label block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#ingestion_label ChronicleDataAccessScope#ingestion_label}

---

##### `log_type`<sup>Optional</sup> <a name="log_type" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels.property.logType"></a>

```python
log_type: str
```

- *Type:* str

The name of the log type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#log_type ChronicleDataAccessScope#log_type}

---

### ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel <a name="ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel(
  ingestion_label_key: str,
  ingestion_label_value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelKey">ingestion_label_key</a></code> | <code>str</code> | Required. The key of the ingestion label. Always required. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelValue">ingestion_label_value</a></code> | <code>str</code> | Optional. |

---

##### `ingestion_label_key`<sup>Required</sup> <a name="ingestion_label_key" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelKey"></a>

```python
ingestion_label_key: str
```

- *Type:* str

Required. The key of the ingestion label. Always required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#ingestion_label_key ChronicleDataAccessScope#ingestion_label_key}

---

##### `ingestion_label_value`<sup>Optional</sup> <a name="ingestion_label_value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel.property.ingestionLabelValue"></a>

```python
ingestion_label_value: str
```

- *Type:* str

Optional.

The value of the ingestion label. Optional. An object
with no provided value and some key provided would match
against the given key and ANY value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#ingestion_label_value ChronicleDataAccessScope#ingestion_label_value}

---

### ChronicleDataAccessScopeTimeouts <a name="ChronicleDataAccessScopeTimeouts" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#create ChronicleDataAccessScope#create}. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#delete ChronicleDataAccessScope#delete}. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#update ChronicleDataAccessScope#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#create ChronicleDataAccessScope#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#delete ChronicleDataAccessScope#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#update ChronicleDataAccessScope#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference <a name="ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue">reset_ingestion_label_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ingestion_label_value` <a name="reset_ingestion_label_value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue"></a>

```python
def reset_ingestion_label_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput">ingestion_label_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput">ingestion_label_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey">ingestion_label_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue">ingestion_label_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingestion_label_key_input`<sup>Optional</sup> <a name="ingestion_label_key_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput"></a>

```python
ingestion_label_key_input: str
```

- *Type:* str

---

##### `ingestion_label_value_input`<sup>Optional</sup> <a name="ingestion_label_value_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput"></a>

```python
ingestion_label_value_input: str
```

- *Type:* str

---

##### `ingestion_label_key`<sup>Required</sup> <a name="ingestion_label_key" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey"></a>

```python
ingestion_label_key: str
```

- *Type:* str

---

##### `ingestion_label_value`<sup>Required</sup> <a name="ingestion_label_value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue"></a>

```python
ingestion_label_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

---


### ChronicleDataAccessScopeAllowedDataAccessLabelsList <a name="ChronicleDataAccessScopeAllowedDataAccessLabelsList" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ChronicleDataAccessScopeAllowedDataAccessLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>]]

---


### ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference <a name="ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel">put_ingestion_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetAssetNamespace">reset_asset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetDataAccessLabel">reset_data_access_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetIngestionLabel">reset_ingestion_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetLogType">reset_log_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ingestion_label` <a name="put_ingestion_label" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel"></a>

```python
def put_ingestion_label(
  ingestion_label_key: str,
  ingestion_label_value: str = None
) -> None
```

###### `ingestion_label_key`<sup>Required</sup> <a name="ingestion_label_key" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel.parameter.ingestionLabelKey"></a>

- *Type:* str

Required. The key of the ingestion label. Always required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#ingestion_label_key ChronicleDataAccessScope#ingestion_label_key}

---

###### `ingestion_label_value`<sup>Optional</sup> <a name="ingestion_label_value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.putIngestionLabel.parameter.ingestionLabelValue"></a>

- *Type:* str

Optional.

The value of the ingestion label. Optional. An object
with no provided value and some key provided would match
against the given key and ANY value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#ingestion_label_value ChronicleDataAccessScope#ingestion_label_value}

---

##### `reset_asset_namespace` <a name="reset_asset_namespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetAssetNamespace"></a>

```python
def reset_asset_namespace() -> None
```

##### `reset_data_access_label` <a name="reset_data_access_label" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetDataAccessLabel"></a>

```python
def reset_data_access_label() -> None
```

##### `reset_ingestion_label` <a name="reset_ingestion_label" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetIngestionLabel"></a>

```python
def reset_ingestion_label() -> None
```

##### `reset_log_type` <a name="reset_log_type" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.resetLogType"></a>

```python
def reset_log_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabel">ingestion_label</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespaceInput">asset_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabelInput">data_access_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabelInput">ingestion_label_input</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logTypeInput">log_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespace">asset_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabel">data_access_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `ingestion_label`<sup>Required</sup> <a name="ingestion_label" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabel"></a>

```python
ingestion_label: ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabelOutputReference</a>

---

##### `asset_namespace_input`<sup>Optional</sup> <a name="asset_namespace_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespaceInput"></a>

```python
asset_namespace_input: str
```

- *Type:* str

---

##### `data_access_label_input`<sup>Optional</sup> <a name="data_access_label_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabelInput"></a>

```python
data_access_label_input: str
```

- *Type:* str

---

##### `ingestion_label_input`<sup>Optional</sup> <a name="ingestion_label_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.ingestionLabelInput"></a>

```python
ingestion_label_input: ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeAllowedDataAccessLabelsIngestionLabel</a>

---

##### `log_type_input`<sup>Optional</sup> <a name="log_type_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logTypeInput"></a>

```python
log_type_input: str
```

- *Type:* str

---

##### `asset_namespace`<sup>Required</sup> <a name="asset_namespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.assetNamespace"></a>

```python
asset_namespace: str
```

- *Type:* str

---

##### `data_access_label`<sup>Required</sup> <a name="data_access_label" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.dataAccessLabel"></a>

```python
data_access_label: str
```

- *Type:* str

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ChronicleDataAccessScopeAllowedDataAccessLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeAllowedDataAccessLabels">ChronicleDataAccessScopeAllowedDataAccessLabels</a>]

---


### ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference <a name="ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue">reset_ingestion_label_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ingestion_label_value` <a name="reset_ingestion_label_value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.resetIngestionLabelValue"></a>

```python
def reset_ingestion_label_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput">ingestion_label_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput">ingestion_label_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey">ingestion_label_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue">ingestion_label_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ingestion_label_key_input`<sup>Optional</sup> <a name="ingestion_label_key_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKeyInput"></a>

```python
ingestion_label_key_input: str
```

- *Type:* str

---

##### `ingestion_label_value_input`<sup>Optional</sup> <a name="ingestion_label_value_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValueInput"></a>

```python
ingestion_label_value_input: str
```

- *Type:* str

---

##### `ingestion_label_key`<sup>Required</sup> <a name="ingestion_label_key" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelKey"></a>

```python
ingestion_label_key: str
```

- *Type:* str

---

##### `ingestion_label_value`<sup>Required</sup> <a name="ingestion_label_value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.ingestionLabelValue"></a>

```python
ingestion_label_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference.property.internalValue"></a>

```python
internal_value: ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

---


### ChronicleDataAccessScopeDeniedDataAccessLabelsList <a name="ChronicleDataAccessScopeDeniedDataAccessLabelsList" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ChronicleDataAccessScopeDeniedDataAccessLabels]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>]]

---


### ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference <a name="ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel">put_ingestion_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetAssetNamespace">reset_asset_namespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetDataAccessLabel">reset_data_access_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetIngestionLabel">reset_ingestion_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetLogType">reset_log_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ingestion_label` <a name="put_ingestion_label" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel"></a>

```python
def put_ingestion_label(
  ingestion_label_key: str,
  ingestion_label_value: str = None
) -> None
```

###### `ingestion_label_key`<sup>Required</sup> <a name="ingestion_label_key" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel.parameter.ingestionLabelKey"></a>

- *Type:* str

Required. The key of the ingestion label. Always required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#ingestion_label_key ChronicleDataAccessScope#ingestion_label_key}

---

###### `ingestion_label_value`<sup>Optional</sup> <a name="ingestion_label_value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.putIngestionLabel.parameter.ingestionLabelValue"></a>

- *Type:* str

Optional.

The value of the ingestion label. Optional. An object
with no provided value and some key provided would match
against the given key and ANY value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/chronicle_data_access_scope#ingestion_label_value ChronicleDataAccessScope#ingestion_label_value}

---

##### `reset_asset_namespace` <a name="reset_asset_namespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetAssetNamespace"></a>

```python
def reset_asset_namespace() -> None
```

##### `reset_data_access_label` <a name="reset_data_access_label" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetDataAccessLabel"></a>

```python
def reset_data_access_label() -> None
```

##### `reset_ingestion_label` <a name="reset_ingestion_label" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetIngestionLabel"></a>

```python
def reset_ingestion_label() -> None
```

##### `reset_log_type` <a name="reset_log_type" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.resetLogType"></a>

```python
def reset_log_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabel">ingestion_label</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespaceInput">asset_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabelInput">data_access_label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabelInput">ingestion_label_input</a></code> | <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logTypeInput">log_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespace">asset_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabel">data_access_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `ingestion_label`<sup>Required</sup> <a name="ingestion_label" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabel"></a>

```python
ingestion_label: ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabelOutputReference</a>

---

##### `asset_namespace_input`<sup>Optional</sup> <a name="asset_namespace_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespaceInput"></a>

```python
asset_namespace_input: str
```

- *Type:* str

---

##### `data_access_label_input`<sup>Optional</sup> <a name="data_access_label_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabelInput"></a>

```python
data_access_label_input: str
```

- *Type:* str

---

##### `ingestion_label_input`<sup>Optional</sup> <a name="ingestion_label_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.ingestionLabelInput"></a>

```python
ingestion_label_input: ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel
```

- *Type:* <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel">ChronicleDataAccessScopeDeniedDataAccessLabelsIngestionLabel</a>

---

##### `log_type_input`<sup>Optional</sup> <a name="log_type_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logTypeInput"></a>

```python
log_type_input: str
```

- *Type:* str

---

##### `asset_namespace`<sup>Required</sup> <a name="asset_namespace" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.assetNamespace"></a>

```python
asset_namespace: str
```

- *Type:* str

---

##### `data_access_label`<sup>Required</sup> <a name="data_access_label" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.dataAccessLabel"></a>

```python
data_access_label: str
```

- *Type:* str

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabelsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ChronicleDataAccessScopeDeniedDataAccessLabels]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeDeniedDataAccessLabels">ChronicleDataAccessScopeDeniedDataAccessLabels</a>]

---


### ChronicleDataAccessScopeTimeoutsOutputReference <a name="ChronicleDataAccessScopeTimeoutsOutputReference" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import chronicle_data_access_scope

chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ChronicleDataAccessScopeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.chronicleDataAccessScope.ChronicleDataAccessScopeTimeouts">ChronicleDataAccessScopeTimeouts</a>]

---



