# `bigtableGcPolicy` Submodule <a name="`bigtableGcPolicy` Submodule" id="@cdktf/provider-google.bigtableGcPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BigtableGcPolicy <a name="BigtableGcPolicy" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy google_bigtable_gc_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_gc_policy

bigtableGcPolicy.BigtableGcPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column_family: str,
  instance_name: str,
  table: str,
  deletion_policy: str = None,
  gc_rules: str = None,
  id: str = None,
  max_age: BigtableGcPolicyMaxAge = None,
  max_version: typing.Union[IResolvable, typing.List[BigtableGcPolicyMaxVersion]] = None,
  mode: str = None,
  project: str = None,
  timeouts: BigtableGcPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.columnFamily">column_family</a></code> | <code>str</code> | The name of the column family. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.instanceName">instance_name</a></code> | <code>str</code> | The name of the Bigtable instance. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.table">table</a></code> | <code>str</code> | The name of the table. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | The deletion policy for the GC policy. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.gcRules">gc_rules</a></code> | <code>str</code> | Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version". |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#id BigtableGcPolicy#id}. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.maxAge">max_age</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a></code> | max_age block. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.maxVersion">max_version</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>]]</code> | max_version block. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.mode">mode</a></code> | <code>str</code> | NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column_family`<sup>Required</sup> <a name="column_family" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.columnFamily"></a>

- *Type:* str

The name of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#column_family BigtableGcPolicy#column_family}

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.instanceName"></a>

- *Type:* str

The name of the Bigtable instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#instance_name BigtableGcPolicy#instance_name}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.table"></a>

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#table BigtableGcPolicy#table}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

The deletion policy for the GC policy.

Setting ABANDON allows the resource
to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted
in a replicated instance. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#deletion_policy BigtableGcPolicy#deletion_policy}

---

##### `gc_rules`<sup>Optional</sup> <a name="gc_rules" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.gcRules"></a>

- *Type:* str

Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#gc_rules BigtableGcPolicy#gc_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#id BigtableGcPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.maxAge"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a>

max_age block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#max_age BigtableGcPolicy#max_age}

---

##### `max_version`<sup>Optional</sup> <a name="max_version" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.maxVersion"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>]]

max_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#max_version BigtableGcPolicy#max_version}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.mode"></a>

- *Type:* str

NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources.

This field may be deprecated in the future. If multiple policies are set, you should choose between UNION OR INTERSECTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#mode BigtableGcPolicy#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.project"></a>

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#project BigtableGcPolicy#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#timeouts BigtableGcPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxAge">put_max_age</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxVersion">put_max_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetGcRules">reset_gc_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMaxAge">reset_max_age</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMaxVersion">reset_max_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMode">reset_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_max_age` <a name="put_max_age" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxAge"></a>

```python
def put_max_age(
  days: typing.Union[int, float] = None,
  duration: str = None
) -> None
```

###### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxAge.parameter.days"></a>

- *Type:* typing.Union[int, float]

Number of days before applying GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#days BigtableGcPolicy#days}

---

###### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxAge.parameter.duration"></a>

- *Type:* str

Duration before applying GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#duration BigtableGcPolicy#duration}

---

##### `put_max_version` <a name="put_max_version" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxVersion"></a>

```python
def put_max_version(
  value: typing.Union[IResolvable, typing.List[BigtableGcPolicyMaxVersion]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putMaxVersion.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#create BigtableGcPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#delete BigtableGcPolicy#delete}.

---

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_gc_rules` <a name="reset_gc_rules" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetGcRules"></a>

```python
def reset_gc_rules() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_age` <a name="reset_max_age" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMaxAge"></a>

```python
def reset_max_age() -> None
```

##### `reset_max_version` <a name="reset_max_version" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMaxVersion"></a>

```python
def reset_max_version() -> None
```

##### `reset_mode` <a name="reset_mode" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetMode"></a>

```python
def reset_mode() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a BigtableGcPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import bigtable_gc_policy

bigtableGcPolicy.BigtableGcPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import bigtable_gc_policy

bigtableGcPolicy.BigtableGcPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import bigtable_gc_policy

bigtableGcPolicy.BigtableGcPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import bigtable_gc_policy

bigtableGcPolicy.BigtableGcPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a BigtableGcPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the BigtableGcPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing BigtableGcPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the BigtableGcPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxAge">max_age</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference">BigtableGcPolicyMaxAgeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxVersion">max_version</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList">BigtableGcPolicyMaxVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference">BigtableGcPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.columnFamilyInput">column_family_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.gcRulesInput">gc_rules_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxAgeInput">max_age_input</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxVersionInput">max_version_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.tableInput">table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.columnFamily">column_family</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.gcRules">gc_rules</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.table">table</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `max_age`<sup>Required</sup> <a name="max_age" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxAge"></a>

```python
max_age: BigtableGcPolicyMaxAgeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference">BigtableGcPolicyMaxAgeOutputReference</a>

---

##### `max_version`<sup>Required</sup> <a name="max_version" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxVersion"></a>

```python
max_version: BigtableGcPolicyMaxVersionList
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList">BigtableGcPolicyMaxVersionList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.timeouts"></a>

```python
timeouts: BigtableGcPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference">BigtableGcPolicyTimeoutsOutputReference</a>

---

##### `column_family_input`<sup>Optional</sup> <a name="column_family_input" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.columnFamilyInput"></a>

```python
column_family_input: str
```

- *Type:* str

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `gc_rules_input`<sup>Optional</sup> <a name="gc_rules_input" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.gcRulesInput"></a>

```python
gc_rules_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `max_age_input`<sup>Optional</sup> <a name="max_age_input" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxAgeInput"></a>

```python
max_age_input: BigtableGcPolicyMaxAge
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a>

---

##### `max_version_input`<sup>Optional</sup> <a name="max_version_input" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.maxVersionInput"></a>

```python
max_version_input: typing.Union[IResolvable, typing.List[BigtableGcPolicyMaxVersion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>]]

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `table_input`<sup>Optional</sup> <a name="table_input" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.tableInput"></a>

```python
table_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, BigtableGcPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a>]

---

##### `column_family`<sup>Required</sup> <a name="column_family" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.columnFamily"></a>

```python
column_family: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `gc_rules`<sup>Required</sup> <a name="gc_rules" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.gcRules"></a>

```python
gc_rules: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.table"></a>

```python
table: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### BigtableGcPolicyConfig <a name="BigtableGcPolicyConfig" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_gc_policy

bigtableGcPolicy.BigtableGcPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  column_family: str,
  instance_name: str,
  table: str,
  deletion_policy: str = None,
  gc_rules: str = None,
  id: str = None,
  max_age: BigtableGcPolicyMaxAge = None,
  max_version: typing.Union[IResolvable, typing.List[BigtableGcPolicyMaxVersion]] = None,
  mode: str = None,
  project: str = None,
  timeouts: BigtableGcPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.columnFamily">column_family</a></code> | <code>str</code> | The name of the column family. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.instanceName">instance_name</a></code> | <code>str</code> | The name of the Bigtable instance. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.table">table</a></code> | <code>str</code> | The name of the table. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | The deletion policy for the GC policy. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.gcRules">gc_rules</a></code> | <code>str</code> | Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version". |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#id BigtableGcPolicy#id}. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.maxAge">max_age</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a></code> | max_age block. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.maxVersion">max_version</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>]]</code> | max_version block. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.mode">mode</a></code> | <code>str</code> | NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.project">project</a></code> | <code>str</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `column_family`<sup>Required</sup> <a name="column_family" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.columnFamily"></a>

```python
column_family: str
```

- *Type:* str

The name of the column family.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#column_family BigtableGcPolicy#column_family}

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

The name of the Bigtable instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#instance_name BigtableGcPolicy#instance_name}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.table"></a>

```python
table: str
```

- *Type:* str

The name of the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#table BigtableGcPolicy#table}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

The deletion policy for the GC policy.

Setting ABANDON allows the resource
to be abandoned rather than deleted. This is useful for GC policy as it cannot be deleted
in a replicated instance. Possible values are: "ABANDON".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#deletion_policy BigtableGcPolicy#deletion_policy}

---

##### `gc_rules`<sup>Optional</sup> <a name="gc_rules" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.gcRules"></a>

```python
gc_rules: str
```

- *Type:* str

Serialized JSON string for garbage collection policy. Conflicts with "mode", "max_age" and "max_version".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#gc_rules BigtableGcPolicy#gc_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#id BigtableGcPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.maxAge"></a>

```python
max_age: BigtableGcPolicyMaxAge
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a>

max_age block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#max_age BigtableGcPolicy#max_age}

---

##### `max_version`<sup>Optional</sup> <a name="max_version" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.maxVersion"></a>

```python
max_version: typing.Union[IResolvable, typing.List[BigtableGcPolicyMaxVersion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>]]

max_version block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#max_version BigtableGcPolicy#max_version}

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.mode"></a>

```python
mode: str
```

- *Type:* str

NOTE: 'gc_rules' is more flexible, and should be preferred over this field for new resources.

This field may be deprecated in the future. If multiple policies are set, you should choose between UNION OR INTERSECTION.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#mode BigtableGcPolicy#mode}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#project BigtableGcPolicy#project}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyConfig.property.timeouts"></a>

```python
timeouts: BigtableGcPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#timeouts BigtableGcPolicy#timeouts}

---

### BigtableGcPolicyMaxAge <a name="BigtableGcPolicyMaxAge" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_gc_policy

bigtableGcPolicy.BigtableGcPolicyMaxAge(
  days: typing.Union[int, float] = None,
  duration: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.property.days">days</a></code> | <code>typing.Union[int, float]</code> | Number of days before applying GC policy. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.property.duration">duration</a></code> | <code>str</code> | Duration before applying GC policy. |

---

##### `days`<sup>Optional</sup> <a name="days" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of days before applying GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#days BigtableGcPolicy#days}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge.property.duration"></a>

```python
duration: str
```

- *Type:* str

Duration before applying GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#duration BigtableGcPolicy#duration}

---

### BigtableGcPolicyMaxVersion <a name="BigtableGcPolicyMaxVersion" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_gc_policy

bigtableGcPolicy.BigtableGcPolicyMaxVersion(
  number: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion.property.number">number</a></code> | <code>typing.Union[int, float]</code> | Number of version before applying the GC policy. |

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of version before applying the GC policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#number BigtableGcPolicy#number}

---

### BigtableGcPolicyTimeouts <a name="BigtableGcPolicyTimeouts" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_gc_policy

bigtableGcPolicy.BigtableGcPolicyTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#create BigtableGcPolicy#create}. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#delete BigtableGcPolicy#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#create BigtableGcPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.16.0/docs/resources/bigtable_gc_policy#delete BigtableGcPolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### BigtableGcPolicyMaxAgeOutputReference <a name="BigtableGcPolicyMaxAgeOutputReference" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_gc_policy

bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resetDays">reset_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resetDuration">reset_duration</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_days` <a name="reset_days" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resetDays"></a>

```python
def reset_days() -> None
```

##### `reset_duration` <a name="reset_duration" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.resetDuration"></a>

```python
def reset_duration() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.daysInput">days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.durationInput">duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.days">days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.duration">duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_input`<sup>Optional</sup> <a name="days_input" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.daysInput"></a>

```python
days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration_input`<sup>Optional</sup> <a name="duration_input" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.durationInput"></a>

```python
duration_input: str
```

- *Type:* str

---

##### `days`<sup>Required</sup> <a name="days" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.days"></a>

```python
days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.duration"></a>

```python
duration: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAgeOutputReference.property.internalValue"></a>

```python
internal_value: BigtableGcPolicyMaxAge
```

- *Type:* <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxAge">BigtableGcPolicyMaxAge</a>

---


### BigtableGcPolicyMaxVersionList <a name="BigtableGcPolicyMaxVersionList" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_gc_policy

bigtableGcPolicy.BigtableGcPolicyMaxVersionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> BigtableGcPolicyMaxVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[BigtableGcPolicyMaxVersion]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>]]

---


### BigtableGcPolicyMaxVersionOutputReference <a name="BigtableGcPolicyMaxVersionOutputReference" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_gc_policy

bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.numberInput">number_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.number">number</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `number_input`<sup>Optional</sup> <a name="number_input" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.numberInput"></a>

```python
number_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number`<sup>Required</sup> <a name="number" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.number"></a>

```python
number: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersionOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigtableGcPolicyMaxVersion]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyMaxVersion">BigtableGcPolicyMaxVersion</a>]

---


### BigtableGcPolicyTimeoutsOutputReference <a name="BigtableGcPolicyTimeoutsOutputReference" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import bigtable_gc_policy

bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, BigtableGcPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.bigtableGcPolicy.BigtableGcPolicyTimeouts">BigtableGcPolicyTimeouts</a>]

---



