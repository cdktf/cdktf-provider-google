# `orgPolicyPolicy` Submodule <a name="`orgPolicyPolicy` Submodule" id="@cdktf/provider-google.orgPolicyPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrgPolicyPolicy <a name="OrgPolicyPolicy" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy google_org_policy_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicy(
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
  dry_run_spec: OrgPolicyPolicyDryRunSpec = None,
  id: str = None,
  spec: OrgPolicyPolicySpec = None,
  timeouts: OrgPolicyPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent of the resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.dryRunSpec">dry_run_spec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a></code> | dry_run_spec block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#id OrgPolicyPolicy#id}. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.name"></a>

- *Type:* str

Immutable.

The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: * 'projects/{project_number}/policies/{constraint_name}' * 'folders/{folder_id}/policies/{constraint_name}' * 'organizations/{organization_id}/policies/{constraint_name}' For example, "projects/123/policies/compute.disableSerialPortAccess". Note: 'projects/{project_id}/policies/{constraint_name}' is also an acceptable name for API requests, but responses will return the name using the equivalent project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#name OrgPolicyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.parent"></a>

- *Type:* str

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#parent OrgPolicyPolicy#parent}

---

##### `dry_run_spec`<sup>Optional</sup> <a name="dry_run_spec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.dryRunSpec"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a>

dry_run_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#dry_run_spec OrgPolicyPolicy#dry_run_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#id OrgPolicyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#spec OrgPolicyPolicy#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#timeouts OrgPolicyPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putDryRunSpec">put_dry_run_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putSpec">put_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetDryRunSpec">reset_dry_run_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetSpec">reset_spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dry_run_spec` <a name="put_dry_run_spec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putDryRunSpec"></a>

```python
def put_dry_run_spec(
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  reset: typing.Union[bool, IResolvable] = None,
  rules: typing.Union[IResolvable, typing.List[OrgPolicyPolicyDryRunSpecRules]] = None
) -> None
```

###### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putDryRunSpec.parameter.inheritFromParent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines the inheritance behavior for this policy.

If 'inherit_from_parent' is true, policy rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the new root for evaluation. This field can be set only for policies which configure list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#inherit_from_parent OrgPolicyPolicy#inherit_from_parent}

---

###### `reset`<sup>Optional</sup> <a name="reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putDryRunSpec.parameter.reset"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific constraint at this resource.

This field can be set in policies for either list or boolean constraints. If set, 'rules' must be empty and 'inherit_from_parent' must be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#reset OrgPolicyPolicy#reset}

---

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putDryRunSpec.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#rules OrgPolicyPolicy#rules}

---

##### `put_spec` <a name="put_spec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putSpec"></a>

```python
def put_spec(
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  reset: typing.Union[bool, IResolvable] = None,
  rules: typing.Union[IResolvable, typing.List[OrgPolicyPolicySpecRules]] = None
) -> None
```

###### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putSpec.parameter.inheritFromParent"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines the inheritance behavior for this 'Policy'.

If 'inherit_from_parent' is true, PolicyRules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this Policy becomes the new root for evaluation. This field can be set only for Policies which configure list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#inherit_from_parent OrgPolicyPolicy#inherit_from_parent}

---

###### `reset`<sup>Optional</sup> <a name="reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putSpec.parameter.reset"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific 'Constraint' at this resource.

This field can be set in policies for either list or boolean constraints. If set, 'rules' must be empty and 'inherit_from_parent' must be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#reset OrgPolicyPolicy#reset}

---

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putSpec.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#rules OrgPolicyPolicy#rules}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#create OrgPolicyPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#delete OrgPolicyPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#update OrgPolicyPolicy#update}.

---

##### `reset_dry_run_spec` <a name="reset_dry_run_spec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetDryRunSpec"></a>

```python
def reset_dry_run_spec() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_spec` <a name="reset_spec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetSpec"></a>

```python
def reset_spec() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OrgPolicyPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OrgPolicyPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OrgPolicyPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OrgPolicyPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrgPolicyPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dryRunSpec">dry_run_spec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference">OrgPolicyPolicyDryRunSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference">OrgPolicyPolicySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference">OrgPolicyPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dryRunSpecInput">dry_run_spec_input</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.specInput">spec_input</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.parent">parent</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `dry_run_spec`<sup>Required</sup> <a name="dry_run_spec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dryRunSpec"></a>

```python
dry_run_spec: OrgPolicyPolicyDryRunSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference">OrgPolicyPolicyDryRunSpecOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.spec"></a>

```python
spec: OrgPolicyPolicySpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference">OrgPolicyPolicySpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.timeouts"></a>

```python
timeouts: OrgPolicyPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference">OrgPolicyPolicyTimeoutsOutputReference</a>

---

##### `dry_run_spec_input`<sup>Optional</sup> <a name="dry_run_spec_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.dryRunSpecInput"></a>

```python
dry_run_spec_input: OrgPolicyPolicyDryRunSpec
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `spec_input`<sup>Optional</sup> <a name="spec_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.specInput"></a>

```python
spec_input: OrgPolicyPolicySpec
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, OrgPolicyPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a>]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrgPolicyPolicyConfig <a name="OrgPolicyPolicyConfig" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  parent: str,
  dry_run_spec: OrgPolicyPolicyDryRunSpec = None,
  id: str = None,
  spec: OrgPolicyPolicySpec = None,
  timeouts: OrgPolicyPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.name">name</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.parent">parent</a></code> | <code>str</code> | The parent of the resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.dryRunSpec">dry_run_spec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a></code> | dry_run_spec block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#id OrgPolicyPolicy#id}. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Immutable.

The resource name of the Policy. Must be one of the following forms, where constraint_name is the name of the constraint which this Policy configures: * 'projects/{project_number}/policies/{constraint_name}' * 'folders/{folder_id}/policies/{constraint_name}' * 'organizations/{organization_id}/policies/{constraint_name}' For example, "projects/123/policies/compute.disableSerialPortAccess". Note: 'projects/{project_id}/policies/{constraint_name}' is also an acceptable name for API requests, but responses will return the name using the equivalent project number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#name OrgPolicyPolicy#name}

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#parent OrgPolicyPolicy#parent}

---

##### `dry_run_spec`<sup>Optional</sup> <a name="dry_run_spec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.dryRunSpec"></a>

```python
dry_run_spec: OrgPolicyPolicyDryRunSpec
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a>

dry_run_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#dry_run_spec OrgPolicyPolicy#dry_run_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#id OrgPolicyPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.spec"></a>

```python
spec: OrgPolicyPolicySpec
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#spec OrgPolicyPolicy#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyConfig.property.timeouts"></a>

```python
timeouts: OrgPolicyPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#timeouts OrgPolicyPolicy#timeouts}

---

### OrgPolicyPolicyDryRunSpec <a name="OrgPolicyPolicyDryRunSpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicyDryRunSpec(
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  reset: typing.Union[bool, IResolvable] = None,
  rules: typing.Union[IResolvable, typing.List[OrgPolicyPolicyDryRunSpecRules]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines the inheritance behavior for this policy. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.reset">reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific constraint at this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>]]</code> | rules block. |

---

##### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines the inheritance behavior for this policy.

If 'inherit_from_parent' is true, policy rules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this policy becomes the new root for evaluation. This field can be set only for policies which configure list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#inherit_from_parent OrgPolicyPolicy#inherit_from_parent}

---

##### `reset`<sup>Optional</sup> <a name="reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.reset"></a>

```python
reset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific constraint at this resource.

This field can be set in policies for either list or boolean constraints. If set, 'rules' must be empty and 'inherit_from_parent' must be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#reset OrgPolicyPolicy#reset}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[OrgPolicyPolicyDryRunSpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#rules OrgPolicyPolicy#rules}

---

### OrgPolicyPolicyDryRunSpecRules <a name="OrgPolicyPolicyDryRunSpecRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules(
  allow_all: str = None,
  condition: OrgPolicyPolicyDryRunSpecRulesCondition = None,
  deny_all: str = None,
  enforce: str = None,
  values: OrgPolicyPolicyDryRunSpecRulesValues = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.allowAll">allow_all</a></code> | <code>str</code> | Setting this to '"TRUE"' means that all values are allowed. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.denyAll">deny_all</a></code> | <code>str</code> | Setting this to '"TRUE"' means that all values are denied. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.enforce">enforce</a></code> | <code>str</code> | If '"TRUE"', then the 'Policy' is enforced. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.values">values</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a></code> | values block. |

---

##### `allow_all`<sup>Optional</sup> <a name="allow_all" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.allowAll"></a>

```python
allow_all: str
```

- *Type:* str

Setting this to '"TRUE"' means that all values are allowed.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#allow_all OrgPolicyPolicy#allow_all}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.condition"></a>

```python
condition: OrgPolicyPolicyDryRunSpecRulesCondition
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#condition OrgPolicyPolicy#condition}

---

##### `deny_all`<sup>Optional</sup> <a name="deny_all" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.denyAll"></a>

```python
deny_all: str
```

- *Type:* str

Setting this to '"TRUE"' means that all values are denied.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#deny_all OrgPolicyPolicy#deny_all}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.enforce"></a>

```python
enforce: str
```

- *Type:* str

If '"TRUE"', then the 'Policy' is enforced.

If '"FALSE"', then any configuration is acceptable. This field can be set only in Policies for boolean constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#enforce OrgPolicyPolicy#enforce}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules.property.values"></a>

```python
values: OrgPolicyPolicyDryRunSpecRulesValues
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#values OrgPolicyPolicy#values}

---

### OrgPolicyPolicyDryRunSpecRulesCondition <a name="OrgPolicyPolicyDryRunSpecRulesCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.description">description</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.location">location</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.title">title</a></code> | <code>str</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#description OrgPolicyPolicy#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#expression OrgPolicyPolicy#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.location"></a>

```python
location: str
```

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#location OrgPolicyPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#title OrgPolicyPolicy#title}

---

### OrgPolicyPolicyDryRunSpecRulesValues <a name="OrgPolicyPolicyDryRunSpecRulesValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues(
  allowed_values: typing.List[str] = None,
  denied_values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.property.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | List of values allowed at this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.property.deniedValues">denied_values</a></code> | <code>typing.List[str]</code> | List of values denied at this resource. |

---

##### `allowed_values`<sup>Optional</sup> <a name="allowed_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.property.allowedValues"></a>

```python
allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#allowed_values OrgPolicyPolicy#allowed_values}

---

##### `denied_values`<sup>Optional</sup> <a name="denied_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues.property.deniedValues"></a>

```python
denied_values: typing.List[str]
```

- *Type:* typing.List[str]

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#denied_values OrgPolicyPolicy#denied_values}

---

### OrgPolicyPolicySpec <a name="OrgPolicyPolicySpec" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicySpec(
  inherit_from_parent: typing.Union[bool, IResolvable] = None,
  reset: typing.Union[bool, IResolvable] = None,
  rules: typing.Union[IResolvable, typing.List[OrgPolicyPolicySpecRules]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines the inheritance behavior for this 'Policy'. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.reset">reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific 'Constraint' at this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>]]</code> | rules block. |

---

##### `inherit_from_parent`<sup>Optional</sup> <a name="inherit_from_parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines the inheritance behavior for this 'Policy'.

If 'inherit_from_parent' is true, PolicyRules set higher up in the hierarchy (up to the closest root) are inherited and present in the effective policy. If it is false, then no rules are inherited, and this Policy becomes the new root for evaluation. This field can be set only for Policies which configure list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#inherit_from_parent OrgPolicyPolicy#inherit_from_parent}

---

##### `reset`<sup>Optional</sup> <a name="reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.reset"></a>

```python
reset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ignores policies set above this resource and restores the 'constraint_default' enforcement behavior of the specific 'Constraint' at this resource.

This field can be set in policies for either list or boolean constraints. If set, 'rules' must be empty and 'inherit_from_parent' must be set to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#reset OrgPolicyPolicy#reset}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[OrgPolicyPolicySpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#rules OrgPolicyPolicy#rules}

---

### OrgPolicyPolicySpecRules <a name="OrgPolicyPolicySpecRules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicySpecRules(
  allow_all: str = None,
  condition: OrgPolicyPolicySpecRulesCondition = None,
  deny_all: str = None,
  enforce: str = None,
  values: OrgPolicyPolicySpecRulesValues = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.allowAll">allow_all</a></code> | <code>str</code> | Setting this to '"TRUE"' means that all values are allowed. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.denyAll">deny_all</a></code> | <code>str</code> | Setting this to '"TRUE"' means that all values are denied. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.enforce">enforce</a></code> | <code>str</code> | If '"TRUE"', then the 'Policy' is enforced. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.values">values</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a></code> | values block. |

---

##### `allow_all`<sup>Optional</sup> <a name="allow_all" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.allowAll"></a>

```python
allow_all: str
```

- *Type:* str

Setting this to '"TRUE"' means that all values are allowed.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#allow_all OrgPolicyPolicy#allow_all}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.condition"></a>

```python
condition: OrgPolicyPolicySpecRulesCondition
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#condition OrgPolicyPolicy#condition}

---

##### `deny_all`<sup>Optional</sup> <a name="deny_all" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.denyAll"></a>

```python
deny_all: str
```

- *Type:* str

Setting this to '"TRUE"' means that all values are denied.

This field can be set only in Policies for list constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#deny_all OrgPolicyPolicy#deny_all}

---

##### `enforce`<sup>Optional</sup> <a name="enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.enforce"></a>

```python
enforce: str
```

- *Type:* str

If '"TRUE"', then the 'Policy' is enforced.

If '"FALSE"', then any configuration is acceptable. This field can be set only in Policies for boolean constraints.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#enforce OrgPolicyPolicy#enforce}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules.property.values"></a>

```python
values: OrgPolicyPolicySpecRulesValues
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a>

values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#values OrgPolicyPolicy#values}

---

### OrgPolicyPolicySpecRulesCondition <a name="OrgPolicyPolicySpecRulesCondition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.description">description</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.location">location</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.title">title</a></code> | <code>str</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#description OrgPolicyPolicy#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#expression OrgPolicyPolicy#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.location"></a>

```python
location: str
```

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#location OrgPolicyPolicy#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#title OrgPolicyPolicy#title}

---

### OrgPolicyPolicySpecRulesValues <a name="OrgPolicyPolicySpecRulesValues" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicySpecRulesValues(
  allowed_values: typing.List[str] = None,
  denied_values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.property.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | List of values allowed at this resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.property.deniedValues">denied_values</a></code> | <code>typing.List[str]</code> | List of values denied at this resource. |

---

##### `allowed_values`<sup>Optional</sup> <a name="allowed_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.property.allowedValues"></a>

```python
allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#allowed_values OrgPolicyPolicy#allowed_values}

---

##### `denied_values`<sup>Optional</sup> <a name="denied_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues.property.deniedValues"></a>

```python
denied_values: typing.List[str]
```

- *Type:* typing.List[str]

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#denied_values OrgPolicyPolicy#denied_values}

---

### OrgPolicyPolicyTimeouts <a name="OrgPolicyPolicyTimeouts" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#create OrgPolicyPolicy#create}. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#delete OrgPolicyPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#update OrgPolicyPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#create OrgPolicyPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#delete OrgPolicyPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#update OrgPolicyPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrgPolicyPolicyDryRunSpecOutputReference <a name="OrgPolicyPolicyDryRunSpecOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetInheritFromParent">reset_inherit_from_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetReset">reset_reset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[OrgPolicyPolicyDryRunSpecRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>]]

---

##### `reset_inherit_from_parent` <a name="reset_inherit_from_parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetInheritFromParent"></a>

```python
def reset_inherit_from_parent() -> None
```

##### `reset_reset` <a name="reset_reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetReset"></a>

```python
def reset_reset() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList">OrgPolicyPolicyDryRunSpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParentInput">inherit_from_parent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.resetInput">reset_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.reset">reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.rules"></a>

```python
rules: OrgPolicyPolicyDryRunSpecRulesList
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList">OrgPolicyPolicyDryRunSpecRulesList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `inherit_from_parent_input`<sup>Optional</sup> <a name="inherit_from_parent_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParentInput"></a>

```python
inherit_from_parent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reset_input`<sup>Optional</sup> <a name="reset_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.resetInput"></a>

```python
reset_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[OrgPolicyPolicyDryRunSpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>]]

---

##### `inherit_from_parent`<sup>Required</sup> <a name="inherit_from_parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reset`<sup>Required</sup> <a name="reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.reset"></a>

```python
reset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecOutputReference.property.internalValue"></a>

```python
internal_value: OrgPolicyPolicyDryRunSpec
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpec">OrgPolicyPolicyDryRunSpec</a>

---


### OrgPolicyPolicyDryRunSpecRulesConditionOutputReference <a name="OrgPolicyPolicyDryRunSpecRulesConditionOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference.property.internalValue"></a>

```python
internal_value: OrgPolicyPolicyDryRunSpecRulesCondition
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a>

---


### OrgPolicyPolicyDryRunSpecRulesList <a name="OrgPolicyPolicyDryRunSpecRulesList" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrgPolicyPolicyDryRunSpecRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OrgPolicyPolicyDryRunSpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>]]

---


### OrgPolicyPolicyDryRunSpecRulesOutputReference <a name="OrgPolicyPolicyDryRunSpecRulesOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putValues">put_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetAllowAll">reset_allow_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetDenyAll">reset_deny_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetEnforce">reset_enforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition"></a>

```python
def put_condition(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition.parameter.description"></a>

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#description OrgPolicyPolicy#description}

---

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#expression OrgPolicyPolicy#expression}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition.parameter.location"></a>

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#location OrgPolicyPolicy#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putCondition.parameter.title"></a>

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#title OrgPolicyPolicy#title}

---

##### `put_values` <a name="put_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putValues"></a>

```python
def put_values(
  allowed_values: typing.List[str] = None,
  denied_values: typing.List[str] = None
) -> None
```

###### `allowed_values`<sup>Optional</sup> <a name="allowed_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putValues.parameter.allowedValues"></a>

- *Type:* typing.List[str]

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#allowed_values OrgPolicyPolicy#allowed_values}

---

###### `denied_values`<sup>Optional</sup> <a name="denied_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.putValues.parameter.deniedValues"></a>

- *Type:* typing.List[str]

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#denied_values OrgPolicyPolicy#denied_values}

---

##### `reset_allow_all` <a name="reset_allow_all" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetAllowAll"></a>

```python
def reset_allow_all() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_deny_all` <a name="reset_deny_all" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetDenyAll"></a>

```python
def reset_deny_all() -> None
```

##### `reset_enforce` <a name="reset_enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetEnforce"></a>

```python
def reset_enforce() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference">OrgPolicyPolicyDryRunSpecRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.values">values</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference">OrgPolicyPolicyDryRunSpecRulesValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAllInput">allow_all_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAllInput">deny_all_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforceInput">enforce_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.valuesInput">values_input</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAll">allow_all</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAll">deny_all</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforce">enforce</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.condition"></a>

```python
condition: OrgPolicyPolicyDryRunSpecRulesConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesConditionOutputReference">OrgPolicyPolicyDryRunSpecRulesConditionOutputReference</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.values"></a>

```python
values: OrgPolicyPolicyDryRunSpecRulesValuesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference">OrgPolicyPolicyDryRunSpecRulesValuesOutputReference</a>

---

##### `allow_all_input`<sup>Optional</sup> <a name="allow_all_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAllInput"></a>

```python
allow_all_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.conditionInput"></a>

```python
condition_input: OrgPolicyPolicyDryRunSpecRulesCondition
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesCondition">OrgPolicyPolicyDryRunSpecRulesCondition</a>

---

##### `deny_all_input`<sup>Optional</sup> <a name="deny_all_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAllInput"></a>

```python
deny_all_input: str
```

- *Type:* str

---

##### `enforce_input`<sup>Optional</sup> <a name="enforce_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforceInput"></a>

```python
enforce_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.valuesInput"></a>

```python
values_input: OrgPolicyPolicyDryRunSpecRulesValues
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a>

---

##### `allow_all`<sup>Required</sup> <a name="allow_all" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.allowAll"></a>

```python
allow_all: str
```

- *Type:* str

---

##### `deny_all`<sup>Required</sup> <a name="deny_all" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.denyAll"></a>

```python
deny_all: str
```

- *Type:* str

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.enforce"></a>

```python
enforce: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OrgPolicyPolicyDryRunSpecRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRules">OrgPolicyPolicyDryRunSpecRules</a>]

---


### OrgPolicyPolicyDryRunSpecRulesValuesOutputReference <a name="OrgPolicyPolicyDryRunSpecRulesValuesOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetAllowedValues">reset_allowed_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetDeniedValues">reset_denied_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_values` <a name="reset_allowed_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetAllowedValues"></a>

```python
def reset_allowed_values() -> None
```

##### `reset_denied_values` <a name="reset_denied_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.resetDeniedValues"></a>

```python
def reset_denied_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValuesInput">allowed_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValuesInput">denied_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValues">denied_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values_input`<sup>Optional</sup> <a name="allowed_values_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValuesInput"></a>

```python
allowed_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_values_input`<sup>Optional</sup> <a name="denied_values_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValuesInput"></a>

```python
denied_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.allowedValues"></a>

```python
allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_values`<sup>Required</sup> <a name="denied_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.deniedValues"></a>

```python
denied_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValuesOutputReference.property.internalValue"></a>

```python
internal_value: OrgPolicyPolicyDryRunSpecRulesValues
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyDryRunSpecRulesValues">OrgPolicyPolicyDryRunSpecRulesValues</a>

---


### OrgPolicyPolicySpecOutputReference <a name="OrgPolicyPolicySpecOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicySpecOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetInheritFromParent">reset_inherit_from_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetReset">reset_reset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[OrgPolicyPolicySpecRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>]]

---

##### `reset_inherit_from_parent` <a name="reset_inherit_from_parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetInheritFromParent"></a>

```python
def reset_inherit_from_parent() -> None
```

##### `reset_reset` <a name="reset_reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetReset"></a>

```python
def reset_reset() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList">OrgPolicyPolicySpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.inheritFromParentInput">inherit_from_parent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.resetInput">reset_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.inheritFromParent">inherit_from_parent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.reset">reset</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.rules"></a>

```python
rules: OrgPolicyPolicySpecRulesList
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList">OrgPolicyPolicySpecRulesList</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `inherit_from_parent_input`<sup>Optional</sup> <a name="inherit_from_parent_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.inheritFromParentInput"></a>

```python
inherit_from_parent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reset_input`<sup>Optional</sup> <a name="reset_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.resetInput"></a>

```python
reset_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[OrgPolicyPolicySpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>]]

---

##### `inherit_from_parent`<sup>Required</sup> <a name="inherit_from_parent" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.inheritFromParent"></a>

```python
inherit_from_parent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reset`<sup>Required</sup> <a name="reset" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.reset"></a>

```python
reset: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecOutputReference.property.internalValue"></a>

```python
internal_value: OrgPolicyPolicySpec
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpec">OrgPolicyPolicySpec</a>

---


### OrgPolicyPolicySpecRulesConditionOutputReference <a name="OrgPolicyPolicySpecRulesConditionOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference.property.internalValue"></a>

```python
internal_value: OrgPolicyPolicySpecRulesCondition
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a>

---


### OrgPolicyPolicySpecRulesList <a name="OrgPolicyPolicySpecRulesList" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicySpecRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> OrgPolicyPolicySpecRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[OrgPolicyPolicySpecRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>]]

---


### OrgPolicyPolicySpecRulesOutputReference <a name="OrgPolicyPolicySpecRulesOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putValues">put_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetAllowAll">reset_allow_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetDenyAll">reset_deny_all</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetEnforce">reset_enforce</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putCondition"></a>

```python
def put_condition(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putCondition.parameter.description"></a>

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#description OrgPolicyPolicy#description}

---

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#expression OrgPolicyPolicy#expression}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putCondition.parameter.location"></a>

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#location OrgPolicyPolicy#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putCondition.parameter.title"></a>

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#title OrgPolicyPolicy#title}

---

##### `put_values` <a name="put_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putValues"></a>

```python
def put_values(
  allowed_values: typing.List[str] = None,
  denied_values: typing.List[str] = None
) -> None
```

###### `allowed_values`<sup>Optional</sup> <a name="allowed_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putValues.parameter.allowedValues"></a>

- *Type:* typing.List[str]

List of values allowed at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#allowed_values OrgPolicyPolicy#allowed_values}

---

###### `denied_values`<sup>Optional</sup> <a name="denied_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.putValues.parameter.deniedValues"></a>

- *Type:* typing.List[str]

List of values denied at this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.41.0/docs/resources/org_policy_policy#denied_values OrgPolicyPolicy#denied_values}

---

##### `reset_allow_all` <a name="reset_allow_all" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetAllowAll"></a>

```python
def reset_allow_all() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_deny_all` <a name="reset_deny_all" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetDenyAll"></a>

```python
def reset_deny_all() -> None
```

##### `reset_enforce` <a name="reset_enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetEnforce"></a>

```python
def reset_enforce() -> None
```

##### `reset_values` <a name="reset_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference">OrgPolicyPolicySpecRulesConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.values">values</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference">OrgPolicyPolicySpecRulesValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.allowAllInput">allow_all_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.denyAllInput">deny_all_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.enforceInput">enforce_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.valuesInput">values_input</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.allowAll">allow_all</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.denyAll">deny_all</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.enforce">enforce</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.condition"></a>

```python
condition: OrgPolicyPolicySpecRulesConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesConditionOutputReference">OrgPolicyPolicySpecRulesConditionOutputReference</a>

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.values"></a>

```python
values: OrgPolicyPolicySpecRulesValuesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference">OrgPolicyPolicySpecRulesValuesOutputReference</a>

---

##### `allow_all_input`<sup>Optional</sup> <a name="allow_all_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.allowAllInput"></a>

```python
allow_all_input: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.conditionInput"></a>

```python
condition_input: OrgPolicyPolicySpecRulesCondition
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesCondition">OrgPolicyPolicySpecRulesCondition</a>

---

##### `deny_all_input`<sup>Optional</sup> <a name="deny_all_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.denyAllInput"></a>

```python
deny_all_input: str
```

- *Type:* str

---

##### `enforce_input`<sup>Optional</sup> <a name="enforce_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.enforceInput"></a>

```python
enforce_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.valuesInput"></a>

```python
values_input: OrgPolicyPolicySpecRulesValues
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a>

---

##### `allow_all`<sup>Required</sup> <a name="allow_all" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.allowAll"></a>

```python
allow_all: str
```

- *Type:* str

---

##### `deny_all`<sup>Required</sup> <a name="deny_all" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.denyAll"></a>

```python
deny_all: str
```

- *Type:* str

---

##### `enforce`<sup>Required</sup> <a name="enforce" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.enforce"></a>

```python
enforce: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OrgPolicyPolicySpecRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRules">OrgPolicyPolicySpecRules</a>]

---


### OrgPolicyPolicySpecRulesValuesOutputReference <a name="OrgPolicyPolicySpecRulesValuesOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resetAllowedValues">reset_allowed_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resetDeniedValues">reset_denied_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allowed_values` <a name="reset_allowed_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resetAllowedValues"></a>

```python
def reset_allowed_values() -> None
```

##### `reset_denied_values` <a name="reset_denied_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.resetDeniedValues"></a>

```python
def reset_denied_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValuesInput">allowed_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValuesInput">denied_values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValues">allowed_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValues">denied_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_values_input`<sup>Optional</sup> <a name="allowed_values_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValuesInput"></a>

```python
allowed_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_values_input`<sup>Optional</sup> <a name="denied_values_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValuesInput"></a>

```python
denied_values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_values`<sup>Required</sup> <a name="allowed_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.allowedValues"></a>

```python
allowed_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_values`<sup>Required</sup> <a name="denied_values" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.deniedValues"></a>

```python
denied_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValuesOutputReference.property.internalValue"></a>

```python
internal_value: OrgPolicyPolicySpecRulesValues
```

- *Type:* <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicySpecRulesValues">OrgPolicyPolicySpecRulesValues</a>

---


### OrgPolicyPolicyTimeoutsOutputReference <a name="OrgPolicyPolicyTimeoutsOutputReference" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import org_policy_policy

orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, OrgPolicyPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.orgPolicyPolicy.OrgPolicyPolicyTimeouts">OrgPolicyPolicyTimeouts</a>]

---



