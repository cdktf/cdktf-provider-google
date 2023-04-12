# `computeTargetPool` Submodule <a name="`computeTargetPool` Submodule" id="@cdktf/provider-google.computeTargetPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeTargetPool <a name="ComputeTargetPool" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool google_compute_target_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computetargetpool"

computetargetpool.NewComputeTargetPool(scope Construct, id *string, config ComputeTargetPoolConfig) ComputeTargetPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig">ComputeTargetPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig">ComputeTargetPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetBackupPool">ResetBackupPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetFailoverRatio">ResetFailoverRatio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetHealthChecks">ResetHealthChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetInstances">ResetInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetSessionAffinity">ResetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.putTimeouts"></a>

```go
func PutTimeouts(value ComputeTargetPoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeouts">ComputeTargetPoolTimeouts</a>

---

##### `ResetBackupPool` <a name="ResetBackupPool" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetBackupPool"></a>

```go
func ResetBackupPool()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFailoverRatio` <a name="ResetFailoverRatio" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetFailoverRatio"></a>

```go
func ResetFailoverRatio()
```

##### `ResetHealthChecks` <a name="ResetHealthChecks" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetHealthChecks"></a>

```go
func ResetHealthChecks()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetId"></a>

```go
func ResetId()
```

##### `ResetInstances` <a name="ResetInstances" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetInstances"></a>

```go
func ResetInstances()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSessionAffinity` <a name="ResetSessionAffinity" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetSessionAffinity"></a>

```go
func ResetSessionAffinity()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computetargetpool"

computetargetpool.ComputeTargetPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computetargetpool"

computetargetpool.ComputeTargetPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computetargetpool"

computetargetpool.ComputeTargetPool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference">ComputeTargetPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.backupPoolInput">BackupPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.failoverRatioInput">FailoverRatioInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.healthChecksInput">HealthChecksInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.instancesInput">InstancesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.sessionAffinityInput">SessionAffinityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.backupPool">BackupPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.failoverRatio">FailoverRatio</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.healthChecks">HealthChecks</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.instances">Instances</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.sessionAffinity">SessionAffinity</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.timeouts"></a>

```go
func Timeouts() ComputeTargetPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference">ComputeTargetPoolTimeoutsOutputReference</a>

---

##### `BackupPoolInput`<sup>Optional</sup> <a name="BackupPoolInput" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.backupPoolInput"></a>

```go
func BackupPoolInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FailoverRatioInput`<sup>Optional</sup> <a name="FailoverRatioInput" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.failoverRatioInput"></a>

```go
func FailoverRatioInput() *f64
```

- *Type:* *f64

---

##### `HealthChecksInput`<sup>Optional</sup> <a name="HealthChecksInput" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.healthChecksInput"></a>

```go
func HealthChecksInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstancesInput`<sup>Optional</sup> <a name="InstancesInput" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.instancesInput"></a>

```go
func InstancesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SessionAffinityInput`<sup>Optional</sup> <a name="SessionAffinityInput" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.sessionAffinityInput"></a>

```go
func SessionAffinityInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BackupPool`<sup>Required</sup> <a name="BackupPool" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.backupPool"></a>

```go
func BackupPool() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FailoverRatio`<sup>Required</sup> <a name="FailoverRatio" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.failoverRatio"></a>

```go
func FailoverRatio() *f64
```

- *Type:* *f64

---

##### `HealthChecks`<sup>Required</sup> <a name="HealthChecks" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.healthChecks"></a>

```go
func HealthChecks() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instances`<sup>Required</sup> <a name="Instances" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.instances"></a>

```go
func Instances() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SessionAffinity`<sup>Required</sup> <a name="SessionAffinity" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.sessionAffinity"></a>

```go
func SessionAffinity() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeTargetPoolConfig <a name="ComputeTargetPoolConfig" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computetargetpool"

&computetargetpool.ComputeTargetPoolConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	BackupPool: *string,
	Description: *string,
	FailoverRatio: *f64,
	HealthChecks: *[]*string,
	Id: *string,
	Instances: *[]*string,
	Project: *string,
	Region: *string,
	SessionAffinity: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.computeTargetPool.ComputeTargetPoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.name">Name</a></code> | <code>*string</code> | A unique name for the resource, required by GCE. Changing this forces a new resource to be created. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.backupPool">BackupPool</a></code> | <code>*string</code> | URL to the backup target pool. Must also set failover_ratio. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.description">Description</a></code> | <code>*string</code> | Textual description field. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.failoverRatio">FailoverRatio</a></code> | <code>*f64</code> | Ratio (0 to 1) of failed nodes before using the backup pool (which must also be set). |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.healthChecks">HealthChecks</a></code> | <code>*[]*string</code> | List of zero or one health check name or self_link. Only legacy google_compute_http_health_check is supported. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#id ComputeTargetPool#id}. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.instances">Instances</a></code> | <code>*[]*string</code> | List of instances in the pool. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.region">Region</a></code> | <code>*string</code> | Where the target pool resides. Defaults to project region. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.sessionAffinity">SessionAffinity</a></code> | <code>*string</code> | How to distribute load. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeouts">ComputeTargetPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A unique name for the resource, required by GCE. Changing this forces a new resource to be created.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#name ComputeTargetPool#name}

---

##### `BackupPool`<sup>Optional</sup> <a name="BackupPool" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.backupPool"></a>

```go
BackupPool *string
```

- *Type:* *string

URL to the backup target pool. Must also set failover_ratio.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#backup_pool ComputeTargetPool#backup_pool}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Textual description field.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#description ComputeTargetPool#description}

---

##### `FailoverRatio`<sup>Optional</sup> <a name="FailoverRatio" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.failoverRatio"></a>

```go
FailoverRatio *f64
```

- *Type:* *f64

Ratio (0 to 1) of failed nodes before using the backup pool (which must also be set).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#failover_ratio ComputeTargetPool#failover_ratio}

---

##### `HealthChecks`<sup>Optional</sup> <a name="HealthChecks" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.healthChecks"></a>

```go
HealthChecks *[]*string
```

- *Type:* *[]*string

List of zero or one health check name or self_link. Only legacy google_compute_http_health_check is supported.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#health_checks ComputeTargetPool#health_checks}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#id ComputeTargetPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Instances`<sup>Optional</sup> <a name="Instances" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.instances"></a>

```go
Instances *[]*string
```

- *Type:* *[]*string

List of instances in the pool.

They can be given as URLs, or in the form of "zone/name". Note that the instances need not exist at the time of target pool creation, so there is no need to use the Terraform interpolators to create a dependency on the instances from the target pool.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#instances ComputeTargetPool#instances}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#project ComputeTargetPool#project}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Where the target pool resides. Defaults to project region.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#region ComputeTargetPool#region}

---

##### `SessionAffinity`<sup>Optional</sup> <a name="SessionAffinity" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.sessionAffinity"></a>

```go
SessionAffinity *string
```

- *Type:* *string

How to distribute load.

Options are "NONE" (no affinity). "CLIENT_IP" (hash of the source/dest addresses / ports), and "CLIENT_IP_PROTO" also includes the protocol (default "NONE").

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#session_affinity ComputeTargetPool#session_affinity}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolConfig.property.timeouts"></a>

```go
Timeouts ComputeTargetPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeouts">ComputeTargetPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#timeouts ComputeTargetPool#timeouts}

---

### ComputeTargetPoolTimeouts <a name="ComputeTargetPoolTimeouts" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computetargetpool"

&computetargetpool.ComputeTargetPoolTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#create ComputeTargetPool#create}. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#delete ComputeTargetPool#delete}. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#update ComputeTargetPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#create ComputeTargetPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#delete ComputeTargetPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/compute_target_pool#update ComputeTargetPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeTargetPoolTimeoutsOutputReference <a name="ComputeTargetPoolTimeoutsOutputReference" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/computetargetpool"

computetargetpool.NewComputeTargetPoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeTargetPoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeTargetPool.ComputeTargetPoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



