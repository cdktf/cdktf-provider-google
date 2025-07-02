# `netappStoragePool` Submodule <a name="`netappStoragePool` Submodule" id="@cdktf/provider-google.netappStoragePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappStoragePool <a name="NetappStoragePool" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool google_netapp_storage_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/netappstoragepool"

netappstoragepool.NewNetappStoragePool(scope Construct, id *string, config NetappStoragePoolConfig) NetappStoragePool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig">NetappStoragePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig">NetappStoragePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetActiveDirectory">ResetActiveDirectory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetAllowAutoTiering">ResetAllowAutoTiering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetCustomPerformanceEnabled">ResetCustomPerformanceEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetKmsConfig">ResetKmsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetLdapEnabled">ResetLdapEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetReplicaZone">ResetReplicaZone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetTotalIops">ResetTotalIops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetTotalThroughputMibps">ResetTotalThroughputMibps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.putTimeouts"></a>

```go
func PutTimeouts(value NetappStoragePoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>

---

##### `ResetActiveDirectory` <a name="ResetActiveDirectory" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetActiveDirectory"></a>

```go
func ResetActiveDirectory()
```

##### `ResetAllowAutoTiering` <a name="ResetAllowAutoTiering" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetAllowAutoTiering"></a>

```go
func ResetAllowAutoTiering()
```

##### `ResetCustomPerformanceEnabled` <a name="ResetCustomPerformanceEnabled" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetCustomPerformanceEnabled"></a>

```go
func ResetCustomPerformanceEnabled()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsConfig` <a name="ResetKmsConfig" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetKmsConfig"></a>

```go
func ResetKmsConfig()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLdapEnabled` <a name="ResetLdapEnabled" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetLdapEnabled"></a>

```go
func ResetLdapEnabled()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetProject"></a>

```go
func ResetProject()
```

##### `ResetReplicaZone` <a name="ResetReplicaZone" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetReplicaZone"></a>

```go
func ResetReplicaZone()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTotalIops` <a name="ResetTotalIops" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetTotalIops"></a>

```go
func ResetTotalIops()
```

##### `ResetTotalThroughputMibps` <a name="ResetTotalThroughputMibps" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetTotalThroughputMibps"></a>

```go
func ResetTotalThroughputMibps()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetappStoragePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/netappstoragepool"

netappstoragepool.NetappStoragePool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/netappstoragepool"

netappstoragepool.NetappStoragePool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/netappstoragepool"

netappstoragepool.NetappStoragePool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/netappstoragepool"

netappstoragepool.NetappStoragePool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetappStoragePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetappStoragePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetappStoragePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetappStoragePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.encryptionType">EncryptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference">NetappStoragePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.volumeCapacityGib">VolumeCapacityGib</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.volumeCount">VolumeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectoryInput">ActiveDirectoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.allowAutoTieringInput">AllowAutoTieringInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.capacityGibInput">CapacityGibInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.customPerformanceEnabledInput">CustomPerformanceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfigInput">KmsConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabledInput">LdapEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.replicaZoneInput">ReplicaZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevelInput">ServiceLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.totalIopsInput">TotalIopsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.totalThroughputMibpsInput">TotalThroughputMibpsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectory">ActiveDirectory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.allowAutoTiering">AllowAutoTiering</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.capacityGib">CapacityGib</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.customPerformanceEnabled">CustomPerformanceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfig">KmsConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabled">LdapEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.replicaZone">ReplicaZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevel">ServiceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.totalIops">TotalIops</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.totalThroughputMibps">TotalThroughputMibps</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EncryptionType`<sup>Required</sup> <a name="EncryptionType" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.encryptionType"></a>

```go
func EncryptionType() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.timeouts"></a>

```go
func Timeouts() NetappStoragePoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference">NetappStoragePoolTimeoutsOutputReference</a>

---

##### `VolumeCapacityGib`<sup>Required</sup> <a name="VolumeCapacityGib" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.volumeCapacityGib"></a>

```go
func VolumeCapacityGib() *string
```

- *Type:* *string

---

##### `VolumeCount`<sup>Required</sup> <a name="VolumeCount" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.volumeCount"></a>

```go
func VolumeCount() *f64
```

- *Type:* *f64

---

##### `ActiveDirectoryInput`<sup>Optional</sup> <a name="ActiveDirectoryInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectoryInput"></a>

```go
func ActiveDirectoryInput() *string
```

- *Type:* *string

---

##### `AllowAutoTieringInput`<sup>Optional</sup> <a name="AllowAutoTieringInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.allowAutoTieringInput"></a>

```go
func AllowAutoTieringInput() interface{}
```

- *Type:* interface{}

---

##### `CapacityGibInput`<sup>Optional</sup> <a name="CapacityGibInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.capacityGibInput"></a>

```go
func CapacityGibInput() *string
```

- *Type:* *string

---

##### `CustomPerformanceEnabledInput`<sup>Optional</sup> <a name="CustomPerformanceEnabledInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.customPerformanceEnabledInput"></a>

```go
func CustomPerformanceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsConfigInput`<sup>Optional</sup> <a name="KmsConfigInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfigInput"></a>

```go
func KmsConfigInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LdapEnabledInput`<sup>Optional</sup> <a name="LdapEnabledInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabledInput"></a>

```go
func LdapEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ReplicaZoneInput`<sup>Optional</sup> <a name="ReplicaZoneInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.replicaZoneInput"></a>

```go
func ReplicaZoneInput() *string
```

- *Type:* *string

---

##### `ServiceLevelInput`<sup>Optional</sup> <a name="ServiceLevelInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevelInput"></a>

```go
func ServiceLevelInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TotalIopsInput`<sup>Optional</sup> <a name="TotalIopsInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.totalIopsInput"></a>

```go
func TotalIopsInput() *string
```

- *Type:* *string

---

##### `TotalThroughputMibpsInput`<sup>Optional</sup> <a name="TotalThroughputMibpsInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.totalThroughputMibpsInput"></a>

```go
func TotalThroughputMibpsInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `ActiveDirectory`<sup>Required</sup> <a name="ActiveDirectory" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.activeDirectory"></a>

```go
func ActiveDirectory() *string
```

- *Type:* *string

---

##### `AllowAutoTiering`<sup>Required</sup> <a name="AllowAutoTiering" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.allowAutoTiering"></a>

```go
func AllowAutoTiering() interface{}
```

- *Type:* interface{}

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.capacityGib"></a>

```go
func CapacityGib() *string
```

- *Type:* *string

---

##### `CustomPerformanceEnabled`<sup>Required</sup> <a name="CustomPerformanceEnabled" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.customPerformanceEnabled"></a>

```go
func CustomPerformanceEnabled() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsConfig`<sup>Required</sup> <a name="KmsConfig" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.kmsConfig"></a>

```go
func KmsConfig() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LdapEnabled`<sup>Required</sup> <a name="LdapEnabled" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.ldapEnabled"></a>

```go
func LdapEnabled() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ReplicaZone`<sup>Required</sup> <a name="ReplicaZone" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.replicaZone"></a>

```go
func ReplicaZone() *string
```

- *Type:* *string

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.serviceLevel"></a>

```go
func ServiceLevel() *string
```

- *Type:* *string

---

##### `TotalIops`<sup>Required</sup> <a name="TotalIops" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.totalIops"></a>

```go
func TotalIops() *string
```

- *Type:* *string

---

##### `TotalThroughputMibps`<sup>Required</sup> <a name="TotalThroughputMibps" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.totalThroughputMibps"></a>

```go
func TotalThroughputMibps() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.netappStoragePool.NetappStoragePool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappStoragePoolConfig <a name="NetappStoragePoolConfig" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/netappstoragepool"

&netappstoragepool.NetappStoragePoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CapacityGib: *string,
	Location: *string,
	Name: *string,
	Network: *string,
	ServiceLevel: *string,
	ActiveDirectory: *string,
	AllowAutoTiering: interface{},
	CustomPerformanceEnabled: interface{},
	Description: *string,
	Id: *string,
	KmsConfig: *string,
	Labels: *map[string]*string,
	LdapEnabled: interface{},
	Project: *string,
	ReplicaZone: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.netappStoragePool.NetappStoragePoolTimeouts,
	TotalIops: *string,
	TotalThroughputMibps: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.capacityGib">CapacityGib</a></code> | <code>*string</code> | Capacity of the storage pool (in GiB). |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.location">Location</a></code> | <code>*string</code> | Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of the storage pool. Needs to be unique per location/region. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.network">Network</a></code> | <code>*string</code> | VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.serviceLevel">ServiceLevel</a></code> | <code>*string</code> | Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"]. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.activeDirectory">ActiveDirectory</a></code> | <code>*string</code> | Specifies the Active Directory policy to be used. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.allowAutoTiering">AllowAutoTiering</a></code> | <code>interface{}</code> | Optional. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.customPerformanceEnabled">CustomPerformanceEnabled</a></code> | <code>interface{}</code> | Optional. True if using Independent Scaling of capacity and performance (Hyperdisk). Default is false. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#id NetappStoragePool#id}. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.kmsConfig">KmsConfig</a></code> | <code>*string</code> | Specifies the CMEK policy to be used for volume encryption. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.ldapEnabled">LdapEnabled</a></code> | <code>interface{}</code> | When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#project NetappStoragePool#project}. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.replicaZone">ReplicaZone</a></code> | <code>*string</code> | Specifies the replica zone for regional Flex pools. 'zone' and 'replica_zone' values can be swapped to initiate a [zone switch](https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/edit-or-delete-storage-pool#switch_active_and_replica_zones). |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.totalIops">TotalIops</a></code> | <code>*string</code> | Optional. Custom Performance Total IOPS of the pool If not provided, it will be calculated based on the totalThroughputMibps. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.totalThroughputMibps">TotalThroughputMibps</a></code> | <code>*string</code> | Optional. Custom Performance Total Throughput of the pool (in MiB/s). |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.zone">Zone</a></code> | <code>*string</code> | Specifies the active zone for regional Flex pools. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CapacityGib`<sup>Required</sup> <a name="CapacityGib" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.capacityGib"></a>

```go
CapacityGib *string
```

- *Type:* *string

Capacity of the storage pool (in GiB).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#capacity_gib NetappStoragePool#capacity_gib}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Name of the location. For zonal Flex pools specify a zone name, in all other cases a region name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#location NetappStoragePool#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the storage pool. Needs to be unique per location/region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#name NetappStoragePool#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

VPC network name with format: 'projects/{{project}}/global/networks/{{network}}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#network NetappStoragePool#network}

---

##### `ServiceLevel`<sup>Required</sup> <a name="ServiceLevel" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.serviceLevel"></a>

```go
ServiceLevel *string
```

- *Type:* *string

Service level of the storage pool. Possible values: ["PREMIUM", "EXTREME", "STANDARD", "FLEX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#service_level NetappStoragePool#service_level}

---

##### `ActiveDirectory`<sup>Optional</sup> <a name="ActiveDirectory" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.activeDirectory"></a>

```go
ActiveDirectory *string
```

- *Type:* *string

Specifies the Active Directory policy to be used.

Format: 'projects/{{project}}/locations/{{location}}/activeDirectories/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#active_directory NetappStoragePool#active_directory}

---

##### `AllowAutoTiering`<sup>Optional</sup> <a name="AllowAutoTiering" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.allowAutoTiering"></a>

```go
AllowAutoTiering interface{}
```

- *Type:* interface{}

Optional.

True if the storage pool supports Auto Tiering enabled volumes. Default is false.
Auto-tiering can be enabled after storage pool creation but it can't be disabled once enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#allow_auto_tiering NetappStoragePool#allow_auto_tiering}

---

##### `CustomPerformanceEnabled`<sup>Optional</sup> <a name="CustomPerformanceEnabled" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.customPerformanceEnabled"></a>

```go
CustomPerformanceEnabled interface{}
```

- *Type:* interface{}

Optional. True if using Independent Scaling of capacity and performance (Hyperdisk). Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#custom_performance_enabled NetappStoragePool#custom_performance_enabled}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#description NetappStoragePool#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#id NetappStoragePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsConfig`<sup>Optional</sup> <a name="KmsConfig" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.kmsConfig"></a>

```go
KmsConfig *string
```

- *Type:* *string

Specifies the CMEK policy to be used for volume encryption.

Format: 'projects/{{project}}/locations/{{location}}/kmsConfigs/{{name}}'.
The policy needs to be in the same location as the storage pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#kms_config NetappStoragePool#kms_config}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#labels NetappStoragePool#labels}

---

##### `LdapEnabled`<sup>Optional</sup> <a name="LdapEnabled" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.ldapEnabled"></a>

```go
LdapEnabled interface{}
```

- *Type:* interface{}

When enabled, the volumes uses Active Directory as LDAP name service for UID/GID lookups.

Required to enable extended group support for NFSv3,
using security identifiers for NFSv4.1 or principal names for kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#ldap_enabled NetappStoragePool#ldap_enabled}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#project NetappStoragePool#project}.

---

##### `ReplicaZone`<sup>Optional</sup> <a name="ReplicaZone" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.replicaZone"></a>

```go
ReplicaZone *string
```

- *Type:* *string

Specifies the replica zone for regional Flex pools. 'zone' and 'replica_zone' values can be swapped to initiate a [zone switch](https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/edit-or-delete-storage-pool#switch_active_and_replica_zones).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#replica_zone NetappStoragePool#replica_zone}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.timeouts"></a>

```go
Timeouts NetappStoragePoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts">NetappStoragePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#timeouts NetappStoragePool#timeouts}

---

##### `TotalIops`<sup>Optional</sup> <a name="TotalIops" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.totalIops"></a>

```go
TotalIops *string
```

- *Type:* *string

Optional. Custom Performance Total IOPS of the pool If not provided, it will be calculated based on the totalThroughputMibps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#total_iops NetappStoragePool#total_iops}

---

##### `TotalThroughputMibps`<sup>Optional</sup> <a name="TotalThroughputMibps" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.totalThroughputMibps"></a>

```go
TotalThroughputMibps *string
```

- *Type:* *string

Optional. Custom Performance Total Throughput of the pool (in MiB/s).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#total_throughput_mibps NetappStoragePool#total_throughput_mibps}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Specifies the active zone for regional Flex pools.

'zone' and 'replica_zone' values can be swapped to initiate a
[zone switch](https://cloud.google.com/netapp/volumes/docs/configure-and-use/storage-pools/edit-or-delete-storage-pool#switch_active_and_replica_zones).
If you want to create a zonal Flex pool, specify a zone name for 'location' and omit 'zone'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#zone NetappStoragePool#zone}

---

### NetappStoragePoolTimeouts <a name="NetappStoragePoolTimeouts" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/netappstoragepool"

&netappstoragepool.NetappStoragePoolTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#create NetappStoragePool#create}. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#delete NetappStoragePool#delete}. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#update NetappStoragePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#create NetappStoragePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#delete NetappStoragePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.42.0/docs/resources/netapp_storage_pool#update NetappStoragePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappStoragePoolTimeoutsOutputReference <a name="NetappStoragePoolTimeoutsOutputReference" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/netappstoragepool"

netappstoragepool.NewNetappStoragePoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappStoragePoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappStoragePool.NetappStoragePoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



