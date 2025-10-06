# `binaryAuthorizationPolicy` Submodule <a name="`binaryAuthorizationPolicy` Submodule" id="@cdktf/provider-google.binaryAuthorizationPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BinaryAuthorizationPolicy <a name="BinaryAuthorizationPolicy" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy google_binary_authorization_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_policy

binaryAuthorizationPolicy.BinaryAuthorizationPolicy(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_admission_rule: BinaryAuthorizationPolicyDefaultAdmissionRule,
  admission_whitelist_patterns: IResolvable | typing.List[BinaryAuthorizationPolicyAdmissionWhitelistPatterns] = None,
  cluster_admission_rules: IResolvable | typing.List[BinaryAuthorizationPolicyClusterAdmissionRules] = None,
  description: str = None,
  global_policy_evaluation_mode: str = None,
  id: str = None,
  project: str = None,
  timeouts: BinaryAuthorizationPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.defaultAdmissionRule">default_admission_rule</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | default_admission_rule block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.admissionWhitelistPatterns">admission_whitelist_patterns</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]</code> | admission_whitelist_patterns block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.clusterAdmissionRules">cluster_admission_rules</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>]</code> | cluster_admission_rules block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.description">description</a></code> | <code>str</code> | A descriptive comment. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.globalPolicyEvaluationMode">global_policy_evaluation_mode</a></code> | <code>str</code> | Controls the evaluation of a Google-maintained global admission policy for common system-level images. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#id BinaryAuthorizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#project BinaryAuthorizationPolicy#project}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `default_admission_rule`<sup>Required</sup> <a name="default_admission_rule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.defaultAdmissionRule"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a>

default_admission_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#default_admission_rule BinaryAuthorizationPolicy#default_admission_rule}

---

##### `admission_whitelist_patterns`<sup>Optional</sup> <a name="admission_whitelist_patterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.admissionWhitelistPatterns"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]

admission_whitelist_patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#admission_whitelist_patterns BinaryAuthorizationPolicy#admission_whitelist_patterns}

---

##### `cluster_admission_rules`<sup>Optional</sup> <a name="cluster_admission_rules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.clusterAdmissionRules"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>]

cluster_admission_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#cluster_admission_rules BinaryAuthorizationPolicy#cluster_admission_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.description"></a>

- *Type:* str

A descriptive comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#description BinaryAuthorizationPolicy#description}

---

##### `global_policy_evaluation_mode`<sup>Optional</sup> <a name="global_policy_evaluation_mode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.globalPolicyEvaluationMode"></a>

- *Type:* str

Controls the evaluation of a Google-maintained global admission policy for common system-level images.

Images not covered by the global
policy will be subject to the project admission policy. Possible values: ["ENABLE", "DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#global_policy_evaluation_mode BinaryAuthorizationPolicy#global_policy_evaluation_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#id BinaryAuthorizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#project BinaryAuthorizationPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#timeouts BinaryAuthorizationPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putAdmissionWhitelistPatterns">put_admission_whitelist_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putClusterAdmissionRules">put_cluster_admission_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putDefaultAdmissionRule">put_default_admission_rule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetAdmissionWhitelistPatterns">reset_admission_whitelist_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetClusterAdmissionRules">reset_cluster_admission_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetGlobalPolicyEvaluationMode">reset_global_policy_evaluation_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_admission_whitelist_patterns` <a name="put_admission_whitelist_patterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putAdmissionWhitelistPatterns"></a>

```python
def put_admission_whitelist_patterns(
  value: IResolvable | typing.List[BinaryAuthorizationPolicyAdmissionWhitelistPatterns]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putAdmissionWhitelistPatterns.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]

---

##### `put_cluster_admission_rules` <a name="put_cluster_admission_rules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putClusterAdmissionRules"></a>

```python
def put_cluster_admission_rules(
  value: IResolvable | typing.List[BinaryAuthorizationPolicyClusterAdmissionRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putClusterAdmissionRules.parameter.value"></a>

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>]

---

##### `put_default_admission_rule` <a name="put_default_admission_rule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putDefaultAdmissionRule"></a>

```python
def put_default_admission_rule(
  enforcement_mode: str,
  evaluation_mode: str,
  require_attestations_by: typing.List[str] = None
) -> None
```

###### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putDefaultAdmissionRule.parameter.enforcementMode"></a>

- *Type:* str

The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#enforcement_mode BinaryAuthorizationPolicy#enforcement_mode}

---

###### `evaluation_mode`<sup>Required</sup> <a name="evaluation_mode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putDefaultAdmissionRule.parameter.evaluationMode"></a>

- *Type:* str

How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#evaluation_mode BinaryAuthorizationPolicy#evaluation_mode}

---

###### `require_attestations_by`<sup>Optional</sup> <a name="require_attestations_by" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putDefaultAdmissionRule.parameter.requireAttestationsBy"></a>

- *Type:* typing.List[str]

The resource names of the attestors that must attest to a container image.

If the attestor is in a different project from the
policy, it should be specified in the format 'projects/* /attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#require_attestations_by BinaryAuthorizationPolicy#require_attestations_by}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#create BinaryAuthorizationPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#delete BinaryAuthorizationPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#update BinaryAuthorizationPolicy#update}.

---

##### `reset_admission_whitelist_patterns` <a name="reset_admission_whitelist_patterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetAdmissionWhitelistPatterns"></a>

```python
def reset_admission_whitelist_patterns() -> None
```

##### `reset_cluster_admission_rules` <a name="reset_cluster_admission_rules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetClusterAdmissionRules"></a>

```python
def reset_cluster_admission_rules() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_global_policy_evaluation_mode` <a name="reset_global_policy_evaluation_mode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetGlobalPolicyEvaluationMode"></a>

```python
def reset_global_policy_evaluation_mode() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BinaryAuthorizationPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_policy

binaryAuthorizationPolicy.BinaryAuthorizationPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_policy

binaryAuthorizationPolicy.BinaryAuthorizationPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_policy

binaryAuthorizationPolicy.BinaryAuthorizationPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_policy

binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BinaryAuthorizationPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BinaryAuthorizationPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BinaryAuthorizationPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BinaryAuthorizationPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.admissionWhitelistPatterns">admission_whitelist_patterns</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList">BinaryAuthorizationPolicyAdmissionWhitelistPatternsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.clusterAdmissionRules">cluster_admission_rules</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList">BinaryAuthorizationPolicyClusterAdmissionRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.defaultAdmissionRule">default_admission_rule</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference">BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference">BinaryAuthorizationPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.admissionWhitelistPatternsInput">admission_whitelist_patterns_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.clusterAdmissionRulesInput">cluster_admission_rules_input</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.defaultAdmissionRuleInput">default_admission_rule_input</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.globalPolicyEvaluationModeInput">global_policy_evaluation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.globalPolicyEvaluationMode">global_policy_evaluation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `admission_whitelist_patterns`<sup>Required</sup> <a name="admission_whitelist_patterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.admissionWhitelistPatterns"></a>

```python
admission_whitelist_patterns: BinaryAuthorizationPolicyAdmissionWhitelistPatternsList
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList">BinaryAuthorizationPolicyAdmissionWhitelistPatternsList</a>

---

##### `cluster_admission_rules`<sup>Required</sup> <a name="cluster_admission_rules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.clusterAdmissionRules"></a>

```python
cluster_admission_rules: BinaryAuthorizationPolicyClusterAdmissionRulesList
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList">BinaryAuthorizationPolicyClusterAdmissionRulesList</a>

---

##### `default_admission_rule`<sup>Required</sup> <a name="default_admission_rule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.defaultAdmissionRule"></a>

```python
default_admission_rule: BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference">BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.timeouts"></a>

```python
timeouts: BinaryAuthorizationPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference">BinaryAuthorizationPolicyTimeoutsOutputReference</a>

---

##### `admission_whitelist_patterns_input`<sup>Optional</sup> <a name="admission_whitelist_patterns_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.admissionWhitelistPatternsInput"></a>

```python
admission_whitelist_patterns_input: IResolvable | typing.List[BinaryAuthorizationPolicyAdmissionWhitelistPatterns]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]

---

##### `cluster_admission_rules_input`<sup>Optional</sup> <a name="cluster_admission_rules_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.clusterAdmissionRulesInput"></a>

```python
cluster_admission_rules_input: IResolvable | typing.List[BinaryAuthorizationPolicyClusterAdmissionRules]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>]

---

##### `default_admission_rule_input`<sup>Optional</sup> <a name="default_admission_rule_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.defaultAdmissionRuleInput"></a>

```python
default_admission_rule_input: BinaryAuthorizationPolicyDefaultAdmissionRule
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `global_policy_evaluation_mode_input`<sup>Optional</sup> <a name="global_policy_evaluation_mode_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.globalPolicyEvaluationModeInput"></a>

```python
global_policy_evaluation_mode_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | BinaryAuthorizationPolicyTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `global_policy_evaluation_mode`<sup>Required</sup> <a name="global_policy_evaluation_mode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.globalPolicyEvaluationMode"></a>

```python
global_policy_evaluation_mode: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BinaryAuthorizationPolicyAdmissionWhitelistPatterns <a name="BinaryAuthorizationPolicyAdmissionWhitelistPatterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_policy

binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns(
  name_pattern: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns.property.namePattern">name_pattern</a></code> | <code>str</code> | An image name pattern to whitelist, in the form 'registry/path/to/image'. |

---

##### `name_pattern`<sup>Required</sup> <a name="name_pattern" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns.property.namePattern"></a>

```python
name_pattern: str
```

- *Type:* str

An image name pattern to whitelist, in the form 'registry/path/to/image'.

This supports a trailing * as a
wildcard, but this is allowed only in text after the registry/
part.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#name_pattern BinaryAuthorizationPolicy#name_pattern}

---

### BinaryAuthorizationPolicyClusterAdmissionRules <a name="BinaryAuthorizationPolicyClusterAdmissionRules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_policy

binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules(
  cluster: str,
  enforcement_mode: str,
  evaluation_mode: str,
  require_attestations_by: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.cluster">cluster</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#cluster BinaryAuthorizationPolicy#cluster}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.evaluationMode">evaluation_mode</a></code> | <code>str</code> | How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.requireAttestationsBy">require_attestations_by</a></code> | <code>typing.List[str]</code> | The resource names of the attestors that must attest to a container image. |

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#cluster BinaryAuthorizationPolicy#cluster}.

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#enforcement_mode BinaryAuthorizationPolicy#enforcement_mode}

---

##### `evaluation_mode`<sup>Required</sup> <a name="evaluation_mode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.evaluationMode"></a>

```python
evaluation_mode: str
```

- *Type:* str

How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#evaluation_mode BinaryAuthorizationPolicy#evaluation_mode}

---

##### `require_attestations_by`<sup>Optional</sup> <a name="require_attestations_by" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules.property.requireAttestationsBy"></a>

```python
require_attestations_by: typing.List[str]
```

- *Type:* typing.List[str]

The resource names of the attestors that must attest to a container image.

If the attestor is in a different project from the
policy, it should be specified in the format 'projects/* /attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#require_attestations_by BinaryAuthorizationPolicy#require_attestations_by}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### BinaryAuthorizationPolicyConfig <a name="BinaryAuthorizationPolicyConfig" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_policy

binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  default_admission_rule: BinaryAuthorizationPolicyDefaultAdmissionRule,
  admission_whitelist_patterns: IResolvable | typing.List[BinaryAuthorizationPolicyAdmissionWhitelistPatterns] = None,
  cluster_admission_rules: IResolvable | typing.List[BinaryAuthorizationPolicyClusterAdmissionRules] = None,
  description: str = None,
  global_policy_evaluation_mode: str = None,
  id: str = None,
  project: str = None,
  timeouts: BinaryAuthorizationPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.defaultAdmissionRule">default_admission_rule</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | default_admission_rule block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.admissionWhitelistPatterns">admission_whitelist_patterns</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]</code> | admission_whitelist_patterns block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.clusterAdmissionRules">cluster_admission_rules</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>]</code> | cluster_admission_rules block. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.description">description</a></code> | <code>str</code> | A descriptive comment. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.globalPolicyEvaluationMode">global_policy_evaluation_mode</a></code> | <code>str</code> | Controls the evaluation of a Google-maintained global admission policy for common system-level images. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#id BinaryAuthorizationPolicy#id}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#project BinaryAuthorizationPolicy#project}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `default_admission_rule`<sup>Required</sup> <a name="default_admission_rule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.defaultAdmissionRule"></a>

```python
default_admission_rule: BinaryAuthorizationPolicyDefaultAdmissionRule
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a>

default_admission_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#default_admission_rule BinaryAuthorizationPolicy#default_admission_rule}

---

##### `admission_whitelist_patterns`<sup>Optional</sup> <a name="admission_whitelist_patterns" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.admissionWhitelistPatterns"></a>

```python
admission_whitelist_patterns: IResolvable | typing.List[BinaryAuthorizationPolicyAdmissionWhitelistPatterns]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]

admission_whitelist_patterns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#admission_whitelist_patterns BinaryAuthorizationPolicy#admission_whitelist_patterns}

---

##### `cluster_admission_rules`<sup>Optional</sup> <a name="cluster_admission_rules" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.clusterAdmissionRules"></a>

```python
cluster_admission_rules: IResolvable | typing.List[BinaryAuthorizationPolicyClusterAdmissionRules]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>]

cluster_admission_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#cluster_admission_rules BinaryAuthorizationPolicy#cluster_admission_rules}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A descriptive comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#description BinaryAuthorizationPolicy#description}

---

##### `global_policy_evaluation_mode`<sup>Optional</sup> <a name="global_policy_evaluation_mode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.globalPolicyEvaluationMode"></a>

```python
global_policy_evaluation_mode: str
```

- *Type:* str

Controls the evaluation of a Google-maintained global admission policy for common system-level images.

Images not covered by the global
policy will be subject to the project admission policy. Possible values: ["ENABLE", "DISABLE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#global_policy_evaluation_mode BinaryAuthorizationPolicy#global_policy_evaluation_mode}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#id BinaryAuthorizationPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#project BinaryAuthorizationPolicy#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyConfig.property.timeouts"></a>

```python
timeouts: BinaryAuthorizationPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#timeouts BinaryAuthorizationPolicy#timeouts}

---

### BinaryAuthorizationPolicyDefaultAdmissionRule <a name="BinaryAuthorizationPolicyDefaultAdmissionRule" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_policy

binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule(
  enforcement_mode: str,
  evaluation_mode: str,
  require_attestations_by: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"]. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.evaluationMode">evaluation_mode</a></code> | <code>str</code> | How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"]. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.requireAttestationsBy">require_attestations_by</a></code> | <code>typing.List[str]</code> | The resource names of the attestors that must attest to a container image. |

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

The action when a pod creation is denied by the admission rule. Possible values: ["ENFORCED_BLOCK_AND_AUDIT_LOG", "DRYRUN_AUDIT_LOG_ONLY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#enforcement_mode BinaryAuthorizationPolicy#enforcement_mode}

---

##### `evaluation_mode`<sup>Required</sup> <a name="evaluation_mode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.evaluationMode"></a>

```python
evaluation_mode: str
```

- *Type:* str

How this admission rule will be evaluated. Possible values: ["ALWAYS_ALLOW", "REQUIRE_ATTESTATION", "ALWAYS_DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#evaluation_mode BinaryAuthorizationPolicy#evaluation_mode}

---

##### `require_attestations_by`<sup>Optional</sup> <a name="require_attestations_by" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule.property.requireAttestationsBy"></a>

```python
require_attestations_by: typing.List[str]
```

- *Type:* typing.List[str]

The resource names of the attestors that must attest to a container image.

If the attestor is in a different project from the
policy, it should be specified in the format 'projects/* /attestors/*'.
Each attestor must exist before a policy can reference it. To add an
attestor to a policy the principal issuing the policy change
request must be able to read the attestor resource.

Note: this field must be non-empty when the evaluation_mode field
specifies REQUIRE_ATTESTATION, otherwise it must be empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#require_attestations_by BinaryAuthorizationPolicy#require_attestations_by}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### BinaryAuthorizationPolicyTimeouts <a name="BinaryAuthorizationPolicyTimeouts" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_policy

binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#create BinaryAuthorizationPolicy#create}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#delete BinaryAuthorizationPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#update BinaryAuthorizationPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#create BinaryAuthorizationPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#delete BinaryAuthorizationPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/binary_authorization_policy#update BinaryAuthorizationPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BinaryAuthorizationPolicyAdmissionWhitelistPatternsList <a name="BinaryAuthorizationPolicyAdmissionWhitelistPatternsList" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_policy

binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BinaryAuthorizationPolicyAdmissionWhitelistPatterns]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>]

---


### BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference <a name="BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_policy

binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePatternInput">name_pattern_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePattern">name_pattern</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_pattern_input`<sup>Optional</sup> <a name="name_pattern_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePatternInput"></a>

```python
name_pattern_input: str
```

- *Type:* str

---

##### `name_pattern`<sup>Required</sup> <a name="name_pattern" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.namePattern"></a>

```python
name_pattern: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatternsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BinaryAuthorizationPolicyAdmissionWhitelistPatterns
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyAdmissionWhitelistPatterns">BinaryAuthorizationPolicyAdmissionWhitelistPatterns</a>

---


### BinaryAuthorizationPolicyClusterAdmissionRulesList <a name="BinaryAuthorizationPolicyClusterAdmissionRulesList" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_policy

binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[BinaryAuthorizationPolicyClusterAdmissionRules]
```

- *Type:* cdktf.IResolvable | typing.List[<a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>]

---


### BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference <a name="BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_policy

binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resetRequireAttestationsBy">reset_require_attestations_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_require_attestations_by` <a name="reset_require_attestations_by" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.resetRequireAttestationsBy"></a>

```python
def reset_require_attestations_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.clusterInput">cluster_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementModeInput">enforcement_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationModeInput">evaluation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsByInput">require_attestations_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.cluster">cluster</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationMode">evaluation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsBy">require_attestations_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_input`<sup>Optional</sup> <a name="cluster_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.clusterInput"></a>

```python
cluster_input: str
```

- *Type:* str

---

##### `enforcement_mode_input`<sup>Optional</sup> <a name="enforcement_mode_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementModeInput"></a>

```python
enforcement_mode_input: str
```

- *Type:* str

---

##### `evaluation_mode_input`<sup>Optional</sup> <a name="evaluation_mode_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationModeInput"></a>

```python
evaluation_mode_input: str
```

- *Type:* str

---

##### `require_attestations_by_input`<sup>Optional</sup> <a name="require_attestations_by_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsByInput"></a>

```python
require_attestations_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.cluster"></a>

```python
cluster: str
```

- *Type:* str

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

---

##### `evaluation_mode`<sup>Required</sup> <a name="evaluation_mode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.evaluationMode"></a>

```python
evaluation_mode: str
```

- *Type:* str

---

##### `require_attestations_by`<sup>Required</sup> <a name="require_attestations_by" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.requireAttestationsBy"></a>

```python
require_attestations_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BinaryAuthorizationPolicyClusterAdmissionRules
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyClusterAdmissionRules">BinaryAuthorizationPolicyClusterAdmissionRules</a>

---


### BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference <a name="BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_policy

binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resetRequireAttestationsBy">reset_require_attestations_by</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_require_attestations_by` <a name="reset_require_attestations_by" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.resetRequireAttestationsBy"></a>

```python
def reset_require_attestations_by() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementModeInput">enforcement_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationModeInput">evaluation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsByInput">require_attestations_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementMode">enforcement_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationMode">evaluation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsBy">require_attestations_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enforcement_mode_input`<sup>Optional</sup> <a name="enforcement_mode_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementModeInput"></a>

```python
enforcement_mode_input: str
```

- *Type:* str

---

##### `evaluation_mode_input`<sup>Optional</sup> <a name="evaluation_mode_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationModeInput"></a>

```python
evaluation_mode_input: str
```

- *Type:* str

---

##### `require_attestations_by_input`<sup>Optional</sup> <a name="require_attestations_by_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsByInput"></a>

```python
require_attestations_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enforcement_mode`<sup>Required</sup> <a name="enforcement_mode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.enforcementMode"></a>

```python
enforcement_mode: str
```

- *Type:* str

---

##### `evaluation_mode`<sup>Required</sup> <a name="evaluation_mode" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.evaluationMode"></a>

```python
evaluation_mode: str
```

- *Type:* str

---

##### `require_attestations_by`<sup>Required</sup> <a name="require_attestations_by" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.requireAttestationsBy"></a>

```python
require_attestations_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRuleOutputReference.property.internalValue"></a>

```python
internal_value: BinaryAuthorizationPolicyDefaultAdmissionRule
```

- *Type:* <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyDefaultAdmissionRule">BinaryAuthorizationPolicyDefaultAdmissionRule</a>

---


### BinaryAuthorizationPolicyTimeoutsOutputReference <a name="BinaryAuthorizationPolicyTimeoutsOutputReference" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import binary_authorization_policy

binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | BinaryAuthorizationPolicyTimeouts
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.binaryAuthorizationPolicy.BinaryAuthorizationPolicyTimeouts">BinaryAuthorizationPolicyTimeouts</a>

---



