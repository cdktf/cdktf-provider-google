# `computeResourcePolicy` Submodule <a name="`computeResourcePolicy` Submodule" id="@cdktf/provider-google.computeResourcePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeResourcePolicy <a name="ComputeResourcePolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy google_compute_resource_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.NewComputeResourcePolicy(scope Construct, id *string, config ComputeResourcePolicyConfig) ComputeResourcePolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig">ComputeResourcePolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig">ComputeResourcePolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.putGroupPlacementPolicy">PutGroupPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.putInstanceSchedulePolicy">PutInstanceSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.putSnapshotSchedulePolicy">PutSnapshotSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetGroupPlacementPolicy">ResetGroupPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetInstanceSchedulePolicy">ResetInstanceSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetSnapshotSchedulePolicy">ResetSnapshotSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutGroupPlacementPolicy` <a name="PutGroupPlacementPolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.putGroupPlacementPolicy"></a>

```go
func PutGroupPlacementPolicy(value ComputeResourcePolicyGroupPlacementPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.putGroupPlacementPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicy">ComputeResourcePolicyGroupPlacementPolicy</a>

---

##### `PutInstanceSchedulePolicy` <a name="PutInstanceSchedulePolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.putInstanceSchedulePolicy"></a>

```go
func PutInstanceSchedulePolicy(value ComputeResourcePolicyInstanceSchedulePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.putInstanceSchedulePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy">ComputeResourcePolicyInstanceSchedulePolicy</a>

---

##### `PutSnapshotSchedulePolicy` <a name="PutSnapshotSchedulePolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.putSnapshotSchedulePolicy"></a>

```go
func PutSnapshotSchedulePolicy(value ComputeResourcePolicySnapshotSchedulePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.putSnapshotSchedulePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicy">ComputeResourcePolicySnapshotSchedulePolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.putTimeouts"></a>

```go
func PutTimeouts(value ComputeResourcePolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeouts">ComputeResourcePolicyTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGroupPlacementPolicy` <a name="ResetGroupPlacementPolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetGroupPlacementPolicy"></a>

```go
func ResetGroupPlacementPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetInstanceSchedulePolicy` <a name="ResetInstanceSchedulePolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetInstanceSchedulePolicy"></a>

```go
func ResetInstanceSchedulePolicy()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSnapshotSchedulePolicy` <a name="ResetSnapshotSchedulePolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetSnapshotSchedulePolicy"></a>

```go
func ResetSnapshotSchedulePolicy()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.ComputeResourcePolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.ComputeResourcePolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.ComputeResourcePolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.groupPlacementPolicy">GroupPlacementPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference">ComputeResourcePolicyGroupPlacementPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.instanceSchedulePolicy">InstanceSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference">ComputeResourcePolicyInstanceSchedulePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.snapshotSchedulePolicy">SnapshotSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference">ComputeResourcePolicySnapshotSchedulePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference">ComputeResourcePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.groupPlacementPolicyInput">GroupPlacementPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicy">ComputeResourcePolicyGroupPlacementPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.instanceSchedulePolicyInput">InstanceSchedulePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy">ComputeResourcePolicyInstanceSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.snapshotSchedulePolicyInput">SnapshotSchedulePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicy">ComputeResourcePolicySnapshotSchedulePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GroupPlacementPolicy`<sup>Required</sup> <a name="GroupPlacementPolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.groupPlacementPolicy"></a>

```go
func GroupPlacementPolicy() ComputeResourcePolicyGroupPlacementPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference">ComputeResourcePolicyGroupPlacementPolicyOutputReference</a>

---

##### `InstanceSchedulePolicy`<sup>Required</sup> <a name="InstanceSchedulePolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.instanceSchedulePolicy"></a>

```go
func InstanceSchedulePolicy() ComputeResourcePolicyInstanceSchedulePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference">ComputeResourcePolicyInstanceSchedulePolicyOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SnapshotSchedulePolicy`<sup>Required</sup> <a name="SnapshotSchedulePolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.snapshotSchedulePolicy"></a>

```go
func SnapshotSchedulePolicy() ComputeResourcePolicySnapshotSchedulePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference">ComputeResourcePolicySnapshotSchedulePolicyOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.timeouts"></a>

```go
func Timeouts() ComputeResourcePolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference">ComputeResourcePolicyTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GroupPlacementPolicyInput`<sup>Optional</sup> <a name="GroupPlacementPolicyInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.groupPlacementPolicyInput"></a>

```go
func GroupPlacementPolicyInput() ComputeResourcePolicyGroupPlacementPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicy">ComputeResourcePolicyGroupPlacementPolicy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceSchedulePolicyInput`<sup>Optional</sup> <a name="InstanceSchedulePolicyInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.instanceSchedulePolicyInput"></a>

```go
func InstanceSchedulePolicyInput() ComputeResourcePolicyInstanceSchedulePolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy">ComputeResourcePolicyInstanceSchedulePolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SnapshotSchedulePolicyInput`<sup>Optional</sup> <a name="SnapshotSchedulePolicyInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.snapshotSchedulePolicyInput"></a>

```go
func SnapshotSchedulePolicyInput() ComputeResourcePolicySnapshotSchedulePolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicy">ComputeResourcePolicySnapshotSchedulePolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeResourcePolicyConfig <a name="ComputeResourcePolicyConfig" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

&computeresourcepolicy.ComputeResourcePolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	GroupPlacementPolicy: github.com/cdktf/cdktf-provider-google-go/google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicy,
	Id: *string,
	InstanceSchedulePolicy: github.com/cdktf/cdktf-provider-google-go/google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy,
	Project: *string,
	Region: *string,
	SnapshotSchedulePolicy: github.com/cdktf/cdktf-provider-google-go/google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicy,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeResourcePolicy.ComputeResourcePolicyTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.name">Name</a></code> | <code>*string</code> | The name of the resource, provided by the client when initially creating the resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.groupPlacementPolicy">GroupPlacementPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicy">ComputeResourcePolicyGroupPlacementPolicy</a></code> | group_placement_policy block. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#id ComputeResourcePolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.instanceSchedulePolicy">InstanceSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy">ComputeResourcePolicyInstanceSchedulePolicy</a></code> | instance_schedule_policy block. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#project ComputeResourcePolicy#project}. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.region">Region</a></code> | <code>*string</code> | Region where resource policy resides. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.snapshotSchedulePolicy">SnapshotSchedulePolicy</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicy">ComputeResourcePolicySnapshotSchedulePolicy</a></code> | snapshot_schedule_policy block. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeouts">ComputeResourcePolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the resource, provided by the client when initially creating the resource.

The resource name must be 1-63 characters long, and comply
with RFC1035. Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)'? which means the
first character must be a lowercase letter, and all following characters
must be a dash, lowercase letter, or digit, except the last character,
which cannot be a dash.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#name ComputeResourcePolicy#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#description ComputeResourcePolicy#description}

---

##### `GroupPlacementPolicy`<sup>Optional</sup> <a name="GroupPlacementPolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.groupPlacementPolicy"></a>

```go
GroupPlacementPolicy ComputeResourcePolicyGroupPlacementPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicy">ComputeResourcePolicyGroupPlacementPolicy</a>

group_placement_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#group_placement_policy ComputeResourcePolicy#group_placement_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#id ComputeResourcePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InstanceSchedulePolicy`<sup>Optional</sup> <a name="InstanceSchedulePolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.instanceSchedulePolicy"></a>

```go
InstanceSchedulePolicy ComputeResourcePolicyInstanceSchedulePolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy">ComputeResourcePolicyInstanceSchedulePolicy</a>

instance_schedule_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#instance_schedule_policy ComputeResourcePolicy#instance_schedule_policy}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#project ComputeResourcePolicy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where resource policy resides.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#region ComputeResourcePolicy#region}

---

##### `SnapshotSchedulePolicy`<sup>Optional</sup> <a name="SnapshotSchedulePolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.snapshotSchedulePolicy"></a>

```go
SnapshotSchedulePolicy ComputeResourcePolicySnapshotSchedulePolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicy">ComputeResourcePolicySnapshotSchedulePolicy</a>

snapshot_schedule_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#snapshot_schedule_policy ComputeResourcePolicy#snapshot_schedule_policy}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyConfig.property.timeouts"></a>

```go
Timeouts ComputeResourcePolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeouts">ComputeResourcePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#timeouts ComputeResourcePolicy#timeouts}

---

### ComputeResourcePolicyGroupPlacementPolicy <a name="ComputeResourcePolicyGroupPlacementPolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

&computeresourcepolicy.ComputeResourcePolicyGroupPlacementPolicy {
	AvailabilityDomainCount: *f64,
	Collocation: *string,
	VmCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicy.property.availabilityDomainCount">AvailabilityDomainCount</a></code> | <code>*f64</code> | The number of availability domains instances will be spread across. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicy.property.collocation">Collocation</a></code> | <code>*string</code> | Collocation specifies whether to place VMs inside the same availability domain on the same low-latency network. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicy.property.vmCount">VmCount</a></code> | <code>*f64</code> | Number of VMs in this placement group. |

---

##### `AvailabilityDomainCount`<sup>Optional</sup> <a name="AvailabilityDomainCount" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicy.property.availabilityDomainCount"></a>

```go
AvailabilityDomainCount *f64
```

- *Type:* *f64

The number of availability domains instances will be spread across.

If two instances are in different
availability domain, they will not be put in the same low latency network

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#availability_domain_count ComputeResourcePolicy#availability_domain_count}

---

##### `Collocation`<sup>Optional</sup> <a name="Collocation" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicy.property.collocation"></a>

```go
Collocation *string
```

- *Type:* *string

Collocation specifies whether to place VMs inside the same availability domain on the same low-latency network.

Specify 'COLLOCATED' to enable collocation. Can only be specified with 'vm_count'. If compute instances are created
with a COLLOCATED policy, then exactly 'vm_count' instances must be created at the same time with the resource policy
attached. Possible values: ["COLLOCATED"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#collocation ComputeResourcePolicy#collocation}

---

##### `VmCount`<sup>Optional</sup> <a name="VmCount" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicy.property.vmCount"></a>

```go
VmCount *f64
```

- *Type:* *f64

Number of VMs in this placement group.

Google does not recommend that you use this field
unless you use a compact policy and you want your policy to work only if it contains this
exact number of VMs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#vm_count ComputeResourcePolicy#vm_count}

---

### ComputeResourcePolicyInstanceSchedulePolicy <a name="ComputeResourcePolicyInstanceSchedulePolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

&computeresourcepolicy.ComputeResourcePolicyInstanceSchedulePolicy {
	TimeZone: *string,
	ExpirationTime: *string,
	StartTime: *string,
	VmStartSchedule: github.com/cdktf/cdktf-provider-google-go/google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule,
	VmStopSchedule: github.com/cdktf/cdktf-provider-google-go/google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy.property.timeZone">TimeZone</a></code> | <code>*string</code> | Specifies the time zone to be used in interpreting the schedule. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy.property.expirationTime">ExpirationTime</a></code> | <code>*string</code> | The expiration time of the schedule. The timestamp is an RFC3339 string. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy.property.startTime">StartTime</a></code> | <code>*string</code> | The start time of the schedule. The timestamp is an RFC3339 string. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy.property.vmStartSchedule">VmStartSchedule</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a></code> | vm_start_schedule block. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy.property.vmStopSchedule">VmStopSchedule</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a></code> | vm_stop_schedule block. |

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy.property.timeZone"></a>

```go
TimeZone *string
```

- *Type:* *string

Specifies the time zone to be used in interpreting the schedule.

The value of this field must be a time zone name
from the tz database: http://en.wikipedia.org/wiki/Tz_database.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#time_zone ComputeResourcePolicy#time_zone}

---

##### `ExpirationTime`<sup>Optional</sup> <a name="ExpirationTime" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy.property.expirationTime"></a>

```go
ExpirationTime *string
```

- *Type:* *string

The expiration time of the schedule. The timestamp is an RFC3339 string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#expiration_time ComputeResourcePolicy#expiration_time}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

The start time of the schedule. The timestamp is an RFC3339 string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#start_time ComputeResourcePolicy#start_time}

---

##### `VmStartSchedule`<sup>Optional</sup> <a name="VmStartSchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy.property.vmStartSchedule"></a>

```go
VmStartSchedule ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a>

vm_start_schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#vm_start_schedule ComputeResourcePolicy#vm_start_schedule}

---

##### `VmStopSchedule`<sup>Optional</sup> <a name="VmStopSchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy.property.vmStopSchedule"></a>

```go
VmStopSchedule ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a>

vm_stop_schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#vm_stop_schedule ComputeResourcePolicy#vm_stop_schedule}

---

### ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule <a name="ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

&computeresourcepolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule {
	Schedule: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule.property.schedule">Schedule</a></code> | <code>*string</code> | Specifies the frequency for the operation, using the unix-cron format. |

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Specifies the frequency for the operation, using the unix-cron format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#schedule ComputeResourcePolicy#schedule}

---

### ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule <a name="ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

&computeresourcepolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule {
	Schedule: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule.property.schedule">Schedule</a></code> | <code>*string</code> | Specifies the frequency for the operation, using the unix-cron format. |

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule.property.schedule"></a>

```go
Schedule *string
```

- *Type:* *string

Specifies the frequency for the operation, using the unix-cron format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#schedule ComputeResourcePolicy#schedule}

---

### ComputeResourcePolicySnapshotSchedulePolicy <a name="ComputeResourcePolicySnapshotSchedulePolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

&computeresourcepolicy.ComputeResourcePolicySnapshotSchedulePolicy {
	Schedule: github.com/cdktf/cdktf-provider-google-go/google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySchedule,
	RetentionPolicy: github.com/cdktf/cdktf-provider-google-go/google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy,
	SnapshotProperties: github.com/cdktf/cdktf-provider-google-go/google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicy.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySchedule">ComputeResourcePolicySnapshotSchedulePolicySchedule</a></code> | schedule block. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicy.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a></code> | retention_policy block. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicy.property.snapshotProperties">SnapshotProperties</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a></code> | snapshot_properties block. |

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicy.property.schedule"></a>

```go
Schedule ComputeResourcePolicySnapshotSchedulePolicySchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySchedule">ComputeResourcePolicySnapshotSchedulePolicySchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#schedule ComputeResourcePolicy#schedule}

---

##### `RetentionPolicy`<sup>Optional</sup> <a name="RetentionPolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicy.property.retentionPolicy"></a>

```go
RetentionPolicy ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a>

retention_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#retention_policy ComputeResourcePolicy#retention_policy}

---

##### `SnapshotProperties`<sup>Optional</sup> <a name="SnapshotProperties" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicy.property.snapshotProperties"></a>

```go
SnapshotProperties ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a>

snapshot_properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#snapshot_properties ComputeResourcePolicy#snapshot_properties}

---

### ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy <a name="ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

&computeresourcepolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy {
	MaxRetentionDays: *f64,
	OnSourceDiskDelete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.property.maxRetentionDays">MaxRetentionDays</a></code> | <code>*f64</code> | Maximum age of the snapshot that is allowed to be kept. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.property.onSourceDiskDelete">OnSourceDiskDelete</a></code> | <code>*string</code> | Specifies the behavior to apply to scheduled snapshots when the source disk is deleted. |

---

##### `MaxRetentionDays`<sup>Required</sup> <a name="MaxRetentionDays" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.property.maxRetentionDays"></a>

```go
MaxRetentionDays *f64
```

- *Type:* *f64

Maximum age of the snapshot that is allowed to be kept.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#max_retention_days ComputeResourcePolicy#max_retention_days}

---

##### `OnSourceDiskDelete`<sup>Optional</sup> <a name="OnSourceDiskDelete" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy.property.onSourceDiskDelete"></a>

```go
OnSourceDiskDelete *string
```

- *Type:* *string

Specifies the behavior to apply to scheduled snapshots when the source disk is deleted.

Default value: "KEEP_AUTO_SNAPSHOTS" Possible values: ["KEEP_AUTO_SNAPSHOTS", "APPLY_RETENTION_POLICY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#on_source_disk_delete ComputeResourcePolicy#on_source_disk_delete}

---

### ComputeResourcePolicySnapshotSchedulePolicySchedule <a name="ComputeResourcePolicySnapshotSchedulePolicySchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

&computeresourcepolicy.ComputeResourcePolicySnapshotSchedulePolicySchedule {
	DailySchedule: github.com/cdktf/cdktf-provider-google-go/google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule,
	HourlySchedule: github.com/cdktf/cdktf-provider-google-go/google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule,
	WeeklySchedule: github.com/cdktf/cdktf-provider-google-go/google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySchedule.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a></code> | daily_schedule block. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySchedule.property.hourlySchedule">HourlySchedule</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a></code> | hourly_schedule block. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySchedule.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a></code> | weekly_schedule block. |

---

##### `DailySchedule`<sup>Optional</sup> <a name="DailySchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySchedule.property.dailySchedule"></a>

```go
DailySchedule ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a>

daily_schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#daily_schedule ComputeResourcePolicy#daily_schedule}

---

##### `HourlySchedule`<sup>Optional</sup> <a name="HourlySchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySchedule.property.hourlySchedule"></a>

```go
HourlySchedule ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a>

hourly_schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#hourly_schedule ComputeResourcePolicy#hourly_schedule}

---

##### `WeeklySchedule`<sup>Optional</sup> <a name="WeeklySchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySchedule.property.weeklySchedule"></a>

```go
WeeklySchedule ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a>

weekly_schedule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#weekly_schedule ComputeResourcePolicy#weekly_schedule}

---

### ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule <a name="ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

&computeresourcepolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule {
	DaysInCycle: *f64,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.property.daysInCycle">DaysInCycle</a></code> | <code>*f64</code> | The number of days between snapshots. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.property.startTime">StartTime</a></code> | <code>*string</code> | This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00. |

---

##### `DaysInCycle`<sup>Required</sup> <a name="DaysInCycle" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.property.daysInCycle"></a>

```go
DaysInCycle *f64
```

- *Type:* *f64

The number of days between snapshots.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#days_in_cycle ComputeResourcePolicy#days_in_cycle}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

This must be in UTC format that resolves to one of 00:00, 04:00, 08:00, 12:00, 16:00, or 20:00.

For example,
both 13:00-5 and 08:00 are valid.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#start_time ComputeResourcePolicy#start_time}

---

### ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule <a name="ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

&computeresourcepolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule {
	HoursInCycle: *f64,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.property.hoursInCycle">HoursInCycle</a></code> | <code>*f64</code> | The number of hours between snapshots. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.property.startTime">StartTime</a></code> | <code>*string</code> | Time within the window to start the operations. |

---

##### `HoursInCycle`<sup>Required</sup> <a name="HoursInCycle" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.property.hoursInCycle"></a>

```go
HoursInCycle *f64
```

- *Type:* *f64

The number of hours between snapshots.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#hours_in_cycle ComputeResourcePolicy#hours_in_cycle}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Time within the window to start the operations.

It must be in an hourly format "HH:MM",
where HH : [00-23] and MM : [00] GMT.
eg: 21:00

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#start_time ComputeResourcePolicy#start_time}

---

### ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule <a name="ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

&computeresourcepolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule {
	DayOfWeeks: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule.property.dayOfWeeks">DayOfWeeks</a></code> | <code>interface{}</code> | day_of_weeks block. |

---

##### `DayOfWeeks`<sup>Required</sup> <a name="DayOfWeeks" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule.property.dayOfWeeks"></a>

```go
DayOfWeeks interface{}
```

- *Type:* interface{}

day_of_weeks block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#day_of_weeks ComputeResourcePolicy#day_of_weeks}

---

### ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks <a name="ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

&computeresourcepolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks {
	Day: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.property.day">Day</a></code> | <code>*string</code> | The day of the week to create the snapshot. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.property.startTime">StartTime</a></code> | <code>*string</code> | Time within the window to start the operations. |

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.property.day"></a>

```go
Day *string
```

- *Type:* *string

The day of the week to create the snapshot.

e.g. MONDAY Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#day ComputeResourcePolicy#day}

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeks.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Time within the window to start the operations.

It must be in format "HH:MM", where HH : [00-23] and MM : [00-00] GMT.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#start_time ComputeResourcePolicy#start_time}

---

### ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties <a name="ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

&computeresourcepolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties {
	ChainName: *string,
	GuestFlush: interface{},
	Labels: *map[string]*string,
	StorageLocations: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.chainName">ChainName</a></code> | <code>*string</code> | Creates the new snapshot in the snapshot chain labeled with the  specified name. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.guestFlush">GuestFlush</a></code> | <code>interface{}</code> | Whether to perform a 'guest aware' snapshot. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.labels">Labels</a></code> | <code>*map[string]*string</code> | A set of key-value pairs. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.storageLocations">StorageLocations</a></code> | <code>*[]*string</code> | Cloud Storage bucket location to store the auto snapshot (regional or multi-regional). |

---

##### `ChainName`<sup>Optional</sup> <a name="ChainName" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.chainName"></a>

```go
ChainName *string
```

- *Type:* *string

Creates the new snapshot in the snapshot chain labeled with the  specified name.

The chain name must be 1-63 characters long and comply
with RFC1035.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#chain_name ComputeResourcePolicy#chain_name}

---

##### `GuestFlush`<sup>Optional</sup> <a name="GuestFlush" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.guestFlush"></a>

```go
GuestFlush interface{}
```

- *Type:* interface{}

Whether to perform a 'guest aware' snapshot.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#guest_flush ComputeResourcePolicy#guest_flush}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

A set of key-value pairs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#labels ComputeResourcePolicy#labels}

---

##### `StorageLocations`<sup>Optional</sup> <a name="StorageLocations" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties.property.storageLocations"></a>

```go
StorageLocations *[]*string
```

- *Type:* *[]*string

Cloud Storage bucket location to store the auto snapshot (regional or multi-regional).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#storage_locations ComputeResourcePolicy#storage_locations}

---

### ComputeResourcePolicyTimeouts <a name="ComputeResourcePolicyTimeouts" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

&computeresourcepolicy.ComputeResourcePolicyTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#create ComputeResourcePolicy#create}. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#delete ComputeResourcePolicy#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#create ComputeResourcePolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_resource_policy#delete ComputeResourcePolicy#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeResourcePolicyGroupPlacementPolicyOutputReference <a name="ComputeResourcePolicyGroupPlacementPolicyOutputReference" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.NewComputeResourcePolicyGroupPlacementPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeResourcePolicyGroupPlacementPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.resetAvailabilityDomainCount">ResetAvailabilityDomainCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.resetCollocation">ResetCollocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.resetVmCount">ResetVmCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAvailabilityDomainCount` <a name="ResetAvailabilityDomainCount" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.resetAvailabilityDomainCount"></a>

```go
func ResetAvailabilityDomainCount()
```

##### `ResetCollocation` <a name="ResetCollocation" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.resetCollocation"></a>

```go
func ResetCollocation()
```

##### `ResetVmCount` <a name="ResetVmCount" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.resetVmCount"></a>

```go
func ResetVmCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCountInput">AvailabilityDomainCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocationInput">CollocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCountInput">VmCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCount">AvailabilityDomainCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocation">Collocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCount">VmCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicy">ComputeResourcePolicyGroupPlacementPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomainCountInput`<sup>Optional</sup> <a name="AvailabilityDomainCountInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCountInput"></a>

```go
func AvailabilityDomainCountInput() *f64
```

- *Type:* *f64

---

##### `CollocationInput`<sup>Optional</sup> <a name="CollocationInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocationInput"></a>

```go
func CollocationInput() *string
```

- *Type:* *string

---

##### `VmCountInput`<sup>Optional</sup> <a name="VmCountInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCountInput"></a>

```go
func VmCountInput() *f64
```

- *Type:* *f64

---

##### `AvailabilityDomainCount`<sup>Required</sup> <a name="AvailabilityDomainCount" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.availabilityDomainCount"></a>

```go
func AvailabilityDomainCount() *f64
```

- *Type:* *f64

---

##### `Collocation`<sup>Required</sup> <a name="Collocation" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.collocation"></a>

```go
func Collocation() *string
```

- *Type:* *string

---

##### `VmCount`<sup>Required</sup> <a name="VmCount" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.vmCount"></a>

```go
func VmCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeResourcePolicyGroupPlacementPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyGroupPlacementPolicy">ComputeResourcePolicyGroupPlacementPolicy</a>

---


### ComputeResourcePolicyInstanceSchedulePolicyOutputReference <a name="ComputeResourcePolicyInstanceSchedulePolicyOutputReference" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.NewComputeResourcePolicyInstanceSchedulePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeResourcePolicyInstanceSchedulePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStartSchedule">PutVmStartSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStopSchedule">PutVmStopSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetExpirationTime">ResetExpirationTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetVmStartSchedule">ResetVmStartSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetVmStopSchedule">ResetVmStopSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVmStartSchedule` <a name="PutVmStartSchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStartSchedule"></a>

```go
func PutVmStartSchedule(value ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStartSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a>

---

##### `PutVmStopSchedule` <a name="PutVmStopSchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStopSchedule"></a>

```go
func PutVmStopSchedule(value ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.putVmStopSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a>

---

##### `ResetExpirationTime` <a name="ResetExpirationTime" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetExpirationTime"></a>

```go
func ResetExpirationTime()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```

##### `ResetVmStartSchedule` <a name="ResetVmStartSchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetVmStartSchedule"></a>

```go
func ResetVmStartSchedule()
```

##### `ResetVmStopSchedule` <a name="ResetVmStopSchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.resetVmStopSchedule"></a>

```go
func ResetVmStopSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartSchedule">VmStartSchedule</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference">ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopSchedule">VmStopSchedule</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference">ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTimeInput">ExpirationTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZoneInput">TimeZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartScheduleInput">VmStartScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopScheduleInput">VmStopScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTime">ExpirationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZone">TimeZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy">ComputeResourcePolicyInstanceSchedulePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `VmStartSchedule`<sup>Required</sup> <a name="VmStartSchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartSchedule"></a>

```go
func VmStartSchedule() ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference">ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference</a>

---

##### `VmStopSchedule`<sup>Required</sup> <a name="VmStopSchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopSchedule"></a>

```go
func VmStopSchedule() ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference">ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference</a>

---

##### `ExpirationTimeInput`<sup>Optional</sup> <a name="ExpirationTimeInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTimeInput"></a>

```go
func ExpirationTimeInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `TimeZoneInput`<sup>Optional</sup> <a name="TimeZoneInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZoneInput"></a>

```go
func TimeZoneInput() *string
```

- *Type:* *string

---

##### `VmStartScheduleInput`<sup>Optional</sup> <a name="VmStartScheduleInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStartScheduleInput"></a>

```go
func VmStartScheduleInput() ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a>

---

##### `VmStopScheduleInput`<sup>Optional</sup> <a name="VmStopScheduleInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.vmStopScheduleInput"></a>

```go
func VmStopScheduleInput() ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a>

---

##### `ExpirationTime`<sup>Required</sup> <a name="ExpirationTime" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.expirationTime"></a>

```go
func ExpirationTime() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `TimeZone`<sup>Required</sup> <a name="TimeZone" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.timeZone"></a>

```go
func TimeZone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeResourcePolicyInstanceSchedulePolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicy">ComputeResourcePolicyInstanceSchedulePolicy</a>

---


### ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference <a name="ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.NewComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule">ComputeResourcePolicyInstanceSchedulePolicyVmStartSchedule</a>

---


### ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference <a name="ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.NewComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.schedule">Schedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() *string
```

- *Type:* *string

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.schedule"></a>

```go
func Schedule() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule">ComputeResourcePolicyInstanceSchedulePolicyVmStopSchedule</a>

---


### ComputeResourcePolicySnapshotSchedulePolicyOutputReference <a name="ComputeResourcePolicySnapshotSchedulePolicyOutputReference" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.NewComputeResourcePolicySnapshotSchedulePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeResourcePolicySnapshotSchedulePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.putRetentionPolicy">PutRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSnapshotProperties">PutSnapshotProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.resetRetentionPolicy">ResetRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.resetSnapshotProperties">ResetSnapshotProperties</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRetentionPolicy` <a name="PutRetentionPolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.putRetentionPolicy"></a>

```go
func PutRetentionPolicy(value ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.putRetentionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSchedule"></a>

```go
func PutSchedule(value ComputeResourcePolicySnapshotSchedulePolicySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySchedule">ComputeResourcePolicySnapshotSchedulePolicySchedule</a>

---

##### `PutSnapshotProperties` <a name="PutSnapshotProperties" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSnapshotProperties"></a>

```go
func PutSnapshotProperties(value ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.putSnapshotProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a>

---

##### `ResetRetentionPolicy` <a name="ResetRetentionPolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.resetRetentionPolicy"></a>

```go
func ResetRetentionPolicy()
```

##### `ResetSnapshotProperties` <a name="ResetSnapshotProperties" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.resetSnapshotProperties"></a>

```go
func ResetSnapshotProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicy">RetentionPolicy</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference">ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference">ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotProperties">SnapshotProperties</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference">ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicyInput">RetentionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySchedule">ComputeResourcePolicySnapshotSchedulePolicySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotPropertiesInput">SnapshotPropertiesInput</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicy">ComputeResourcePolicySnapshotSchedulePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RetentionPolicy`<sup>Required</sup> <a name="RetentionPolicy" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicy"></a>

```go
func RetentionPolicy() ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference">ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.schedule"></a>

```go
func Schedule() ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference">ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference</a>

---

##### `SnapshotProperties`<sup>Required</sup> <a name="SnapshotProperties" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotProperties"></a>

```go
func SnapshotProperties() ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference">ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference</a>

---

##### `RetentionPolicyInput`<sup>Optional</sup> <a name="RetentionPolicyInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.retentionPolicyInput"></a>

```go
func RetentionPolicyInput() ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() ComputeResourcePolicySnapshotSchedulePolicySchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySchedule">ComputeResourcePolicySnapshotSchedulePolicySchedule</a>

---

##### `SnapshotPropertiesInput`<sup>Optional</sup> <a name="SnapshotPropertiesInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.snapshotPropertiesInput"></a>

```go
func SnapshotPropertiesInput() ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeResourcePolicySnapshotSchedulePolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicy">ComputeResourcePolicySnapshotSchedulePolicy</a>

---


### ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference <a name="ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.NewComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resetOnSourceDiskDelete">ResetOnSourceDiskDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOnSourceDiskDelete` <a name="ResetOnSourceDiskDelete" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.resetOnSourceDiskDelete"></a>

```go
func ResetOnSourceDiskDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDaysInput">MaxRetentionDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDeleteInput">OnSourceDiskDeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDays">MaxRetentionDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDelete">OnSourceDiskDelete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxRetentionDaysInput`<sup>Optional</sup> <a name="MaxRetentionDaysInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDaysInput"></a>

```go
func MaxRetentionDaysInput() *f64
```

- *Type:* *f64

---

##### `OnSourceDiskDeleteInput`<sup>Optional</sup> <a name="OnSourceDiskDeleteInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDeleteInput"></a>

```go
func OnSourceDiskDeleteInput() *string
```

- *Type:* *string

---

##### `MaxRetentionDays`<sup>Required</sup> <a name="MaxRetentionDays" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.maxRetentionDays"></a>

```go
func MaxRetentionDays() *f64
```

- *Type:* *f64

---

##### `OnSourceDiskDelete`<sup>Required</sup> <a name="OnSourceDiskDelete" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.onSourceDiskDelete"></a>

```go
func OnSourceDiskDelete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy">ComputeResourcePolicySnapshotSchedulePolicyRetentionPolicy</a>

---


### ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference <a name="ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.NewComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycleInput">DaysInCycleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycle">DaysInCycle</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysInCycleInput`<sup>Optional</sup> <a name="DaysInCycleInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycleInput"></a>

```go
func DaysInCycleInput() *f64
```

- *Type:* *f64

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `DaysInCycle`<sup>Required</sup> <a name="DaysInCycle" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.daysInCycle"></a>

```go
func DaysInCycle() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a>

---


### ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference <a name="ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.NewComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycleInput">HoursInCycleInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycle">HoursInCycle</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HoursInCycleInput`<sup>Optional</sup> <a name="HoursInCycleInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycleInput"></a>

```go
func HoursInCycleInput() *f64
```

- *Type:* *f64

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `HoursInCycle`<sup>Required</sup> <a name="HoursInCycle" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.hoursInCycle"></a>

```go
func HoursInCycle() *f64
```

- *Type:* *f64

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a>

---


### ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference <a name="ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.NewComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putDailySchedule">PutDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putHourlySchedule">PutHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putWeeklySchedule">PutWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetDailySchedule">ResetDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetHourlySchedule">ResetHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetWeeklySchedule">ResetWeeklySchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDailySchedule` <a name="PutDailySchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putDailySchedule"></a>

```go
func PutDailySchedule(value ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putDailySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a>

---

##### `PutHourlySchedule` <a name="PutHourlySchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putHourlySchedule"></a>

```go
func PutHourlySchedule(value ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putHourlySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a>

---

##### `PutWeeklySchedule` <a name="PutWeeklySchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putWeeklySchedule"></a>

```go
func PutWeeklySchedule(value ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.putWeeklySchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a>

---

##### `ResetDailySchedule` <a name="ResetDailySchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetDailySchedule"></a>

```go
func ResetDailySchedule()
```

##### `ResetHourlySchedule` <a name="ResetHourlySchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetHourlySchedule"></a>

```go
func ResetHourlySchedule()
```

##### `ResetWeeklySchedule` <a name="ResetWeeklySchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.resetWeeklySchedule"></a>

```go
func ResetWeeklySchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailySchedule">DailySchedule</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference">ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlySchedule">HourlySchedule</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference">ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklySchedule">WeeklySchedule</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference">ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailyScheduleInput">DailyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlyScheduleInput">HourlyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklyScheduleInput">WeeklyScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySchedule">ComputeResourcePolicySnapshotSchedulePolicySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DailySchedule`<sup>Required</sup> <a name="DailySchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailySchedule"></a>

```go
func DailySchedule() ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference">ComputeResourcePolicySnapshotSchedulePolicyScheduleDailyScheduleOutputReference</a>

---

##### `HourlySchedule`<sup>Required</sup> <a name="HourlySchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlySchedule"></a>

```go
func HourlySchedule() ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference">ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlyScheduleOutputReference</a>

---

##### `WeeklySchedule`<sup>Required</sup> <a name="WeeklySchedule" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklySchedule"></a>

```go
func WeeklySchedule() ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference">ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference</a>

---

##### `DailyScheduleInput`<sup>Optional</sup> <a name="DailyScheduleInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.dailyScheduleInput"></a>

```go
func DailyScheduleInput() ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleDailySchedule</a>

---

##### `HourlyScheduleInput`<sup>Optional</sup> <a name="HourlyScheduleInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.hourlyScheduleInput"></a>

```go
func HourlyScheduleInput() ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleHourlySchedule</a>

---

##### `WeeklyScheduleInput`<sup>Optional</sup> <a name="WeeklyScheduleInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.weeklyScheduleInput"></a>

```go
func WeeklyScheduleInput() ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeResourcePolicySnapshotSchedulePolicySchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySchedule">ComputeResourcePolicySnapshotSchedulePolicySchedule</a>

---


### ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList <a name="ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.NewComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get"></a>

```go
func Get(index *f64) ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference <a name="ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.NewComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.dayInput">DayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.day">Day</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayInput`<sup>Optional</sup> <a name="DayInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.dayInput"></a>

```go
func DayInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `Day`<sup>Required</sup> <a name="Day" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.day"></a>

```go
func Day() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference <a name="ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.NewComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.putDayOfWeeks">PutDayOfWeeks</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDayOfWeeks` <a name="PutDayOfWeeks" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.putDayOfWeeks"></a>

```go
func PutDayOfWeeks(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.putDayOfWeeks.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeks">DayOfWeeks</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList">ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeksInput">DayOfWeeksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DayOfWeeks`<sup>Required</sup> <a name="DayOfWeeks" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeks"></a>

```go
func DayOfWeeks() ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList">ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleDayOfWeeksList</a>

---

##### `DayOfWeeksInput`<sup>Optional</sup> <a name="DayOfWeeksInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.dayOfWeeksInput"></a>

```go
func DayOfWeeksInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklyScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule">ComputeResourcePolicySnapshotSchedulePolicyScheduleWeeklySchedule</a>

---


### ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference <a name="ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.NewComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetChainName">ResetChainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetGuestFlush">ResetGuestFlush</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetStorageLocations">ResetStorageLocations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChainName` <a name="ResetChainName" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetChainName"></a>

```go
func ResetChainName()
```

##### `ResetGuestFlush` <a name="ResetGuestFlush" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetGuestFlush"></a>

```go
func ResetGuestFlush()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetStorageLocations` <a name="ResetStorageLocations" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.resetStorageLocations"></a>

```go
func ResetStorageLocations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainNameInput">ChainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlushInput">GuestFlushInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocationsInput">StorageLocationsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainName">ChainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlush">GuestFlush</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocations">StorageLocations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChainNameInput`<sup>Optional</sup> <a name="ChainNameInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainNameInput"></a>

```go
func ChainNameInput() *string
```

- *Type:* *string

---

##### `GuestFlushInput`<sup>Optional</sup> <a name="GuestFlushInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlushInput"></a>

```go
func GuestFlushInput() interface{}
```

- *Type:* interface{}

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StorageLocationsInput`<sup>Optional</sup> <a name="StorageLocationsInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocationsInput"></a>

```go
func StorageLocationsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ChainName`<sup>Required</sup> <a name="ChainName" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.chainName"></a>

```go
func ChainName() *string
```

- *Type:* *string

---

##### `GuestFlush`<sup>Required</sup> <a name="GuestFlush" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.guestFlush"></a>

```go
func GuestFlush() interface{}
```

- *Type:* interface{}

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `StorageLocations`<sup>Required</sup> <a name="StorageLocations" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.storageLocations"></a>

```go
func StorageLocations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties
```

- *Type:* <a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties">ComputeResourcePolicySnapshotSchedulePolicySnapshotProperties</a>

---


### ComputeResourcePolicyTimeoutsOutputReference <a name="ComputeResourcePolicyTimeoutsOutputReference" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeresourcepolicy"

computeresourcepolicy.NewComputeResourcePolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeResourcePolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeResourcePolicy.ComputeResourcePolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



