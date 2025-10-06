# `iamOrganizationsPolicyBinding` Submodule <a name="`iamOrganizationsPolicyBinding` Submodule" id="@cdktf/provider-google.iamOrganizationsPolicyBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamOrganizationsPolicyBinding <a name="IamOrganizationsPolicyBinding" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding google_iam_organizations_policy_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_organizations_policy_binding

iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  organization: str,
  policy: str,
  policy_binding_id: str,
  target: IamOrganizationsPolicyBindingTarget,
  annotations: typing.Mapping[str] = None,
  condition: IamOrganizationsPolicyBindingCondition = None,
  display_name: str = None,
  id: str = None,
  policy_kind: str = None,
  timeouts: IamOrganizationsPolicyBindingTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the Policy Binding. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The parent organization of the Policy Binding. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.policy">policy</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.policyBindingId">policy_binding_id</a></code> | <code>str</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#id IamOrganizationsPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.policyKind">policy_kind</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.location"></a>

- *Type:* str

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#location IamOrganizationsPolicyBinding#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.organization"></a>

- *Type:* str

The parent organization of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#organization IamOrganizationsPolicyBinding#organization}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.policy"></a>

- *Type:* str

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#policy IamOrganizationsPolicyBinding#policy}

---

##### `policy_binding_id`<sup>Required</sup> <a name="policy_binding_id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.policyBindingId"></a>

- *Type:* str

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#policy_binding_id IamOrganizationsPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#target IamOrganizationsPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#annotations IamOrganizationsPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#condition IamOrganizationsPolicyBinding#condition}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.displayName"></a>

- *Type:* str

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#display_name IamOrganizationsPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#id IamOrganizationsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_kind`<sup>Optional</sup> <a name="policy_kind" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.policyKind"></a>

- *Type:* str

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#policy_kind IamOrganizationsPolicyBinding#policy_kind}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#timeouts IamOrganizationsPolicyBinding#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putCondition">put_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTarget">put_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetPolicyKind">reset_policy_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_condition` <a name="put_condition" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putCondition"></a>

```python
def put_condition(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putCondition.parameter.description"></a>

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#description IamOrganizationsPolicyBinding#description}

---

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putCondition.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#expression IamOrganizationsPolicyBinding#expression}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putCondition.parameter.location"></a>

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#location IamOrganizationsPolicyBinding#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putCondition.parameter.title"></a>

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#title IamOrganizationsPolicyBinding#title}

---

##### `put_target` <a name="put_target" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTarget"></a>

```python
def put_target(
  principal_set: str = None
) -> None
```

###### `principal_set`<sup>Optional</sup> <a name="principal_set" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTarget.parameter.principalSet"></a>

- *Type:* str

Required.

Immutable. Full Resource Name of the principal set used for principal access boundary policy bindings.
Examples for each one of the following supported principal set types:

* Organization '//cloudresourcemanager.googleapis.com/organizations/ORGANIZATION_ID'
* Workforce Identity: '//iam.googleapis.com/locations/global/workforcePools/WORKFORCE_POOL_ID'
* Workspace Identity: '//iam.googleapis.com/locations/global/workspace/WORKSPACE_ID'
  It must be parent by the policy binding's parent (the organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#principal_set IamOrganizationsPolicyBinding#principal_set}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#create IamOrganizationsPolicyBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#delete IamOrganizationsPolicyBinding#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#update IamOrganizationsPolicyBinding#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_policy_kind` <a name="reset_policy_kind" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetPolicyKind"></a>

```python
def reset_policy_kind() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IamOrganizationsPolicyBinding resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import iam_organizations_policy_binding

iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import iam_organizations_policy_binding

iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import iam_organizations_policy_binding

iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import iam_organizations_policy_binding

iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IamOrganizationsPolicyBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IamOrganizationsPolicyBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IamOrganizationsPolicyBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamOrganizationsPolicyBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference">IamOrganizationsPolicyBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyUid">policy_uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference">IamOrganizationsPolicyBindingTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference">IamOrganizationsPolicyBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.conditionInput">condition_input</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyBindingIdInput">policy_binding_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyInput">policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyKindInput">policy_kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.targetInput">target_input</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policy">policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyBindingId">policy_binding_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyKind">policy_kind</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.condition"></a>

```python
condition: IamOrganizationsPolicyBindingConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference">IamOrganizationsPolicyBindingConditionOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `policy_uid`<sup>Required</sup> <a name="policy_uid" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyUid"></a>

```python
policy_uid: str
```

- *Type:* str

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.target"></a>

```python
target: IamOrganizationsPolicyBindingTargetOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference">IamOrganizationsPolicyBindingTargetOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.timeouts"></a>

```python
timeouts: IamOrganizationsPolicyBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference">IamOrganizationsPolicyBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.conditionInput"></a>

```python
condition_input: IamOrganizationsPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `policy_binding_id_input`<sup>Optional</sup> <a name="policy_binding_id_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyBindingIdInput"></a>

```python
policy_binding_id_input: str
```

- *Type:* str

---

##### `policy_input`<sup>Optional</sup> <a name="policy_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyInput"></a>

```python
policy_input: str
```

- *Type:* str

---

##### `policy_kind_input`<sup>Optional</sup> <a name="policy_kind_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyKindInput"></a>

```python
policy_kind_input: str
```

- *Type:* str

---

##### `target_input`<sup>Optional</sup> <a name="target_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.targetInput"></a>

```python
target_input: IamOrganizationsPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | IamOrganizationsPolicyBindingTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policy"></a>

```python
policy: str
```

- *Type:* str

---

##### `policy_binding_id`<sup>Required</sup> <a name="policy_binding_id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyBindingId"></a>

```python
policy_binding_id: str
```

- *Type:* str

---

##### `policy_kind`<sup>Required</sup> <a name="policy_kind" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.policyKind"></a>

```python
policy_kind: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamOrganizationsPolicyBindingCondition <a name="IamOrganizationsPolicyBindingCondition" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_organizations_policy_binding

iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.description">description</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.location">location</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.title">title</a></code> | <code>str</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.description"></a>

```python
description: str
```

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#description IamOrganizationsPolicyBinding#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#expression IamOrganizationsPolicyBinding#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.location"></a>

```python
location: str
```

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#location IamOrganizationsPolicyBinding#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition.property.title"></a>

```python
title: str
```

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#title IamOrganizationsPolicyBinding#title}

---

### IamOrganizationsPolicyBindingConfig <a name="IamOrganizationsPolicyBindingConfig" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_organizations_policy_binding

iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  location: str,
  organization: str,
  policy: str,
  policy_binding_id: str,
  target: IamOrganizationsPolicyBindingTarget,
  annotations: typing.Mapping[str] = None,
  condition: IamOrganizationsPolicyBindingCondition = None,
  display_name: str = None,
  id: str = None,
  policy_kind: str = None,
  timeouts: IamOrganizationsPolicyBindingTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.location">location</a></code> | <code>str</code> | The location of the Policy Binding. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.organization">organization</a></code> | <code>str</code> | The parent organization of the Policy Binding. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policy">policy</a></code> | <code>str</code> | Required. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policyBindingId">policy_binding_id</a></code> | <code>str</code> | The Policy Binding ID. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.target">target</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a></code> | target block. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.displayName">display_name</a></code> | <code>str</code> | Optional. The description of the policy binding. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#id IamOrganizationsPolicyBinding#id}. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policyKind">policy_kind</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#location IamOrganizationsPolicyBinding#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The parent organization of the Policy Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#organization IamOrganizationsPolicyBinding#organization}

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policy"></a>

```python
policy: str
```

- *Type:* str

Required.

Immutable. The resource name of the policy to be bound. The binding parent and policy must belong to the same Organization (or Project).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#policy IamOrganizationsPolicyBinding#policy}

---

##### `policy_binding_id`<sup>Required</sup> <a name="policy_binding_id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policyBindingId"></a>

```python
policy_binding_id: str
```

- *Type:* str

The Policy Binding ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#policy_binding_id IamOrganizationsPolicyBinding#policy_binding_id}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.target"></a>

```python
target: IamOrganizationsPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#target IamOrganizationsPolicyBinding#target}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#annotations IamOrganizationsPolicyBinding#annotations}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.condition"></a>

```python
condition: IamOrganizationsPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#condition IamOrganizationsPolicyBinding#condition}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Optional. The description of the policy binding. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#display_name IamOrganizationsPolicyBinding#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#id IamOrganizationsPolicyBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policy_kind`<sup>Optional</sup> <a name="policy_kind" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.policyKind"></a>

```python
policy_kind: str
```

- *Type:* str

Immutable.

The kind of the policy to attach in this binding. This
field must be one of the following:  - Left empty (will be automatically set
to the policy kind) - The input policy kind   Possible values:  POLICY_KIND_UNSPECIFIED PRINCIPAL_ACCESS_BOUNDARY ACCESS

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#policy_kind IamOrganizationsPolicyBinding#policy_kind}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConfig.property.timeouts"></a>

```python
timeouts: IamOrganizationsPolicyBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#timeouts IamOrganizationsPolicyBinding#timeouts}

---

### IamOrganizationsPolicyBindingTarget <a name="IamOrganizationsPolicyBindingTarget" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_organizations_policy_binding

iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget(
  principal_set: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget.property.principalSet">principal_set</a></code> | <code>str</code> | Required. |

---

##### `principal_set`<sup>Optional</sup> <a name="principal_set" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget.property.principalSet"></a>

```python
principal_set: str
```

- *Type:* str

Required.

Immutable. Full Resource Name of the principal set used for principal access boundary policy bindings.
Examples for each one of the following supported principal set types:

* Organization '//cloudresourcemanager.googleapis.com/organizations/ORGANIZATION_ID'
* Workforce Identity: '//iam.googleapis.com/locations/global/workforcePools/WORKFORCE_POOL_ID'
* Workspace Identity: '//iam.googleapis.com/locations/global/workspace/WORKSPACE_ID'
  It must be parent by the policy binding's parent (the organization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#principal_set IamOrganizationsPolicyBinding#principal_set}

---

### IamOrganizationsPolicyBindingTimeouts <a name="IamOrganizationsPolicyBindingTimeouts" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_organizations_policy_binding

iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#create IamOrganizationsPolicyBinding#create}. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#delete IamOrganizationsPolicyBinding#delete}. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#update IamOrganizationsPolicyBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#create IamOrganizationsPolicyBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#delete IamOrganizationsPolicyBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/iam_organizations_policy_binding#update IamOrganizationsPolicyBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamOrganizationsPolicyBindingConditionOutputReference <a name="IamOrganizationsPolicyBindingConditionOutputReference" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_organizations_policy_binding

iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingConditionOutputReference.property.internalValue"></a>

```python
internal_value: IamOrganizationsPolicyBindingCondition
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingCondition">IamOrganizationsPolicyBindingCondition</a>

---


### IamOrganizationsPolicyBindingTargetOutputReference <a name="IamOrganizationsPolicyBindingTargetOutputReference" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_organizations_policy_binding

iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.resetPrincipalSet">reset_principal_set</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_principal_set` <a name="reset_principal_set" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.resetPrincipalSet"></a>

```python
def reset_principal_set() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.principalSetInput">principal_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.principalSet">principal_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `principal_set_input`<sup>Optional</sup> <a name="principal_set_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.principalSetInput"></a>

```python
principal_set_input: str
```

- *Type:* str

---

##### `principal_set`<sup>Required</sup> <a name="principal_set" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.principalSet"></a>

```python
principal_set: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTargetOutputReference.property.internalValue"></a>

```python
internal_value: IamOrganizationsPolicyBindingTarget
```

- *Type:* <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTarget">IamOrganizationsPolicyBindingTarget</a>

---


### IamOrganizationsPolicyBindingTimeoutsOutputReference <a name="IamOrganizationsPolicyBindingTimeoutsOutputReference" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_organizations_policy_binding

iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | IamOrganizationsPolicyBindingTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.iamOrganizationsPolicyBinding.IamOrganizationsPolicyBindingTimeouts">IamOrganizationsPolicyBindingTimeouts</a>

---



