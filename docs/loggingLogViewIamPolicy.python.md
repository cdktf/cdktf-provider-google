# `loggingLogViewIamPolicy` Submodule <a name="`loggingLogViewIamPolicy` Submodule" id="@cdktf/provider-google.loggingLogViewIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoggingLogViewIamPolicy <a name="LoggingLogViewIamPolicy" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy google_logging_log_view_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_log_view_iam_policy

loggingLogViewIamPolicy.LoggingLogViewIamPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  name: str,
  parent: str,
  policy_data: str,
  id: str = None,
  location: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#bucket LoggingLogViewIamPolicy#bucket}. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#name LoggingLogViewIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#parent LoggingLogViewIamPolicy#parent}. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#policy_data LoggingLogViewIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#id LoggingLogViewIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#location LoggingLogViewIamPolicy#location}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#bucket LoggingLogViewIamPolicy#bucket}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#name LoggingLogViewIamPolicy#name}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.parent"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#parent LoggingLogViewIamPolicy#parent}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.policyData"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#policy_data LoggingLogViewIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#id LoggingLogViewIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.Initializer.parameter.location"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#location LoggingLogViewIamPolicy#location}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.resetLocation">reset_location</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.resetLocation"></a>

```python
def reset_location() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LoggingLogViewIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import logging_log_view_iam_policy

loggingLogViewIamPolicy.LoggingLogViewIamPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import logging_log_view_iam_policy

loggingLogViewIamPolicy.LoggingLogViewIamPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import logging_log_view_iam_policy

loggingLogViewIamPolicy.LoggingLogViewIamPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import logging_log_view_iam_policy

loggingLogViewIamPolicy.LoggingLogViewIamPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LoggingLogViewIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LoggingLogViewIamPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LoggingLogViewIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LoggingLogViewIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.policyDataInput">policy_data_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.policyData">policy_data</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `policy_data_input`<sup>Optional</sup> <a name="policy_data_input" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.policyDataInput"></a>

```python
policy_data_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LoggingLogViewIamPolicyConfig <a name="LoggingLogViewIamPolicyConfig" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import logging_log_view_iam_policy

loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  bucket: str,
  name: str,
  parent: str,
  policy_data: str,
  id: str = None,
  location: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#bucket LoggingLogViewIamPolicy#bucket}. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#name LoggingLogViewIamPolicy#name}. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.parent">parent</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#parent LoggingLogViewIamPolicy#parent}. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.policyData">policy_data</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#policy_data LoggingLogViewIamPolicy#policy_data}. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#id LoggingLogViewIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.location">location</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#location LoggingLogViewIamPolicy#location}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#bucket LoggingLogViewIamPolicy#bucket}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#name LoggingLogViewIamPolicy#name}.

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#parent LoggingLogViewIamPolicy#parent}.

---

##### `policy_data`<sup>Required</sup> <a name="policy_data" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.policyData"></a>

```python
policy_data: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#policy_data LoggingLogViewIamPolicy#policy_data}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#id LoggingLogViewIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.loggingLogViewIamPolicy.LoggingLogViewIamPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/logging_log_view_iam_policy#location LoggingLogViewIamPolicy#location}.

---



