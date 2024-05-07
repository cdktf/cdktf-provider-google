# `iamAccessBoundaryPolicy` Submodule <a name="`iamAccessBoundaryPolicy` Submodule" id="@cdktf/provider-google.iamAccessBoundaryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamAccessBoundaryPolicy <a name="IamAccessBoundaryPolicy" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy google_iam_access_boundary_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_access_boundary_policy

iamAccessBoundaryPolicy.IamAccessBoundaryPolicy(
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
  parent: str,
  rules: typing.Union[IResolvable, typing.List[IamAccessBoundaryPolicyRules]],
  display_name: str = None,
  id: str = None,
  timeouts: IamAccessBoundaryPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The attachment point is identified by its URL-encoded full resource name. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules">IamAccessBoundaryPolicyRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The display name of the rule. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#id IamAccessBoundaryPolicy#id}. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeouts">IamAccessBoundaryPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.name"></a>

- *Type:* str

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#name IamAccessBoundaryPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.parent"></a>

- *Type:* str

The attachment point is identified by its URL-encoded full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#parent IamAccessBoundaryPolicy#parent}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules">IamAccessBoundaryPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#rules IamAccessBoundaryPolicy#rules}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

The display name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#display_name IamAccessBoundaryPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#id IamAccessBoundaryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeouts">IamAccessBoundaryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#timeouts IamAccessBoundaryPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[IamAccessBoundaryPolicyRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules">IamAccessBoundaryPolicyRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#create IamAccessBoundaryPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#delete IamAccessBoundaryPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#update IamAccessBoundaryPolicy#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IamAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import iam_access_boundary_policy

iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import iam_access_boundary_policy

iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import iam_access_boundary_policy

iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import iam_access_boundary_policy

iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IamAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IamAccessBoundaryPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IamAccessBoundaryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamAccessBoundaryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList">IamAccessBoundaryPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference">IamAccessBoundaryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules">IamAccessBoundaryPolicyRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeouts">IamAccessBoundaryPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.rules"></a>

```python
rules: IamAccessBoundaryPolicyRulesList
```

- *Type:* <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList">IamAccessBoundaryPolicyRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.timeouts"></a>

```python
timeouts: IamAccessBoundaryPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference">IamAccessBoundaryPolicyTimeoutsOutputReference</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[IamAccessBoundaryPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules">IamAccessBoundaryPolicyRules</a>]]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IamAccessBoundaryPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeouts">IamAccessBoundaryPolicyTimeouts</a>]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamAccessBoundaryPolicyConfig <a name="IamAccessBoundaryPolicyConfig" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_access_boundary_policy

iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent: str,
  rules: typing.Union[IResolvable, typing.List[IamAccessBoundaryPolicyRules]],
  display_name: str = None,
  id: str = None,
  timeouts: IamAccessBoundaryPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.name">name</a></code> | <code>str</code> | The name of the policy. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.parent">parent</a></code> | <code>str</code> | The attachment point is identified by its URL-encoded full resource name. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules">IamAccessBoundaryPolicyRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | The display name of the rule. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#id IamAccessBoundaryPolicy#id}. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeouts">IamAccessBoundaryPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#name IamAccessBoundaryPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The attachment point is identified by its URL-encoded full resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#parent IamAccessBoundaryPolicy#parent}

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[IamAccessBoundaryPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules">IamAccessBoundaryPolicyRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#rules IamAccessBoundaryPolicy#rules}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The display name of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#display_name IamAccessBoundaryPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#id IamAccessBoundaryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyConfig.property.timeouts"></a>

```python
timeouts: IamAccessBoundaryPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeouts">IamAccessBoundaryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#timeouts IamAccessBoundaryPolicy#timeouts}

---

### IamAccessBoundaryPolicyRules <a name="IamAccessBoundaryPolicyRules" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_access_boundary_policy

iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules(
  access_boundary_rule: IamAccessBoundaryPolicyRulesAccessBoundaryRule = None,
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules.property.accessBoundaryRule">access_boundary_rule</a></code> | <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRule">IamAccessBoundaryPolicyRulesAccessBoundaryRule</a></code> | access_boundary_rule block. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules.property.description">description</a></code> | <code>str</code> | The description of the rule. |

---

##### `access_boundary_rule`<sup>Optional</sup> <a name="access_boundary_rule" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules.property.accessBoundaryRule"></a>

```python
access_boundary_rule: IamAccessBoundaryPolicyRulesAccessBoundaryRule
```

- *Type:* <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRule">IamAccessBoundaryPolicyRulesAccessBoundaryRule</a>

access_boundary_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#access_boundary_rule IamAccessBoundaryPolicy#access_boundary_rule}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#description IamAccessBoundaryPolicy#description}

---

### IamAccessBoundaryPolicyRulesAccessBoundaryRule <a name="IamAccessBoundaryPolicyRulesAccessBoundaryRule" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_access_boundary_policy

iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRule(
  availability_condition: IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition = None,
  available_permissions: typing.List[str] = None,
  available_resource: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availabilityCondition">availability_condition</a></code> | <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a></code> | availability_condition block. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availablePermissions">available_permissions</a></code> | <code>typing.List[str]</code> | A list of permissions that may be allowed for use on the specified resource. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availableResource">available_resource</a></code> | <code>str</code> | The full resource name of a Google Cloud resource entity. |

---

##### `availability_condition`<sup>Optional</sup> <a name="availability_condition" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availabilityCondition"></a>

```python
availability_condition: IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition
```

- *Type:* <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a>

availability_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#availability_condition IamAccessBoundaryPolicy#availability_condition}

---

##### `available_permissions`<sup>Optional</sup> <a name="available_permissions" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availablePermissions"></a>

```python
available_permissions: typing.List[str]
```

- *Type:* typing.List[str]

A list of permissions that may be allowed for use on the specified resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#available_permissions IamAccessBoundaryPolicy#available_permissions}

---

##### `available_resource`<sup>Optional</sup> <a name="available_resource" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRule.property.availableResource"></a>

```python
available_resource: str
```

- *Type:* str

The full resource name of a Google Cloud resource entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#available_resource IamAccessBoundaryPolicy#available_resource}

---

### IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition <a name="IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_access_boundary_policy

iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.description">description</a></code> | <code>str</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.location">location</a></code> | <code>str</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.title">title</a></code> | <code>str</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#expression IamAccessBoundaryPolicy#expression}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#description IamAccessBoundaryPolicy#description}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.location"></a>

```python
location: str
```

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#location IamAccessBoundaryPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#title IamAccessBoundaryPolicy#title}

---

### IamAccessBoundaryPolicyTimeouts <a name="IamAccessBoundaryPolicyTimeouts" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_access_boundary_policy

iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#create IamAccessBoundaryPolicy#create}. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#delete IamAccessBoundaryPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#update IamAccessBoundaryPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#create IamAccessBoundaryPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#delete IamAccessBoundaryPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#update IamAccessBoundaryPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference <a name="IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_access_boundary_policy

iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference.property.internalValue"></a>

```python
internal_value: IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition
```

- *Type:* <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a>

---


### IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference <a name="IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_access_boundary_policy

iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.putAvailabilityCondition">put_availability_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailabilityCondition">reset_availability_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailablePermissions">reset_available_permissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailableResource">reset_available_resource</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_availability_condition` <a name="put_availability_condition" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.putAvailabilityCondition"></a>

```python
def put_availability_condition(
  expression: str,
  description: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.putAvailabilityCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#expression IamAccessBoundaryPolicy#expression}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.putAvailabilityCondition.parameter.description"></a>

- *Type:* str

Description of the expression.

This is a longer text which describes the expression,
e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#description IamAccessBoundaryPolicy#description}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.putAvailabilityCondition.parameter.location"></a>

- *Type:* str

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#location IamAccessBoundaryPolicy#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.putAvailabilityCondition.parameter.title"></a>

- *Type:* str

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#title IamAccessBoundaryPolicy#title}

---

##### `reset_availability_condition` <a name="reset_availability_condition" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailabilityCondition"></a>

```python
def reset_availability_condition() -> None
```

##### `reset_available_permissions` <a name="reset_available_permissions" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailablePermissions"></a>

```python
def reset_available_permissions() -> None
```

##### `reset_available_resource` <a name="reset_available_resource" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.resetAvailableResource"></a>

```python
def reset_available_resource() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availabilityCondition">availability_condition</a></code> | <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference">IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availabilityConditionInput">availability_condition_input</a></code> | <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availablePermissionsInput">available_permissions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availableResourceInput">available_resource_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availablePermissions">available_permissions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availableResource">available_resource</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRule">IamAccessBoundaryPolicyRulesAccessBoundaryRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_condition`<sup>Required</sup> <a name="availability_condition" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availabilityCondition"></a>

```python
availability_condition: IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference">IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityConditionOutputReference</a>

---

##### `availability_condition_input`<sup>Optional</sup> <a name="availability_condition_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availabilityConditionInput"></a>

```python
availability_condition_input: IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition
```

- *Type:* <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a>

---

##### `available_permissions_input`<sup>Optional</sup> <a name="available_permissions_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availablePermissionsInput"></a>

```python
available_permissions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `available_resource_input`<sup>Optional</sup> <a name="available_resource_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availableResourceInput"></a>

```python
available_resource_input: str
```

- *Type:* str

---

##### `available_permissions`<sup>Required</sup> <a name="available_permissions" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availablePermissions"></a>

```python
available_permissions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `available_resource`<sup>Required</sup> <a name="available_resource" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.availableResource"></a>

```python
available_resource: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference.property.internalValue"></a>

```python
internal_value: IamAccessBoundaryPolicyRulesAccessBoundaryRule
```

- *Type:* <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRule">IamAccessBoundaryPolicyRulesAccessBoundaryRule</a>

---


### IamAccessBoundaryPolicyRulesList <a name="IamAccessBoundaryPolicyRulesList" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_access_boundary_policy

iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IamAccessBoundaryPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules">IamAccessBoundaryPolicyRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IamAccessBoundaryPolicyRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules">IamAccessBoundaryPolicyRules</a>]]

---


### IamAccessBoundaryPolicyRulesOutputReference <a name="IamAccessBoundaryPolicyRulesOutputReference" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_access_boundary_policy

iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.putAccessBoundaryRule">put_access_boundary_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.resetAccessBoundaryRule">reset_access_boundary_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_boundary_rule` <a name="put_access_boundary_rule" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.putAccessBoundaryRule"></a>

```python
def put_access_boundary_rule(
  availability_condition: IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition = None,
  available_permissions: typing.List[str] = None,
  available_resource: str = None
) -> None
```

###### `availability_condition`<sup>Optional</sup> <a name="availability_condition" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.putAccessBoundaryRule.parameter.availabilityCondition"></a>

- *Type:* <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition">IamAccessBoundaryPolicyRulesAccessBoundaryRuleAvailabilityCondition</a>

availability_condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#availability_condition IamAccessBoundaryPolicy#availability_condition}

---

###### `available_permissions`<sup>Optional</sup> <a name="available_permissions" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.putAccessBoundaryRule.parameter.availablePermissions"></a>

- *Type:* typing.List[str]

A list of permissions that may be allowed for use on the specified resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#available_permissions IamAccessBoundaryPolicy#available_permissions}

---

###### `available_resource`<sup>Optional</sup> <a name="available_resource" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.putAccessBoundaryRule.parameter.availableResource"></a>

- *Type:* str

The full resource name of a Google Cloud resource entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/resources/iam_access_boundary_policy#available_resource IamAccessBoundaryPolicy#available_resource}

---

##### `reset_access_boundary_rule` <a name="reset_access_boundary_rule" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.resetAccessBoundaryRule"></a>

```python
def reset_access_boundary_rule() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.property.accessBoundaryRule">access_boundary_rule</a></code> | <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference">IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.property.accessBoundaryRuleInput">access_boundary_rule_input</a></code> | <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRule">IamAccessBoundaryPolicyRulesAccessBoundaryRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules">IamAccessBoundaryPolicyRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_boundary_rule`<sup>Required</sup> <a name="access_boundary_rule" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.property.accessBoundaryRule"></a>

```python
access_boundary_rule: IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference">IamAccessBoundaryPolicyRulesAccessBoundaryRuleOutputReference</a>

---

##### `access_boundary_rule_input`<sup>Optional</sup> <a name="access_boundary_rule_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.property.accessBoundaryRuleInput"></a>

```python
access_boundary_rule_input: IamAccessBoundaryPolicyRulesAccessBoundaryRule
```

- *Type:* <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesAccessBoundaryRule">IamAccessBoundaryPolicyRulesAccessBoundaryRule</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IamAccessBoundaryPolicyRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyRules">IamAccessBoundaryPolicyRules</a>]

---


### IamAccessBoundaryPolicyTimeoutsOutputReference <a name="IamAccessBoundaryPolicyTimeoutsOutputReference" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_access_boundary_policy

iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeouts">IamAccessBoundaryPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IamAccessBoundaryPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamAccessBoundaryPolicy.IamAccessBoundaryPolicyTimeouts">IamAccessBoundaryPolicyTimeouts</a>]

---



