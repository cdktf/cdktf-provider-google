# `computeRegionInstanceGroupManager` Submodule <a name="`computeRegionInstanceGroupManager` Submodule" id="@cdktf/provider-google.computeRegionInstanceGroupManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionInstanceGroupManager <a name="ComputeRegionInstanceGroupManager" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager google_compute_region_instance_group_manager}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManager(scope Construct, id *string, config ComputeRegionInstanceGroupManagerConfig) ComputeRegionInstanceGroupManager
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig">ComputeRegionInstanceGroupManagerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig">ComputeRegionInstanceGroupManagerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putAutoHealingPolicies">PutAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putNamedPort">PutNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putStatefulDisk">PutStatefulDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putUpdatePolicy">PutUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putVersion">PutVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetAutoHealingPolicies">ResetAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetDistributionPolicyTargetShape">ResetDistributionPolicyTargetShape</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetDistributionPolicyZones">ResetDistributionPolicyZones</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetListManagedInstancesResults">ResetListManagedInstancesResults</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetNamedPort">ResetNamedPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetStatefulDisk">ResetStatefulDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetTargetPools">ResetTargetPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetTargetSize">ResetTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetUpdatePolicy">ResetUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetWaitForInstances">ResetWaitForInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetWaitForInstancesStatus">ResetWaitForInstancesStatus</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutAutoHealingPolicies` <a name="PutAutoHealingPolicies" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putAutoHealingPolicies"></a>

```go
func PutAutoHealingPolicies(value ComputeRegionInstanceGroupManagerAutoHealingPolicies)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putAutoHealingPolicies.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies">ComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

---

##### `PutNamedPort` <a name="PutNamedPort" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putNamedPort"></a>

```go
func PutNamedPort(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putNamedPort.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStatefulDisk` <a name="PutStatefulDisk" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putStatefulDisk"></a>

```go
func PutStatefulDisk(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putStatefulDisk.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putTimeouts"></a>

```go
func PutTimeouts(value ComputeRegionInstanceGroupManagerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts">ComputeRegionInstanceGroupManagerTimeouts</a>

---

##### `PutUpdatePolicy` <a name="PutUpdatePolicy" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putUpdatePolicy"></a>

```go
func PutUpdatePolicy(value ComputeRegionInstanceGroupManagerUpdatePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putUpdatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy">ComputeRegionInstanceGroupManagerUpdatePolicy</a>

---

##### `PutVersion` <a name="PutVersion" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putVersion"></a>

```go
func PutVersion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.putVersion.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAutoHealingPolicies` <a name="ResetAutoHealingPolicies" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetAutoHealingPolicies"></a>

```go
func ResetAutoHealingPolicies()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDistributionPolicyTargetShape` <a name="ResetDistributionPolicyTargetShape" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetDistributionPolicyTargetShape"></a>

```go
func ResetDistributionPolicyTargetShape()
```

##### `ResetDistributionPolicyZones` <a name="ResetDistributionPolicyZones" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetDistributionPolicyZones"></a>

```go
func ResetDistributionPolicyZones()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetId"></a>

```go
func ResetId()
```

##### `ResetListManagedInstancesResults` <a name="ResetListManagedInstancesResults" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetListManagedInstancesResults"></a>

```go
func ResetListManagedInstancesResults()
```

##### `ResetNamedPort` <a name="ResetNamedPort" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetNamedPort"></a>

```go
func ResetNamedPort()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetStatefulDisk` <a name="ResetStatefulDisk" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetStatefulDisk"></a>

```go
func ResetStatefulDisk()
```

##### `ResetTargetPools` <a name="ResetTargetPools" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetTargetPools"></a>

```go
func ResetTargetPools()
```

##### `ResetTargetSize` <a name="ResetTargetSize" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetTargetSize"></a>

```go
func ResetTargetSize()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpdatePolicy` <a name="ResetUpdatePolicy" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetUpdatePolicy"></a>

```go
func ResetUpdatePolicy()
```

##### `ResetWaitForInstances` <a name="ResetWaitForInstances" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetWaitForInstances"></a>

```go
func ResetWaitForInstances()
```

##### `ResetWaitForInstancesStatus` <a name="ResetWaitForInstancesStatus" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.resetWaitForInstancesStatus"></a>

```go
func ResetWaitForInstancesStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.ComputeRegionInstanceGroupManager_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.ComputeRegionInstanceGroupManager_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.ComputeRegionInstanceGroupManager_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.autoHealingPolicies">AutoHealingPolicies</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference">ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.instanceGroup">InstanceGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.namedPort">NamedPort</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList">ComputeRegionInstanceGroupManagerNamedPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.statefulDisk">StatefulDisk</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList">ComputeRegionInstanceGroupManagerStatefulDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.status">Status</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList">ComputeRegionInstanceGroupManagerStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference">ComputeRegionInstanceGroupManagerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference">ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.version">Version</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList">ComputeRegionInstanceGroupManagerVersionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.autoHealingPoliciesInput">AutoHealingPoliciesInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies">ComputeRegionInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.baseInstanceNameInput">BaseInstanceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.distributionPolicyTargetShapeInput">DistributionPolicyTargetShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.distributionPolicyZonesInput">DistributionPolicyZonesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.listManagedInstancesResultsInput">ListManagedInstancesResultsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.namedPortInput">NamedPortInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.statefulDiskInput">StatefulDiskInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.targetPoolsInput">TargetPoolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.targetSizeInput">TargetSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.updatePolicyInput">UpdatePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy">ComputeRegionInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.versionInput">VersionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.waitForInstancesInput">WaitForInstancesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.waitForInstancesStatusInput">WaitForInstancesStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.baseInstanceName">BaseInstanceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.distributionPolicyTargetShape">DistributionPolicyTargetShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.distributionPolicyZones">DistributionPolicyZones</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.listManagedInstancesResults">ListManagedInstancesResults</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.targetPools">TargetPools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.targetSize">TargetSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.waitForInstances">WaitForInstances</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.waitForInstancesStatus">WaitForInstancesStatus</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AutoHealingPolicies`<sup>Required</sup> <a name="AutoHealingPolicies" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.autoHealingPolicies"></a>

```go
func AutoHealingPolicies() ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference">ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `InstanceGroup`<sup>Required</sup> <a name="InstanceGroup" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.instanceGroup"></a>

```go
func InstanceGroup() *string
```

- *Type:* *string

---

##### `NamedPort`<sup>Required</sup> <a name="NamedPort" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.namedPort"></a>

```go
func NamedPort() ComputeRegionInstanceGroupManagerNamedPortList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList">ComputeRegionInstanceGroupManagerNamedPortList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `StatefulDisk`<sup>Required</sup> <a name="StatefulDisk" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.statefulDisk"></a>

```go
func StatefulDisk() ComputeRegionInstanceGroupManagerStatefulDiskList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList">ComputeRegionInstanceGroupManagerStatefulDiskList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.status"></a>

```go
func Status() ComputeRegionInstanceGroupManagerStatusList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList">ComputeRegionInstanceGroupManagerStatusList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.timeouts"></a>

```go
func Timeouts() ComputeRegionInstanceGroupManagerTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference">ComputeRegionInstanceGroupManagerTimeoutsOutputReference</a>

---

##### `UpdatePolicy`<sup>Required</sup> <a name="UpdatePolicy" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.updatePolicy"></a>

```go
func UpdatePolicy() ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference">ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.version"></a>

```go
func Version() ComputeRegionInstanceGroupManagerVersionList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList">ComputeRegionInstanceGroupManagerVersionList</a>

---

##### `AutoHealingPoliciesInput`<sup>Optional</sup> <a name="AutoHealingPoliciesInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.autoHealingPoliciesInput"></a>

```go
func AutoHealingPoliciesInput() ComputeRegionInstanceGroupManagerAutoHealingPolicies
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies">ComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

---

##### `BaseInstanceNameInput`<sup>Optional</sup> <a name="BaseInstanceNameInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.baseInstanceNameInput"></a>

```go
func BaseInstanceNameInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DistributionPolicyTargetShapeInput`<sup>Optional</sup> <a name="DistributionPolicyTargetShapeInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.distributionPolicyTargetShapeInput"></a>

```go
func DistributionPolicyTargetShapeInput() *string
```

- *Type:* *string

---

##### `DistributionPolicyZonesInput`<sup>Optional</sup> <a name="DistributionPolicyZonesInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.distributionPolicyZonesInput"></a>

```go
func DistributionPolicyZonesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ListManagedInstancesResultsInput`<sup>Optional</sup> <a name="ListManagedInstancesResultsInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.listManagedInstancesResultsInput"></a>

```go
func ListManagedInstancesResultsInput() *string
```

- *Type:* *string

---

##### `NamedPortInput`<sup>Optional</sup> <a name="NamedPortInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.namedPortInput"></a>

```go
func NamedPortInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StatefulDiskInput`<sup>Optional</sup> <a name="StatefulDiskInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.statefulDiskInput"></a>

```go
func StatefulDiskInput() interface{}
```

- *Type:* interface{}

---

##### `TargetPoolsInput`<sup>Optional</sup> <a name="TargetPoolsInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.targetPoolsInput"></a>

```go
func TargetPoolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetSizeInput`<sup>Optional</sup> <a name="TargetSizeInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.targetSizeInput"></a>

```go
func TargetSizeInput() *f64
```

- *Type:* *f64

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UpdatePolicyInput`<sup>Optional</sup> <a name="UpdatePolicyInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.updatePolicyInput"></a>

```go
func UpdatePolicyInput() ComputeRegionInstanceGroupManagerUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy">ComputeRegionInstanceGroupManagerUpdatePolicy</a>

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.versionInput"></a>

```go
func VersionInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForInstancesInput`<sup>Optional</sup> <a name="WaitForInstancesInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.waitForInstancesInput"></a>

```go
func WaitForInstancesInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForInstancesStatusInput`<sup>Optional</sup> <a name="WaitForInstancesStatusInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.waitForInstancesStatusInput"></a>

```go
func WaitForInstancesStatusInput() *string
```

- *Type:* *string

---

##### `BaseInstanceName`<sup>Required</sup> <a name="BaseInstanceName" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.baseInstanceName"></a>

```go
func BaseInstanceName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DistributionPolicyTargetShape`<sup>Required</sup> <a name="DistributionPolicyTargetShape" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.distributionPolicyTargetShape"></a>

```go
func DistributionPolicyTargetShape() *string
```

- *Type:* *string

---

##### `DistributionPolicyZones`<sup>Required</sup> <a name="DistributionPolicyZones" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.distributionPolicyZones"></a>

```go
func DistributionPolicyZones() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListManagedInstancesResults`<sup>Required</sup> <a name="ListManagedInstancesResults" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.listManagedInstancesResults"></a>

```go
func ListManagedInstancesResults() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `TargetPools`<sup>Required</sup> <a name="TargetPools" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.targetPools"></a>

```go
func TargetPools() *[]*string
```

- *Type:* *[]*string

---

##### `TargetSize`<sup>Required</sup> <a name="TargetSize" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.targetSize"></a>

```go
func TargetSize() *f64
```

- *Type:* *f64

---

##### `WaitForInstances`<sup>Required</sup> <a name="WaitForInstances" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.waitForInstances"></a>

```go
func WaitForInstances() interface{}
```

- *Type:* interface{}

---

##### `WaitForInstancesStatus`<sup>Required</sup> <a name="WaitForInstancesStatus" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.waitForInstancesStatus"></a>

```go
func WaitForInstancesStatus() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManager.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionInstanceGroupManagerAutoHealingPolicies <a name="ComputeRegionInstanceGroupManagerAutoHealingPolicies" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

&computeregioninstancegroupmanager.ComputeRegionInstanceGroupManagerAutoHealingPolicies {
	HealthCheck: *string,
	InitialDelaySec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies.property.healthCheck">HealthCheck</a></code> | <code>*string</code> | The health check resource that signals autohealing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec">InitialDelaySec</a></code> | <code>*f64</code> | The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances. |

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies.property.healthCheck"></a>

```go
HealthCheck *string
```

- *Type:* *string

The health check resource that signals autohealing.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#health_check ComputeRegionInstanceGroupManager#health_check}

---

##### `InitialDelaySec`<sup>Required</sup> <a name="InitialDelaySec" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies.property.initialDelaySec"></a>

```go
InitialDelaySec *f64
```

- *Type:* *f64

The number of seconds that the managed instance group waits before it applies autohealing policies to new instances or recently recreated instances.

Between 0 and 3600.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#initial_delay_sec ComputeRegionInstanceGroupManager#initial_delay_sec}

---

### ComputeRegionInstanceGroupManagerConfig <a name="ComputeRegionInstanceGroupManagerConfig" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

&computeregioninstancegroupmanager.ComputeRegionInstanceGroupManagerConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BaseInstanceName: *string,
	Name: *string,
	Version: interface{},
	AutoHealingPolicies: github.com/cdktf/cdktf-provider-google-go/google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies,
	Description: *string,
	DistributionPolicyTargetShape: *string,
	DistributionPolicyZones: *[]*string,
	Id: *string,
	ListManagedInstancesResults: *string,
	NamedPort: interface{},
	Project: *string,
	Region: *string,
	StatefulDisk: interface{},
	TargetPools: *[]*string,
	TargetSize: *f64,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts,
	UpdatePolicy: github.com/cdktf/cdktf-provider-google-go/google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy,
	WaitForInstances: interface{},
	WaitForInstancesStatus: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.baseInstanceName">BaseInstanceName</a></code> | <code>*string</code> | The base instance name to use for instances in this group. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.name">Name</a></code> | <code>*string</code> | The name of the instance group manager. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.version">Version</a></code> | <code>interface{}</code> | version block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.autoHealingPolicies">AutoHealingPolicies</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies">ComputeRegionInstanceGroupManagerAutoHealingPolicies</a></code> | auto_healing_policies block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.description">Description</a></code> | <code>*string</code> | An optional textual description of the instance group manager. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.distributionPolicyTargetShape">DistributionPolicyTargetShape</a></code> | <code>*string</code> | The shape to which the group converges either proactively or on resize events (depending on the value set in updatePolicy.instanceRedistributionType). |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.distributionPolicyZones">DistributionPolicyZones</a></code> | <code>*[]*string</code> | The distribution policy for this managed instance group. You can specify one or more values. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#id ComputeRegionInstanceGroupManager#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.listManagedInstancesResults">ListManagedInstancesResults</a></code> | <code>*string</code> | Pagination behavior of the listManagedInstances API method for this managed instance group. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.namedPort">NamedPort</a></code> | <code>interface{}</code> | named_port block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.region">Region</a></code> | <code>*string</code> | The region where the managed instance group resides. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.statefulDisk">StatefulDisk</a></code> | <code>interface{}</code> | stateful_disk block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.targetPools">TargetPools</a></code> | <code>*[]*string</code> | The full URL of all target pools to which new instances in the group are added. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.targetSize">TargetSize</a></code> | <code>*f64</code> | The target number of running instances for this managed instance group. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts">ComputeRegionInstanceGroupManagerTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.updatePolicy">UpdatePolicy</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy">ComputeRegionInstanceGroupManagerUpdatePolicy</a></code> | update_policy block. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.waitForInstances">WaitForInstances</a></code> | <code>interface{}</code> | Whether to wait for all instances to be created/updated before returning. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.waitForInstancesStatus">WaitForInstancesStatus</a></code> | <code>*string</code> | When used with wait_for_instances specifies the status to wait for. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BaseInstanceName`<sup>Required</sup> <a name="BaseInstanceName" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.baseInstanceName"></a>

```go
BaseInstanceName *string
```

- *Type:* *string

The base instance name to use for instances in this group.

The value must be a valid RFC1035 name. Supported characters are lowercase letters, numbers, and hyphens (-). Instances are named by appending a hyphen and a random four-character string to the base instance name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#base_instance_name ComputeRegionInstanceGroupManager#base_instance_name}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the instance group manager.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#name ComputeRegionInstanceGroupManager#name}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.version"></a>

```go
Version interface{}
```

- *Type:* interface{}

version block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#version ComputeRegionInstanceGroupManager#version}

---

##### `AutoHealingPolicies`<sup>Optional</sup> <a name="AutoHealingPolicies" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.autoHealingPolicies"></a>

```go
AutoHealingPolicies ComputeRegionInstanceGroupManagerAutoHealingPolicies
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies">ComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

auto_healing_policies block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#auto_healing_policies ComputeRegionInstanceGroupManager#auto_healing_policies}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional textual description of the instance group manager.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#description ComputeRegionInstanceGroupManager#description}

---

##### `DistributionPolicyTargetShape`<sup>Optional</sup> <a name="DistributionPolicyTargetShape" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.distributionPolicyTargetShape"></a>

```go
DistributionPolicyTargetShape *string
```

- *Type:* *string

The shape to which the group converges either proactively or on resize events (depending on the value set in updatePolicy.instanceRedistributionType).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#distribution_policy_target_shape ComputeRegionInstanceGroupManager#distribution_policy_target_shape}

---

##### `DistributionPolicyZones`<sup>Optional</sup> <a name="DistributionPolicyZones" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.distributionPolicyZones"></a>

```go
DistributionPolicyZones *[]*string
```

- *Type:* *[]*string

The distribution policy for this managed instance group. You can specify one or more values.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#distribution_policy_zones ComputeRegionInstanceGroupManager#distribution_policy_zones}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#id ComputeRegionInstanceGroupManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ListManagedInstancesResults`<sup>Optional</sup> <a name="ListManagedInstancesResults" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.listManagedInstancesResults"></a>

```go
ListManagedInstancesResults *string
```

- *Type:* *string

Pagination behavior of the listManagedInstances API method for this managed instance group.

Valid values are: "PAGELESS", "PAGINATED". If PAGELESS (default), Pagination is disabled for the group's listManagedInstances API method. maxResults and pageToken query parameters are ignored and all instances are returned in a single response. If PAGINATED, pagination is enabled, maxResults and pageToken query parameters are respected.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#list_managed_instances_results ComputeRegionInstanceGroupManager#list_managed_instances_results}

---

##### `NamedPort`<sup>Optional</sup> <a name="NamedPort" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.namedPort"></a>

```go
NamedPort interface{}
```

- *Type:* interface{}

named_port block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#named_port ComputeRegionInstanceGroupManager#named_port}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#project ComputeRegionInstanceGroupManager#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region where the managed instance group resides.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#region ComputeRegionInstanceGroupManager#region}

---

##### `StatefulDisk`<sup>Optional</sup> <a name="StatefulDisk" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.statefulDisk"></a>

```go
StatefulDisk interface{}
```

- *Type:* interface{}

stateful_disk block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#stateful_disk ComputeRegionInstanceGroupManager#stateful_disk}

---

##### `TargetPools`<sup>Optional</sup> <a name="TargetPools" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.targetPools"></a>

```go
TargetPools *[]*string
```

- *Type:* *[]*string

The full URL of all target pools to which new instances in the group are added.

Updating the target pools attribute does not affect existing instances.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#target_pools ComputeRegionInstanceGroupManager#target_pools}

---

##### `TargetSize`<sup>Optional</sup> <a name="TargetSize" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.targetSize"></a>

```go
TargetSize *f64
```

- *Type:* *f64

The target number of running instances for this managed instance group.

This value should always be explicitly set unless this resource is attached to an autoscaler, in which case it should never be set. Defaults to 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#target_size ComputeRegionInstanceGroupManager#target_size}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.timeouts"></a>

```go
Timeouts ComputeRegionInstanceGroupManagerTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts">ComputeRegionInstanceGroupManagerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#timeouts ComputeRegionInstanceGroupManager#timeouts}

---

##### `UpdatePolicy`<sup>Optional</sup> <a name="UpdatePolicy" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.updatePolicy"></a>

```go
UpdatePolicy ComputeRegionInstanceGroupManagerUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy">ComputeRegionInstanceGroupManagerUpdatePolicy</a>

update_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#update_policy ComputeRegionInstanceGroupManager#update_policy}

---

##### `WaitForInstances`<sup>Optional</sup> <a name="WaitForInstances" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.waitForInstances"></a>

```go
WaitForInstances interface{}
```

- *Type:* interface{}

Whether to wait for all instances to be created/updated before returning.

Note that if this is set to true and the operation does not succeed, Terraform will continue trying until it times out.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#wait_for_instances ComputeRegionInstanceGroupManager#wait_for_instances}

---

##### `WaitForInstancesStatus`<sup>Optional</sup> <a name="WaitForInstancesStatus" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerConfig.property.waitForInstancesStatus"></a>

```go
WaitForInstancesStatus *string
```

- *Type:* *string

When used with wait_for_instances specifies the status to wait for.

When STABLE is specified this resource will wait until the instances are stable before returning. When UPDATED is set, it will wait for the version target to be reached and any per instance configs to be effective as well as all instances to be stable before returning.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#wait_for_instances_status ComputeRegionInstanceGroupManager#wait_for_instances_status}

---

### ComputeRegionInstanceGroupManagerNamedPort <a name="ComputeRegionInstanceGroupManagerNamedPort" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

&computeregioninstancegroupmanager.ComputeRegionInstanceGroupManagerNamedPort {
	Name: *string,
	Port: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort.property.name">Name</a></code> | <code>*string</code> | The name of the port. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort.property.port">Port</a></code> | <code>*f64</code> | The port number. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the port.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#name ComputeRegionInstanceGroupManager#name}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPort.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#port ComputeRegionInstanceGroupManager#port}

---

### ComputeRegionInstanceGroupManagerStatefulDisk <a name="ComputeRegionInstanceGroupManagerStatefulDisk" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

&computeregioninstancegroupmanager.ComputeRegionInstanceGroupManagerStatefulDisk {
	DeviceName: *string,
	DeleteRule: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk.property.deviceName">DeviceName</a></code> | <code>*string</code> | The device name of the disk to be attached. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk.property.deleteRule">DeleteRule</a></code> | <code>*string</code> | A value that prescribes what should happen to the stateful disk when the VM instance is deleted. |

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk.property.deviceName"></a>

```go
DeviceName *string
```

- *Type:* *string

The device name of the disk to be attached.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#device_name ComputeRegionInstanceGroupManager#device_name}

---

##### `DeleteRule`<sup>Optional</sup> <a name="DeleteRule" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDisk.property.deleteRule"></a>

```go
DeleteRule *string
```

- *Type:* *string

A value that prescribes what should happen to the stateful disk when the VM instance is deleted.

The available options are NEVER and ON_PERMANENT_INSTANCE_DELETION. NEVER - detach the disk when the VM is deleted, but do not delete the disk. ON_PERMANENT_INSTANCE_DELETION will delete the stateful disk when the VM is permanently deleted from the instance group. The default is NEVER.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#delete_rule ComputeRegionInstanceGroupManager#delete_rule}

---

### ComputeRegionInstanceGroupManagerStatus <a name="ComputeRegionInstanceGroupManagerStatus" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

&computeregioninstancegroupmanager.ComputeRegionInstanceGroupManagerStatus {

}
```


### ComputeRegionInstanceGroupManagerStatusStateful <a name="ComputeRegionInstanceGroupManagerStatusStateful" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStateful"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStateful.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

&computeregioninstancegroupmanager.ComputeRegionInstanceGroupManagerStatusStateful {

}
```


### ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs <a name="ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

&computeregioninstancegroupmanager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs {

}
```


### ComputeRegionInstanceGroupManagerStatusVersionTarget <a name="ComputeRegionInstanceGroupManagerStatusVersionTarget" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTarget.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

&computeregioninstancegroupmanager.ComputeRegionInstanceGroupManagerStatusVersionTarget {

}
```


### ComputeRegionInstanceGroupManagerTimeouts <a name="ComputeRegionInstanceGroupManagerTimeouts" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

&computeregioninstancegroupmanager.ComputeRegionInstanceGroupManagerTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#create ComputeRegionInstanceGroupManager#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#delete ComputeRegionInstanceGroupManager#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#update ComputeRegionInstanceGroupManager#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#create ComputeRegionInstanceGroupManager#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#delete ComputeRegionInstanceGroupManager#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#update ComputeRegionInstanceGroupManager#update}.

---

### ComputeRegionInstanceGroupManagerUpdatePolicy <a name="ComputeRegionInstanceGroupManagerUpdatePolicy" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

&computeregioninstancegroupmanager.ComputeRegionInstanceGroupManagerUpdatePolicy {
	MinimalAction: *string,
	Type: *string,
	InstanceRedistributionType: *string,
	MaxSurgeFixed: *f64,
	MaxSurgePercent: *f64,
	MaxUnavailableFixed: *f64,
	MaxUnavailablePercent: *f64,
	MostDisruptiveAllowedAction: *string,
	ReplacementMethod: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.minimalAction">MinimalAction</a></code> | <code>*string</code> | Minimal action to be taken on an instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.type">Type</a></code> | <code>*string</code> | The type of update process. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.instanceRedistributionType">InstanceRedistributionType</a></code> | <code>*string</code> | The instance redistribution policy for regional managed instance groups. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed">MaxSurgeFixed</a></code> | <code>*f64</code> | The maximum number of instances that can be created above the specified targetSize during the update process. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.maxSurgePercent">MaxSurgePercent</a></code> | <code>*f64</code> | The maximum number of instances(calculated as percentage) that can be created above the specified targetSize during the update process. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed">MaxUnavailableFixed</a></code> | <code>*f64</code> | The maximum number of instances that can be unavailable during the update process. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent">MaxUnavailablePercent</a></code> | <code>*f64</code> | The maximum number of instances(calculated as percentage) that can be unavailable during the update process. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction">MostDisruptiveAllowedAction</a></code> | <code>*string</code> | Most disruptive action that is allowed to be taken on an instance. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.replacementMethod">ReplacementMethod</a></code> | <code>*string</code> | The instance replacement method for regional managed instance groups. |

---

##### `MinimalAction`<sup>Required</sup> <a name="MinimalAction" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.minimalAction"></a>

```go
MinimalAction *string
```

- *Type:* *string

Minimal action to be taken on an instance.

You can specify either REFRESH to update without stopping instances, RESTART to restart existing instances or REPLACE to delete and create new instances from the target template. If you specify a REFRESH, the Updater will attempt to perform that action only. However, if the Updater determines that the minimal action you specify is not enough to perform the update, it might perform a more disruptive action.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#minimal_action ComputeRegionInstanceGroupManager#minimal_action}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of update process.

You can specify either PROACTIVE so that the instance group manager proactively executes actions in order to bring instances to their target versions or OPPORTUNISTIC so that no action is proactively executed but the update will be performed as part of other actions (for example, resizes or recreateInstances calls).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#type ComputeRegionInstanceGroupManager#type}

---

##### `InstanceRedistributionType`<sup>Optional</sup> <a name="InstanceRedistributionType" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.instanceRedistributionType"></a>

```go
InstanceRedistributionType *string
```

- *Type:* *string

The instance redistribution policy for regional managed instance groups.

Valid values are: "PROACTIVE", "NONE". If PROACTIVE (default), the group attempts to maintain an even distribution of VM instances across zones in the region. If NONE, proactive redistribution is disabled.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#instance_redistribution_type ComputeRegionInstanceGroupManager#instance_redistribution_type}

---

##### `MaxSurgeFixed`<sup>Optional</sup> <a name="MaxSurgeFixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.maxSurgeFixed"></a>

```go
MaxSurgeFixed *f64
```

- *Type:* *f64

The maximum number of instances that can be created above the specified targetSize during the update process.

Conflicts with max_surge_percent. It has to be either 0 or at least equal to the number of zones. If fixed values are used, at least one of max_unavailable_fixed or max_surge_fixed must be greater than 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#max_surge_fixed ComputeRegionInstanceGroupManager#max_surge_fixed}

---

##### `MaxSurgePercent`<sup>Optional</sup> <a name="MaxSurgePercent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.maxSurgePercent"></a>

```go
MaxSurgePercent *f64
```

- *Type:* *f64

The maximum number of instances(calculated as percentage) that can be created above the specified targetSize during the update process.

Conflicts with max_surge_fixed. Percent value is only allowed for regional managed instance groups with size at least 10.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#max_surge_percent ComputeRegionInstanceGroupManager#max_surge_percent}

---

##### `MaxUnavailableFixed`<sup>Optional</sup> <a name="MaxUnavailableFixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.maxUnavailableFixed"></a>

```go
MaxUnavailableFixed *f64
```

- *Type:* *f64

The maximum number of instances that can be unavailable during the update process.

Conflicts with max_unavailable_percent. It has to be either 0 or at least equal to the number of zones. If fixed values are used, at least one of max_unavailable_fixed or max_surge_fixed must be greater than 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#max_unavailable_fixed ComputeRegionInstanceGroupManager#max_unavailable_fixed}

---

##### `MaxUnavailablePercent`<sup>Optional</sup> <a name="MaxUnavailablePercent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.maxUnavailablePercent"></a>

```go
MaxUnavailablePercent *f64
```

- *Type:* *f64

The maximum number of instances(calculated as percentage) that can be unavailable during the update process.

Conflicts with max_unavailable_fixed. Percent value is only allowed for regional managed instance groups with size at least 10.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#max_unavailable_percent ComputeRegionInstanceGroupManager#max_unavailable_percent}

---

##### `MostDisruptiveAllowedAction`<sup>Optional</sup> <a name="MostDisruptiveAllowedAction" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.mostDisruptiveAllowedAction"></a>

```go
MostDisruptiveAllowedAction *string
```

- *Type:* *string

Most disruptive action that is allowed to be taken on an instance.

You can specify either NONE to forbid any actions, REFRESH to allow actions that do not need instance restart, RESTART to allow actions that can be applied without instance replacing or REPLACE to allow all possible actions. If the Updater determines that the minimal update action needed is more disruptive than most disruptive allowed action you specify it will not perform the update at all.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#most_disruptive_allowed_action ComputeRegionInstanceGroupManager#most_disruptive_allowed_action}

---

##### `ReplacementMethod`<sup>Optional</sup> <a name="ReplacementMethod" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy.property.replacementMethod"></a>

```go
ReplacementMethod *string
```

- *Type:* *string

The instance replacement method for regional managed instance groups.

Valid values are: "RECREATE", "SUBSTITUTE". If SUBSTITUTE (default), the group replaces VM instances with new instances that have randomly generated names. If RECREATE, instance names are preserved.  You must also set max_unavailable_fixed or max_unavailable_percent to be greater than 0.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#replacement_method ComputeRegionInstanceGroupManager#replacement_method}

---

### ComputeRegionInstanceGroupManagerVersion <a name="ComputeRegionInstanceGroupManagerVersion" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

&computeregioninstancegroupmanager.ComputeRegionInstanceGroupManagerVersion {
	InstanceTemplate: *string,
	Name: *string,
	TargetSize: github.com/cdktf/cdktf-provider-google-go/google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion.property.instanceTemplate">InstanceTemplate</a></code> | <code>*string</code> | The full URL to an instance template from which all new instances of this version will be created. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion.property.name">Name</a></code> | <code>*string</code> | Version name. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion.property.targetSize">TargetSize</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize">ComputeRegionInstanceGroupManagerVersionTargetSize</a></code> | target_size block. |

---

##### `InstanceTemplate`<sup>Required</sup> <a name="InstanceTemplate" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion.property.instanceTemplate"></a>

```go
InstanceTemplate *string
```

- *Type:* *string

The full URL to an instance template from which all new instances of this version will be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#instance_template ComputeRegionInstanceGroupManager#instance_template}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion.property.name"></a>

```go
Name *string
```

- *Type:* *string

Version name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#name ComputeRegionInstanceGroupManager#name}

---

##### `TargetSize`<sup>Optional</sup> <a name="TargetSize" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersion.property.targetSize"></a>

```go
TargetSize ComputeRegionInstanceGroupManagerVersionTargetSize
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize">ComputeRegionInstanceGroupManagerVersionTargetSize</a>

target_size block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#target_size ComputeRegionInstanceGroupManager#target_size}

---

### ComputeRegionInstanceGroupManagerVersionTargetSize <a name="ComputeRegionInstanceGroupManagerVersionTargetSize" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

&computeregioninstancegroupmanager.ComputeRegionInstanceGroupManagerVersionTargetSize {
	Fixed: *f64,
	Percent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize.property.fixed">Fixed</a></code> | <code>*f64</code> | The number of instances which are managed for this version. Conflicts with percent. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize.property.percent">Percent</a></code> | <code>*f64</code> | The number of instances (calculated as percentage) which are managed for this version. |

---

##### `Fixed`<sup>Optional</sup> <a name="Fixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize.property.fixed"></a>

```go
Fixed *f64
```

- *Type:* *f64

The number of instances which are managed for this version. Conflicts with percent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#fixed ComputeRegionInstanceGroupManager#fixed}

---

##### `Percent`<sup>Optional</sup> <a name="Percent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize.property.percent"></a>

```go
Percent *f64
```

- *Type:* *f64

The number of instances (calculated as percentage) which are managed for this version.

Conflicts with fixed. Note that when using percent, rounding will be in favor of explicitly set target_size values; a managed instance group with 2 instances and 2 versions, one of which has a target_size.percent of 60 will create 2 instances of that version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_region_instance_group_manager#percent ComputeRegionInstanceGroupManager#percent}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference <a name="ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput">HealthCheckInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput">InitialDelaySecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck">HealthCheck</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec">InitialDelaySec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies">ComputeRegionInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheckInput"></a>

```go
func HealthCheckInput() *string
```

- *Type:* *string

---

##### `InitialDelaySecInput`<sup>Optional</sup> <a name="InitialDelaySecInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySecInput"></a>

```go
func InitialDelaySecInput() *f64
```

- *Type:* *f64

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck"></a>

```go
func HealthCheck() *string
```

- *Type:* *string

---

##### `InitialDelaySec`<sup>Required</sup> <a name="InitialDelaySec" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec"></a>

```go
func InitialDelaySec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceGroupManagerAutoHealingPolicies
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerAutoHealingPolicies">ComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

---


### ComputeRegionInstanceGroupManagerNamedPortList <a name="ComputeRegionInstanceGroupManagerNamedPortList" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerNamedPortList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionInstanceGroupManagerNamedPortList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.get"></a>

```go
func Get(index *f64) ComputeRegionInstanceGroupManagerNamedPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceGroupManagerNamedPortOutputReference <a name="ComputeRegionInstanceGroupManagerNamedPortOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerNamedPortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionInstanceGroupManagerNamedPortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerNamedPortOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceGroupManagerStatefulDiskList <a name="ComputeRegionInstanceGroupManagerStatefulDiskList" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerStatefulDiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionInstanceGroupManagerStatefulDiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.get"></a>

```go
func Get(index *f64) ComputeRegionInstanceGroupManagerStatefulDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceGroupManagerStatefulDiskOutputReference <a name="ComputeRegionInstanceGroupManagerStatefulDiskOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerStatefulDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionInstanceGroupManagerStatefulDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule">ResetDeleteRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeleteRule` <a name="ResetDeleteRule" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resetDeleteRule"></a>

```go
func ResetDeleteRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput">DeleteRuleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput">DeviceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule">DeleteRule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeleteRuleInput`<sup>Optional</sup> <a name="DeleteRuleInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRuleInput"></a>

```go
func DeleteRuleInput() *string
```

- *Type:* *string

---

##### `DeviceNameInput`<sup>Optional</sup> <a name="DeviceNameInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceNameInput"></a>

```go
func DeviceNameInput() *string
```

- *Type:* *string

---

##### `DeleteRule`<sup>Required</sup> <a name="DeleteRule" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule"></a>

```go
func DeleteRule() *string
```

- *Type:* *string

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceGroupManagerStatusList <a name="ComputeRegionInstanceGroupManagerStatusList" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionInstanceGroupManagerStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.get"></a>

```go
func Get(index *f64) ComputeRegionInstanceGroupManagerStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeRegionInstanceGroupManagerStatusOutputReference <a name="ComputeRegionInstanceGroupManagerStatusOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionInstanceGroupManagerStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.isStable">IsStable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.stateful">Stateful</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList">ComputeRegionInstanceGroupManagerStatusStatefulList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.versionTarget">VersionTarget</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList">ComputeRegionInstanceGroupManagerStatusVersionTargetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatus">ComputeRegionInstanceGroupManagerStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsStable`<sup>Required</sup> <a name="IsStable" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.isStable"></a>

```go
func IsStable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Stateful`<sup>Required</sup> <a name="Stateful" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.stateful"></a>

```go
func Stateful() ComputeRegionInstanceGroupManagerStatusStatefulList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList">ComputeRegionInstanceGroupManagerStatusStatefulList</a>

---

##### `VersionTarget`<sup>Required</sup> <a name="VersionTarget" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.versionTarget"></a>

```go
func VersionTarget() ComputeRegionInstanceGroupManagerStatusVersionTargetList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList">ComputeRegionInstanceGroupManagerStatusVersionTargetList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceGroupManagerStatus
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatus">ComputeRegionInstanceGroupManagerStatus</a>

---


### ComputeRegionInstanceGroupManagerStatusStatefulList <a name="ComputeRegionInstanceGroupManagerStatusStatefulList" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerStatusStatefulList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionInstanceGroupManagerStatusStatefulList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.get"></a>

```go
func Get(index *f64) ComputeRegionInstanceGroupManagerStatusStatefulOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeRegionInstanceGroupManagerStatusStatefulOutputReference <a name="ComputeRegionInstanceGroupManagerStatusStatefulOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerStatusStatefulOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionInstanceGroupManagerStatusStatefulOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig">HasStatefulConfig</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs">PerInstanceConfigs</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList">ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStateful">ComputeRegionInstanceGroupManagerStatusStateful</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HasStatefulConfig`<sup>Required</sup> <a name="HasStatefulConfig" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig"></a>

```go
func HasStatefulConfig() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PerInstanceConfigs`<sup>Required</sup> <a name="PerInstanceConfigs" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs"></a>

```go
func PerInstanceConfigs() ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList">ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceGroupManagerStatusStateful
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStateful">ComputeRegionInstanceGroupManagerStatusStateful</a>

---


### ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList <a name="ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get"></a>

```go
func Get(index *f64) ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference <a name="ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective">AllEffective</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs">ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllEffective`<sup>Required</sup> <a name="AllEffective" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective"></a>

```go
func AllEffective() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs">ComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs</a>

---


### ComputeRegionInstanceGroupManagerStatusVersionTargetList <a name="ComputeRegionInstanceGroupManagerStatusVersionTargetList" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerStatusVersionTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionInstanceGroupManagerStatusVersionTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.get"></a>

```go
func Get(index *f64) ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference <a name="ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached">IsReached</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTarget">ComputeRegionInstanceGroupManagerStatusVersionTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsReached`<sup>Required</sup> <a name="IsReached" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached"></a>

```go
func IsReached() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceGroupManagerStatusVersionTarget
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerStatusVersionTarget">ComputeRegionInstanceGroupManagerStatusVersionTarget</a>

---


### ComputeRegionInstanceGroupManagerTimeoutsOutputReference <a name="ComputeRegionInstanceGroupManagerTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionInstanceGroupManagerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference <a name="ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerUpdatePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetInstanceRedistributionType">ResetInstanceRedistributionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed">ResetMaxSurgeFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent">ResetMaxSurgePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed">ResetMaxUnavailableFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent">ResetMaxUnavailablePercent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction">ResetMostDisruptiveAllowedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod">ResetReplacementMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetInstanceRedistributionType` <a name="ResetInstanceRedistributionType" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetInstanceRedistributionType"></a>

```go
func ResetInstanceRedistributionType()
```

##### `ResetMaxSurgeFixed` <a name="ResetMaxSurgeFixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgeFixed"></a>

```go
func ResetMaxSurgeFixed()
```

##### `ResetMaxSurgePercent` <a name="ResetMaxSurgePercent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxSurgePercent"></a>

```go
func ResetMaxSurgePercent()
```

##### `ResetMaxUnavailableFixed` <a name="ResetMaxUnavailableFixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailableFixed"></a>

```go
func ResetMaxUnavailableFixed()
```

##### `ResetMaxUnavailablePercent` <a name="ResetMaxUnavailablePercent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMaxUnavailablePercent"></a>

```go
func ResetMaxUnavailablePercent()
```

##### `ResetMostDisruptiveAllowedAction` <a name="ResetMostDisruptiveAllowedAction" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetMostDisruptiveAllowedAction"></a>

```go
func ResetMostDisruptiveAllowedAction()
```

##### `ResetReplacementMethod` <a name="ResetReplacementMethod" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resetReplacementMethod"></a>

```go
func ResetReplacementMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionTypeInput">InstanceRedistributionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput">MaxSurgeFixedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput">MaxSurgePercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput">MaxUnavailableFixedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput">MaxUnavailablePercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput">MinimalActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput">MostDisruptiveAllowedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput">ReplacementMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionType">InstanceRedistributionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed">MaxSurgeFixed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent">MaxSurgePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed">MaxUnavailableFixed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent">MaxUnavailablePercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction">MinimalAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction">MostDisruptiveAllowedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod">ReplacementMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy">ComputeRegionInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InstanceRedistributionTypeInput`<sup>Optional</sup> <a name="InstanceRedistributionTypeInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionTypeInput"></a>

```go
func InstanceRedistributionTypeInput() *string
```

- *Type:* *string

---

##### `MaxSurgeFixedInput`<sup>Optional</sup> <a name="MaxSurgeFixedInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixedInput"></a>

```go
func MaxSurgeFixedInput() *f64
```

- *Type:* *f64

---

##### `MaxSurgePercentInput`<sup>Optional</sup> <a name="MaxSurgePercentInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercentInput"></a>

```go
func MaxSurgePercentInput() *f64
```

- *Type:* *f64

---

##### `MaxUnavailableFixedInput`<sup>Optional</sup> <a name="MaxUnavailableFixedInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixedInput"></a>

```go
func MaxUnavailableFixedInput() *f64
```

- *Type:* *f64

---

##### `MaxUnavailablePercentInput`<sup>Optional</sup> <a name="MaxUnavailablePercentInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercentInput"></a>

```go
func MaxUnavailablePercentInput() *f64
```

- *Type:* *f64

---

##### `MinimalActionInput`<sup>Optional</sup> <a name="MinimalActionInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalActionInput"></a>

```go
func MinimalActionInput() *string
```

- *Type:* *string

---

##### `MostDisruptiveAllowedActionInput`<sup>Optional</sup> <a name="MostDisruptiveAllowedActionInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedActionInput"></a>

```go
func MostDisruptiveAllowedActionInput() *string
```

- *Type:* *string

---

##### `ReplacementMethodInput`<sup>Optional</sup> <a name="ReplacementMethodInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethodInput"></a>

```go
func ReplacementMethodInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `InstanceRedistributionType`<sup>Required</sup> <a name="InstanceRedistributionType" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionType"></a>

```go
func InstanceRedistributionType() *string
```

- *Type:* *string

---

##### `MaxSurgeFixed`<sup>Required</sup> <a name="MaxSurgeFixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed"></a>

```go
func MaxSurgeFixed() *f64
```

- *Type:* *f64

---

##### `MaxSurgePercent`<sup>Required</sup> <a name="MaxSurgePercent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent"></a>

```go
func MaxSurgePercent() *f64
```

- *Type:* *f64

---

##### `MaxUnavailableFixed`<sup>Required</sup> <a name="MaxUnavailableFixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed"></a>

```go
func MaxUnavailableFixed() *f64
```

- *Type:* *f64

---

##### `MaxUnavailablePercent`<sup>Required</sup> <a name="MaxUnavailablePercent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent"></a>

```go
func MaxUnavailablePercent() *f64
```

- *Type:* *f64

---

##### `MinimalAction`<sup>Required</sup> <a name="MinimalAction" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction"></a>

```go
func MinimalAction() *string
```

- *Type:* *string

---

##### `MostDisruptiveAllowedAction`<sup>Required</sup> <a name="MostDisruptiveAllowedAction" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction"></a>

```go
func MostDisruptiveAllowedAction() *string
```

- *Type:* *string

---

##### `ReplacementMethod`<sup>Required</sup> <a name="ReplacementMethod" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod"></a>

```go
func ReplacementMethod() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceGroupManagerUpdatePolicy
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerUpdatePolicy">ComputeRegionInstanceGroupManagerUpdatePolicy</a>

---


### ComputeRegionInstanceGroupManagerVersionList <a name="ComputeRegionInstanceGroupManagerVersionList" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerVersionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionInstanceGroupManagerVersionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.get"></a>

```go
func Get(index *f64) ComputeRegionInstanceGroupManagerVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceGroupManagerVersionOutputReference <a name="ComputeRegionInstanceGroupManagerVersionOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionInstanceGroupManagerVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.putTargetSize">PutTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.resetTargetSize">ResetTargetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetSize` <a name="PutTargetSize" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.putTargetSize"></a>

```go
func PutTargetSize(value ComputeRegionInstanceGroupManagerVersionTargetSize)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.putTargetSize.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize">ComputeRegionInstanceGroupManagerVersionTargetSize</a>

---

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetTargetSize` <a name="ResetTargetSize" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.resetTargetSize"></a>

```go
func ResetTargetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSize">TargetSize</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference">ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput">InstanceTemplateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSizeInput">TargetSizeInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize">ComputeRegionInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplate">InstanceTemplate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetSize`<sup>Required</sup> <a name="TargetSize" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSize"></a>

```go
func TargetSize() ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference">ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference</a>

---

##### `InstanceTemplateInput`<sup>Optional</sup> <a name="InstanceTemplateInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplateInput"></a>

```go
func InstanceTemplateInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TargetSizeInput`<sup>Optional</sup> <a name="TargetSizeInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSizeInput"></a>

```go
func TargetSizeInput() ComputeRegionInstanceGroupManagerVersionTargetSize
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize">ComputeRegionInstanceGroupManagerVersionTargetSize</a>

---

##### `InstanceTemplate`<sup>Required</sup> <a name="InstanceTemplate" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplate"></a>

```go
func InstanceTemplate() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference <a name="ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computeregioninstancegroupmanager"

computeregioninstancegroupmanager.NewComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed">ResetFixed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent">ResetPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixed` <a name="ResetFixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resetFixed"></a>

```go
func ResetFixed()
```

##### `ResetPercent` <a name="ResetPercent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resetPercent"></a>

```go
func ResetPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput">FixedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput">PercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed">Fixed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percent">Percent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize">ComputeRegionInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FixedInput`<sup>Optional</sup> <a name="FixedInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixedInput"></a>

```go
func FixedInput() *f64
```

- *Type:* *f64

---

##### `PercentInput`<sup>Optional</sup> <a name="PercentInput" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percentInput"></a>

```go
func PercentInput() *f64
```

- *Type:* *f64

---

##### `Fixed`<sup>Required</sup> <a name="Fixed" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed"></a>

```go
func Fixed() *f64
```

- *Type:* *f64

---

##### `Percent`<sup>Required</sup> <a name="Percent" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percent"></a>

```go
func Percent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionInstanceGroupManagerVersionTargetSize
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionInstanceGroupManager.ComputeRegionInstanceGroupManagerVersionTargetSize">ComputeRegionInstanceGroupManagerVersionTargetSize</a>

---



