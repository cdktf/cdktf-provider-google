# `iamProjectsPolicyBinding` Submodule <a name="`iamProjectsPolicyBinding` Submodule" id="@cdktf/provider-google.iamProjectsPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamProjectsPolicyBinding <a name="IamProjectsPolicyBinding" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding google_iam_projects_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_projects_policy_binding

iamProjectsPolicyBinding.IamProjectsPolicyBinding(
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
  policy: str,
  policy_binding_id: str,
  target: IamProjectsPolicyBindingTarget,
  annotations: typing.Mapping[str] = None,
  condition: IamProjectsPolicyBindingCondition = None,
  display_name: str = None,
  id: str = None,
  policy_kind: str = None,
  project: str = None,
  timeouts: IamProjectsPolicyBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the Policy Binding. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.policyBindingId">policy_binding_id</a></code> | <code>str</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#id IamProjectsPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.policyKind">policy_kind</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#project IamProjectsPolicyBinding#project}. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.location"></a>

- *Type:* str

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#location IamProjectsPolicyBinding#location}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.policy"></a>

- *Type:* str

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#policy IamProjectsPolicyBinding#policy}

---

##### `policy_binding_id`<sup>Required</sup> <a name="policy_binding_id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.policyBindingId"></a>

- *Type:* str

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#policy_binding_id IamProjectsPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#target IamProjectsPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#annotations IamProjectsPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#condition IamProjectsPolicyBinding#condition}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#display_name IamProjectsPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#id IamProjectsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_kind`<sup>Optional</sup> <a name="policy_kind" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.policyKind"></a>

- *Type:* str

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#policy_kind IamProjectsPolicyBinding#policy_kind}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#project IamProjectsPolicyBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#timeouts IamProjectsPolicyBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetPolicyKind">reset_policy_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putCondition"></a>

```python
def put_condition(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putCondition.parameter.description"></a>

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#description IamProjectsPolicyBinding#description}

---

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#expression IamProjectsPolicyBinding#expression}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putCondition.parameter.location"></a>

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#location IamProjectsPolicyBinding#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putCondition.parameter.title"></a>

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#title IamProjectsPolicyBinding#title}

---

##### `put_target` <a name="put_target" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTarget"></a>

```python
def put_target(
  principal_set: str = None
) -> None
```

###### `principal_set`<sup>Optional</sup> <a name="principal_set" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTarget.parameter.principalSet"></a>

- *Type:* str

Required.

Immutable. The resource name of the policy to be bound.
The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#principal_set IamProjectsPolicyBinding#principal_set}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#create IamProjectsPolicyBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#delete IamProjectsPolicyBinding#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#update IamProjectsPolicyBinding#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy_kind` <a name="reset_policy_kind" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetPolicyKind"></a>

```python
def reset_policy_kind() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IamProjectsPolicyBinding resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import iam_projects_policy_binding

iamProjectsPolicyBinding.IamProjectsPolicyBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import iam_projects_policy_binding

iamProjectsPolicyBinding.IamProjectsPolicyBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import iam_projects_policy_binding

iamProjectsPolicyBinding.IamProjectsPolicyBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import iam_projects_policy_binding

iamProjectsPolicyBinding.IamProjectsPolicyBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IamProjectsPolicyBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IamProjectsPolicyBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IamProjectsPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamProjectsPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference">IamProjectsPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyUid">policy_uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference">IamProjectsPolicyBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference">IamProjectsPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyBindingIdInput">policy_binding_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyKindInput">policy_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.targetInput">target_input</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyBindingId">policy_binding_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyKind">policy_kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.condition"></a>

```python
condition: IamProjectsPolicyBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference">IamProjectsPolicyBindingConditionOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_uid`<sup>Required</sup> <a name="policy_uid" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyUid"></a>

```python
policy_uid: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.target"></a>

```python
target: IamProjectsPolicyBindingTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference">IamProjectsPolicyBindingTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.timeouts"></a>

```python
timeouts: IamProjectsPolicyBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference">IamProjectsPolicyBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.conditionInput"></a>

```python
condition_input: IamProjectsPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `policy_binding_id_input`<sup>Optional</sup> <a name="policy_binding_id_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyBindingIdInput"></a>

```python
policy_binding_id_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `policy_kind_input`<sup>Optional</sup> <a name="policy_kind_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyKindInput"></a>

```python
policy_kind_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.targetInput"></a>

```python
target_input: IamProjectsPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IamProjectsPolicyBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `policy_binding_id`<sup>Required</sup> <a name="policy_binding_id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyBindingId"></a>

```python
policy_binding_id: str
```

- *Type:* str

---

##### `policy_kind`<sup>Required</sup> <a name="policy_kind" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.policyKind"></a>

```python
policy_kind: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamProjectsPolicyBindingCondition <a name="IamProjectsPolicyBindingCondition" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_projects_policy_binding

iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.description">description</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.location">location</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.title">title</a></code> | <code>str</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#description IamProjectsPolicyBinding#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#expression IamProjectsPolicyBinding#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.location"></a>

```python
location: str
```

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#location IamProjectsPolicyBinding#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#title IamProjectsPolicyBinding#title}

---

### IamProjectsPolicyBindingConfig <a name="IamProjectsPolicyBindingConfig" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_projects_policy_binding

iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  policy: str,
  policy_binding_id: str,
  target: IamProjectsPolicyBindingTarget,
  annotations: typing.Mapping[str] = None,
  condition: IamProjectsPolicyBindingCondition = None,
  display_name: str = None,
  id: str = None,
  policy_kind: str = None,
  project: str = None,
  timeouts: IamProjectsPolicyBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.location">location</a></code> | <code>str</code> | The location of the Policy Binding. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policy">policy</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policyBindingId">policy_binding_id</a></code> | <code>str</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#id IamProjectsPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policyKind">policy_kind</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#project IamProjectsPolicyBinding#project}. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#location IamProjectsPolicyBinding#location}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#policy IamProjectsPolicyBinding#policy}

---

##### `policy_binding_id`<sup>Required</sup> <a name="policy_binding_id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policyBindingId"></a>

```python
policy_binding_id: str
```

- *Type:* str

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#policy_binding_id IamProjectsPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.target"></a>

```python
target: IamProjectsPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#target IamProjectsPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#annotations IamProjectsPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.condition"></a>

```python
condition: IamProjectsPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#condition IamProjectsPolicyBinding#condition}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#display_name IamProjectsPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#id IamProjectsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_kind`<sup>Optional</sup> <a name="policy_kind" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.policyKind"></a>

```python
policy_kind: str
```

- *Type:* str

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#policy_kind IamProjectsPolicyBinding#policy_kind}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#project IamProjectsPolicyBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConfig.property.timeouts"></a>

```python
timeouts: IamProjectsPolicyBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#timeouts IamProjectsPolicyBinding#timeouts}

---

### IamProjectsPolicyBindingTarget <a name="IamProjectsPolicyBindingTarget" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_projects_policy_binding

iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget(
  principal_set: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget.property.principalSet">principal_set</a></code> | <code>str</code> | Required. |

---

##### `principal_set`<sup>Optional</sup> <a name="principal_set" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget.property.principalSet"></a>

```python
principal_set: str
```

- *Type:* str

Required.

Immutable. The resource name of the policy to be bound.
The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#principal_set IamProjectsPolicyBinding#principal_set}

---

### IamProjectsPolicyBindingTimeouts <a name="IamProjectsPolicyBindingTimeouts" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_projects_policy_binding

iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#create IamProjectsPolicyBinding#create}. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#delete IamProjectsPolicyBinding#delete}. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#update IamProjectsPolicyBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#create IamProjectsPolicyBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#delete IamProjectsPolicyBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/iam_projects_policy_binding#update IamProjectsPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamProjectsPolicyBindingConditionOutputReference <a name="IamProjectsPolicyBindingConditionOutputReference" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_projects_policy_binding

iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: IamProjectsPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingCondition">IamProjectsPolicyBindingCondition</a>

---


### IamProjectsPolicyBindingTargetOutputReference <a name="IamProjectsPolicyBindingTargetOutputReference" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_projects_policy_binding

iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resetPrincipalSet">reset_principal_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_principal_set` <a name="reset_principal_set" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.resetPrincipalSet"></a>

```python
def reset_principal_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.principalSetInput">principal_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.principalSet">principal_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_set_input`<sup>Optional</sup> <a name="principal_set_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.principalSetInput"></a>

```python
principal_set_input: str
```

- *Type:* str

---

##### `principal_set`<sup>Required</sup> <a name="principal_set" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.principalSet"></a>

```python
principal_set: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTargetOutputReference.property.internalValue"></a>

```python
internal_value: IamProjectsPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTarget">IamProjectsPolicyBindingTarget</a>

---


### IamProjectsPolicyBindingTimeoutsOutputReference <a name="IamProjectsPolicyBindingTimeoutsOutputReference" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_projects_policy_binding

iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IamProjectsPolicyBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamProjectsPolicyBinding.IamProjectsPolicyBindingTimeouts">IamProjectsPolicyBindingTimeouts</a>]

---



