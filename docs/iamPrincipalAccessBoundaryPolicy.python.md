# `iamPrincipalAccessBoundaryPolicy` Submodule <a name="`iamPrincipalAccessBoundaryPolicy` Submodule" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamPrincipalAccessBoundaryPolicy <a name="IamPrincipalAccessBoundaryPolicy" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy google_iam_principal_access_boundary_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_principal_access_boundary_policy

iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy(
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
  organization: str,
  principal_access_boundary_policy_id: str,
  annotations: typing.Mapping[str] = None,
  details: IamPrincipalAccessBoundaryPolicyDetails = None,
  display_name: str = None,
  id: str = None,
  timeouts: IamPrincipalAccessBoundaryPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.location">location</a></code> | <code>str</code> | The location the principal access boundary policy is in. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.organization">organization</a></code> | <code>str</code> | The parent organization of the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.principalAccessBoundaryPolicyId">principal_access_boundary_policy_id</a></code> | <code>str</code> | The ID to use to create the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.details">details</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The description of the principal access boundary policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#id IamPrincipalAccessBoundaryPolicy#id}. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.location"></a>

- *Type:* str

The location the principal access boundary policy is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#location IamPrincipalAccessBoundaryPolicy#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.organization"></a>

- *Type:* str

The parent organization of the principal access boundary policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#organization IamPrincipalAccessBoundaryPolicy#organization}

---

##### `principal_access_boundary_policy_id`<sup>Required</sup> <a name="principal_access_boundary_policy_id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.principalAccessBoundaryPolicyId"></a>

- *Type:* str

The ID to use to create the principal access boundary policy.

This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, hyphens, or dots. Pattern, /a-z{2,62}/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#principal_access_boundary_policy_id IamPrincipalAccessBoundaryPolicy#principal_access_boundary_policy_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#annotations IamPrincipalAccessBoundaryPolicy#annotations}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.details"></a>

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#details IamPrincipalAccessBoundaryPolicy#details}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

The description of the principal access boundary policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#display_name IamPrincipalAccessBoundaryPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#id IamPrincipalAccessBoundaryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#timeouts IamPrincipalAccessBoundaryPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putDetails">put_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetAnnotations">reset_annotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetDetails">reset_details</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_details` <a name="put_details" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putDetails"></a>

```python
def put_details(
  rules: typing.Union[IResolvable, typing.List[IamPrincipalAccessBoundaryPolicyDetailsRules]],
  enforcement_version: str = None
) -> None
```

###### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putDetails.parameter.rules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#rules IamPrincipalAccessBoundaryPolicy#rules}

---

###### `enforcement_version`<sup>Optional</sup> <a name="enforcement_version" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putDetails.parameter.enforcementVersion"></a>

- *Type:* str

The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#enforcement_version IamPrincipalAccessBoundaryPolicy#enforcement_version}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#create IamPrincipalAccessBoundaryPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#delete IamPrincipalAccessBoundaryPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#update IamPrincipalAccessBoundaryPolicy#update}.

---

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetAnnotations"></a>

```python
def reset_annotations() -> None
```

##### `reset_details` <a name="reset_details" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetDetails"></a>

```python
def reset_details() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a IamPrincipalAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import iam_principal_access_boundary_policy

iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import iam_principal_access_boundary_policy

iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import iam_principal_access_boundary_policy

iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import iam_principal_access_boundary_policy

iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a IamPrincipalAccessBoundaryPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the IamPrincipalAccessBoundaryPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing IamPrincipalAccessBoundaryPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamPrincipalAccessBoundaryPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.details">details</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference">IamPrincipalAccessBoundaryPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.effectiveAnnotations">effective_annotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference">IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.detailsInput">details_input</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyIdInput">principal_access_boundary_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyId">principal_access_boundary_policy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.details"></a>

```python
details: IamPrincipalAccessBoundaryPolicyDetailsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference">IamPrincipalAccessBoundaryPolicyDetailsOutputReference</a>

---

##### `effective_annotations`<sup>Required</sup> <a name="effective_annotations" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.effectiveAnnotations"></a>

```python
effective_annotations: StringMap
```

- *Type:* cdktf.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.timeouts"></a>

```python
timeouts: IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference">IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `details_input`<sup>Optional</sup> <a name="details_input" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.detailsInput"></a>

```python
details_input: IamPrincipalAccessBoundaryPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `principal_access_boundary_policy_id_input`<sup>Optional</sup> <a name="principal_access_boundary_policy_id_input" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyIdInput"></a>

```python
principal_access_boundary_policy_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, IamPrincipalAccessBoundaryPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a>]

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `principal_access_boundary_policy_id`<sup>Required</sup> <a name="principal_access_boundary_policy_id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.principalAccessBoundaryPolicyId"></a>

```python
principal_access_boundary_policy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IamPrincipalAccessBoundaryPolicyConfig <a name="IamPrincipalAccessBoundaryPolicyConfig" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_principal_access_boundary_policy

iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  organization: str,
  principal_access_boundary_policy_id: str,
  annotations: typing.Mapping[str] = None,
  details: IamPrincipalAccessBoundaryPolicyDetails = None,
  display_name: str = None,
  id: str = None,
  timeouts: IamPrincipalAccessBoundaryPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.location">location</a></code> | <code>str</code> | The location the principal access boundary policy is in. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.organization">organization</a></code> | <code>str</code> | The parent organization of the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.principalAccessBoundaryPolicyId">principal_access_boundary_policy_id</a></code> | <code>str</code> | The ID to use to create the principal access boundary policy. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.details">details</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a></code> | details block. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | The description of the principal access boundary policy. Must be less than or equal to 63 characters. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#id IamPrincipalAccessBoundaryPolicy#id}. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location the principal access boundary policy is in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#location IamPrincipalAccessBoundaryPolicy#location}

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

The parent organization of the principal access boundary policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#organization IamPrincipalAccessBoundaryPolicy#organization}

---

##### `principal_access_boundary_policy_id`<sup>Required</sup> <a name="principal_access_boundary_policy_id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.principalAccessBoundaryPolicyId"></a>

```python
principal_access_boundary_policy_id: str
```

- *Type:* str

The ID to use to create the principal access boundary policy.

This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, hyphens, or dots. Pattern, /a-z{2,62}/.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#principal_access_boundary_policy_id IamPrincipalAccessBoundaryPolicy#principal_access_boundary_policy_id}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

User defined annotations. See https://google.aip.dev/148#annotations for more details such as format and size limitations.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#annotations IamPrincipalAccessBoundaryPolicy#annotations}

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.details"></a>

```python
details: IamPrincipalAccessBoundaryPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a>

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#details IamPrincipalAccessBoundaryPolicy#details}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The description of the principal access boundary policy. Must be less than or equal to 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#display_name IamPrincipalAccessBoundaryPolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#id IamPrincipalAccessBoundaryPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyConfig.property.timeouts"></a>

```python
timeouts: IamPrincipalAccessBoundaryPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#timeouts IamPrincipalAccessBoundaryPolicy#timeouts}

---

### IamPrincipalAccessBoundaryPolicyDetails <a name="IamPrincipalAccessBoundaryPolicyDetails" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_principal_access_boundary_policy

iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails(
  rules: typing.Union[IResolvable, typing.List[IamPrincipalAccessBoundaryPolicyDetailsRules]],
  enforcement_version: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.property.rules">rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>]]</code> | rules block. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.property.enforcementVersion">enforcement_version</a></code> | <code>str</code> | The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released. |

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.property.rules"></a>

```python
rules: typing.Union[IResolvable, typing.List[IamPrincipalAccessBoundaryPolicyDetailsRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>]]

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#rules IamPrincipalAccessBoundaryPolicy#rules}

---

##### `enforcement_version`<sup>Optional</sup> <a name="enforcement_version" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails.property.enforcementVersion"></a>

```python
enforcement_version: str
```

- *Type:* str

The version number that indicates which Google Cloud services are included in the enforcement (e.g. \"latest\", \"1\", ...). If empty, the PAB policy version will be set to the current latest version, and this version won't get updated when new versions are released.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#enforcement_version IamPrincipalAccessBoundaryPolicy#enforcement_version}

---

### IamPrincipalAccessBoundaryPolicyDetailsRules <a name="IamPrincipalAccessBoundaryPolicyDetailsRules" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_principal_access_boundary_policy

iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules(
  effect: str,
  resources: typing.List[str],
  description: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.effect">effect</a></code> | <code>str</code> | The access relationship of principals to the resources in this rule. Possible values: ALLOW. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.resources">resources</a></code> | <code>typing.List[str]</code> | A list of Cloud Resource Manager resources. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.description">description</a></code> | <code>str</code> | The description of the principal access boundary policy rule. Must be less than or equal to 256 characters. |

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.effect"></a>

```python
effect: str
```

- *Type:* str

The access relationship of principals to the resources in this rule. Possible values: ALLOW.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#effect IamPrincipalAccessBoundaryPolicy#effect}

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

A list of Cloud Resource Manager resources.

The resource
and all the descendants are included. The number of resources in a policy
is limited to 500 across all rules.
The following resource types are supported:

* Organizations, such as '//cloudresourcemanager.googleapis.com/organizations/123'.
* Folders, such as '//cloudresourcemanager.googleapis.com/folders/123'.
* Projects, such as '//cloudresourcemanager.googleapis.com/projects/123'
  or '//cloudresourcemanager.googleapis.com/projects/my-project-id'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#resources IamPrincipalAccessBoundaryPolicy#resources}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules.property.description"></a>

```python
description: str
```

- *Type:* str

The description of the principal access boundary policy rule. Must be less than or equal to 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#description IamPrincipalAccessBoundaryPolicy#description}

---

### IamPrincipalAccessBoundaryPolicyTimeouts <a name="IamPrincipalAccessBoundaryPolicyTimeouts" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_principal_access_boundary_policy

iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#create IamPrincipalAccessBoundaryPolicy#create}. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#delete IamPrincipalAccessBoundaryPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#update IamPrincipalAccessBoundaryPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#create IamPrincipalAccessBoundaryPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#delete IamPrincipalAccessBoundaryPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.28.0/docs/resources/iam_principal_access_boundary_policy#update IamPrincipalAccessBoundaryPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IamPrincipalAccessBoundaryPolicyDetailsOutputReference <a name="IamPrincipalAccessBoundaryPolicyDetailsOutputReference" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_principal_access_boundary_policy

iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resetEnforcementVersion">reset_enforcement_version</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules"></a>

```python
def put_rules(
  value: typing.Union[IResolvable, typing.List[IamPrincipalAccessBoundaryPolicyDetailsRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.putRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>]]

---

##### `reset_enforcement_version` <a name="reset_enforcement_version" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.resetEnforcementVersion"></a>

```python
def reset_enforcement_version() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList">IamPrincipalAccessBoundaryPolicyDetailsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersionInput">enforcement_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rulesInput">rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersion">enforcement_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rules"></a>

```python
rules: IamPrincipalAccessBoundaryPolicyDetailsRulesList
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList">IamPrincipalAccessBoundaryPolicyDetailsRulesList</a>

---

##### `enforcement_version_input`<sup>Optional</sup> <a name="enforcement_version_input" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersionInput"></a>

```python
enforcement_version_input: str
```

- *Type:* str

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.rulesInput"></a>

```python
rules_input: typing.Union[IResolvable, typing.List[IamPrincipalAccessBoundaryPolicyDetailsRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>]]

---

##### `enforcement_version`<sup>Required</sup> <a name="enforcement_version" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.enforcementVersion"></a>

```python
enforcement_version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsOutputReference.property.internalValue"></a>

```python
internal_value: IamPrincipalAccessBoundaryPolicyDetails
```

- *Type:* <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetails">IamPrincipalAccessBoundaryPolicyDetails</a>

---


### IamPrincipalAccessBoundaryPolicyDetailsRulesList <a name="IamPrincipalAccessBoundaryPolicyDetailsRulesList" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_principal_access_boundary_policy

iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[IamPrincipalAccessBoundaryPolicyDetailsRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>]]

---


### IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference <a name="IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_principal_access_boundary_policy

iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resetDescription">reset_description</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effectInput">effect_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resourcesInput">resources_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resources">resources</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `effect_input`<sup>Optional</sup> <a name="effect_input" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effectInput"></a>

```python
effect_input: str
```

- *Type:* str

---

##### `resources_input`<sup>Optional</sup> <a name="resources_input" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resourcesInput"></a>

```python
resources_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.resources"></a>

```python
resources: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IamPrincipalAccessBoundaryPolicyDetailsRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyDetailsRules">IamPrincipalAccessBoundaryPolicyDetailsRules</a>]

---


### IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference <a name="IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import iam_principal_access_boundary_policy

iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, IamPrincipalAccessBoundaryPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.iamPrincipalAccessBoundaryPolicy.IamPrincipalAccessBoundaryPolicyTimeouts">IamPrincipalAccessBoundaryPolicyTimeouts</a>]

---



