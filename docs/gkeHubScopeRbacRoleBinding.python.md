# `gkeHubScopeRbacRoleBinding` Submodule <a name="`gkeHubScopeRbacRoleBinding` Submodule" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GkeHubScopeRbacRoleBinding <a name="GkeHubScopeRbacRoleBinding" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding google_gke_hub_scope_rbac_role_binding}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_scope_rbac_role_binding

gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role: GkeHubScopeRbacRoleBindingRole,
  scope_id: str,
  scope_rbac_role_binding_id: str,
  group: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GkeHubScopeRbacRoleBindingTimeouts = None,
  user: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.role">role</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a></code> | role block. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.scopeId">scope_id</a></code> | <code>str</code> | Id of the scope. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.scopeRbacRoleBindingId">scope_rbac_role_binding_id</a></code> | <code>str</code> | The client-provided identifier of the RBAC Role Binding. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.group">group</a></code> | <code>str</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#id GkeHubScopeRbacRoleBinding#id}. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for this ScopeRBACRoleBinding. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#project GkeHubScopeRbacRoleBinding#project}. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.user">user</a></code> | <code>str</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.role"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a>

role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#role GkeHubScopeRbacRoleBinding#role}

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.scopeId"></a>

- *Type:* str

Id of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#scope_id GkeHubScopeRbacRoleBinding#scope_id}

---

##### `scope_rbac_role_binding_id`<sup>Required</sup> <a name="scope_rbac_role_binding_id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.scopeRbacRoleBindingId"></a>

- *Type:* str

The client-provided identifier of the RBAC Role Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#scope_rbac_role_binding_id GkeHubScopeRbacRoleBinding#scope_rbac_role_binding_id}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.group"></a>

- *Type:* str

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
group is the group, as seen by the kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#group GkeHubScopeRbacRoleBinding#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#id GkeHubScopeRbacRoleBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Labels for this ScopeRBACRoleBinding.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#labels GkeHubScopeRbacRoleBinding#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#project GkeHubScopeRbacRoleBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#timeouts GkeHubScopeRbacRoleBinding#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.Initializer.parameter.user"></a>

- *Type:* str

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#user GkeHubScopeRbacRoleBinding#user}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putRole">put_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetGroup">reset_group</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetUser">reset_user</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_role` <a name="put_role" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putRole"></a>

```python
def put_role(
  predefined_role: str = None
) -> None
```

###### `predefined_role`<sup>Optional</sup> <a name="predefined_role" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putRole.parameter.predefinedRole"></a>

- *Type:* str

PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#predefined_role GkeHubScopeRbacRoleBinding#predefined_role}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#create GkeHubScopeRbacRoleBinding#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#delete GkeHubScopeRbacRoleBinding#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#update GkeHubScopeRbacRoleBinding#update}.

---

##### `reset_group` <a name="reset_group" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetGroup"></a>

```python
def reset_group() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user` <a name="reset_user" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.resetUser"></a>

```python
def reset_user() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GkeHubScopeRbacRoleBinding resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_scope_rbac_role_binding

gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_scope_rbac_role_binding

gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_scope_rbac_role_binding

gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_scope_rbac_role_binding

gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GkeHubScopeRbacRoleBinding resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GkeHubScopeRbacRoleBinding to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GkeHubScopeRbacRoleBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GkeHubScopeRbacRoleBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.role">role</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference">GkeHubScopeRbacRoleBindingRoleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.state">state</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList">GkeHubScopeRbacRoleBindingStateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference">GkeHubScopeRbacRoleBindingTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.uid">uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.groupInput">group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.roleInput">role_input</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeIdInput">scope_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingIdInput">scope_rbac_role_binding_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.group">group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeId">scope_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingId">scope_rbac_role_binding_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.user">user</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.role"></a>

```python
role: GkeHubScopeRbacRoleBindingRoleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference">GkeHubScopeRbacRoleBindingRoleOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.state"></a>

```python
state: GkeHubScopeRbacRoleBindingStateList
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList">GkeHubScopeRbacRoleBindingStateList</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.timeouts"></a>

```python
timeouts: GkeHubScopeRbacRoleBindingTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference">GkeHubScopeRbacRoleBindingTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.uid"></a>

```python
uid: str
```

- *Type:* str

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `group_input`<sup>Optional</sup> <a name="group_input" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.groupInput"></a>

```python
group_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.roleInput"></a>

```python
role_input: GkeHubScopeRbacRoleBindingRole
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a>

---

##### `scope_id_input`<sup>Optional</sup> <a name="scope_id_input" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeIdInput"></a>

```python
scope_id_input: str
```

- *Type:* str

---

##### `scope_rbac_role_binding_id_input`<sup>Optional</sup> <a name="scope_rbac_role_binding_id_input" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingIdInput"></a>

```python
scope_rbac_role_binding_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GkeHubScopeRbacRoleBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a>]

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.group"></a>

```python
group: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

---

##### `scope_rbac_role_binding_id`<sup>Required</sup> <a name="scope_rbac_role_binding_id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.scopeRbacRoleBindingId"></a>

```python
scope_rbac_role_binding_id: str
```

- *Type:* str

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.user"></a>

```python
user: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBinding.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GkeHubScopeRbacRoleBindingConfig <a name="GkeHubScopeRbacRoleBindingConfig" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_scope_rbac_role_binding

gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  role: GkeHubScopeRbacRoleBindingRole,
  scope_id: str,
  scope_rbac_role_binding_id: str,
  group: str = None,
  id: str = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  timeouts: GkeHubScopeRbacRoleBindingTimeouts = None,
  user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.role">role</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a></code> | role block. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.scopeId">scope_id</a></code> | <code>str</code> | Id of the scope. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.scopeRbacRoleBindingId">scope_rbac_role_binding_id</a></code> | <code>str</code> | The client-provided identifier of the RBAC Role Binding. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.group">group</a></code> | <code>str</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#id GkeHubScopeRbacRoleBinding#id}. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Labels for this ScopeRBACRoleBinding. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#project GkeHubScopeRbacRoleBinding#project}. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.user">user</a></code> | <code>str</code> | Principal that is be authorized in the cluster (at least of one the oneof is required). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.role"></a>

```python
role: GkeHubScopeRbacRoleBindingRole
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a>

role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#role GkeHubScopeRbacRoleBinding#role}

---

##### `scope_id`<sup>Required</sup> <a name="scope_id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.scopeId"></a>

```python
scope_id: str
```

- *Type:* str

Id of the scope.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#scope_id GkeHubScopeRbacRoleBinding#scope_id}

---

##### `scope_rbac_role_binding_id`<sup>Required</sup> <a name="scope_rbac_role_binding_id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.scopeRbacRoleBindingId"></a>

```python
scope_rbac_role_binding_id: str
```

- *Type:* str

The client-provided identifier of the RBAC Role Binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#scope_rbac_role_binding_id GkeHubScopeRbacRoleBinding#scope_rbac_role_binding_id}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.group"></a>

```python
group: str
```

- *Type:* str

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
group is the group, as seen by the kubernetes cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#group GkeHubScopeRbacRoleBinding#group}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#id GkeHubScopeRbacRoleBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Labels for this ScopeRBACRoleBinding.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#labels GkeHubScopeRbacRoleBinding#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#project GkeHubScopeRbacRoleBinding#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.timeouts"></a>

```python
timeouts: GkeHubScopeRbacRoleBindingTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#timeouts GkeHubScopeRbacRoleBinding#timeouts}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingConfig.property.user"></a>

```python
user: str
```

- *Type:* str

Principal that is be authorized in the cluster (at least of one the oneof is required).

Updating one will unset the other automatically.
user is the name of the user as seen by the kubernetes cluster, example
"alice" or "alice@domain.tld"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#user GkeHubScopeRbacRoleBinding#user}

---

### GkeHubScopeRbacRoleBindingRole <a name="GkeHubScopeRbacRoleBindingRole" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_scope_rbac_role_binding

gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole(
  predefined_role: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole.property.predefinedRole">predefined_role</a></code> | <code>str</code> | PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW"]. |

---

##### `predefined_role`<sup>Optional</sup> <a name="predefined_role" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole.property.predefinedRole"></a>

```python
predefined_role: str
```

- *Type:* str

PredefinedRole is an ENUM representation of the default Kubernetes Roles Possible values: ["UNKNOWN", "ADMIN", "EDIT", "VIEW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#predefined_role GkeHubScopeRbacRoleBinding#predefined_role}

---

### GkeHubScopeRbacRoleBindingState <a name="GkeHubScopeRbacRoleBindingState" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_scope_rbac_role_binding

gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState()
```


### GkeHubScopeRbacRoleBindingTimeouts <a name="GkeHubScopeRbacRoleBindingTimeouts" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_scope_rbac_role_binding

gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#create GkeHubScopeRbacRoleBinding#create}. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#delete GkeHubScopeRbacRoleBinding#delete}. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#update GkeHubScopeRbacRoleBinding#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#create GkeHubScopeRbacRoleBinding#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#delete GkeHubScopeRbacRoleBinding#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.13.0/docs/resources/gke_hub_scope_rbac_role_binding#update GkeHubScopeRbacRoleBinding#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GkeHubScopeRbacRoleBindingRoleOutputReference <a name="GkeHubScopeRbacRoleBindingRoleOutputReference" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_scope_rbac_role_binding

gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resetPredefinedRole">reset_predefined_role</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_predefined_role` <a name="reset_predefined_role" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.resetPredefinedRole"></a>

```python
def reset_predefined_role() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRoleInput">predefined_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRole">predefined_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `predefined_role_input`<sup>Optional</sup> <a name="predefined_role_input" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRoleInput"></a>

```python
predefined_role_input: str
```

- *Type:* str

---

##### `predefined_role`<sup>Required</sup> <a name="predefined_role" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.predefinedRole"></a>

```python
predefined_role: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRoleOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubScopeRbacRoleBindingRole
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingRole">GkeHubScopeRbacRoleBindingRole</a>

---


### GkeHubScopeRbacRoleBindingStateList <a name="GkeHubScopeRbacRoleBindingStateList" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_scope_rbac_role_binding

gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GkeHubScopeRbacRoleBindingStateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GkeHubScopeRbacRoleBindingStateOutputReference <a name="GkeHubScopeRbacRoleBindingStateOutputReference" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_scope_rbac_role_binding

gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState">GkeHubScopeRbacRoleBindingState</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingStateOutputReference.property.internalValue"></a>

```python
internal_value: GkeHubScopeRbacRoleBindingState
```

- *Type:* <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingState">GkeHubScopeRbacRoleBindingState</a>

---


### GkeHubScopeRbacRoleBindingTimeoutsOutputReference <a name="GkeHubScopeRbacRoleBindingTimeoutsOutputReference" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import gke_hub_scope_rbac_role_binding

gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GkeHubScopeRbacRoleBindingTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.gkeHubScopeRbacRoleBinding.GkeHubScopeRbacRoleBindingTimeouts">GkeHubScopeRbacRoleBindingTimeouts</a>]

---



