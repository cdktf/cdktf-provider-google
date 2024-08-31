# `networkConnectivityInternalRange` Submodule <a name="`networkConnectivityInternalRange` Submodule" id="@cdktf/provider-google.networkConnectivityInternalRange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityInternalRange <a name="NetworkConnectivityInternalRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range google_network_connectivity_internal_range}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityinternalrange"

networkconnectivityinternalrange.NewNetworkConnectivityInternalRange(scope Construct, id *string, config NetworkConnectivityInternalRangeConfig) NetworkConnectivityInternalRange
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig">NetworkConnectivityInternalRangeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig">NetworkConnectivityInternalRangeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetIpCidrRange">ResetIpCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetOverlaps">ResetOverlaps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetPrefixLength">ResetPrefixLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetTargetCidrRange">ResetTargetCidrRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.putTimeouts"></a>

```go
func PutTimeouts(value NetworkConnectivityInternalRangeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetId"></a>

```go
func ResetId()
```

##### `ResetIpCidrRange` <a name="ResetIpCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetIpCidrRange"></a>

```go
func ResetIpCidrRange()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetOverlaps` <a name="ResetOverlaps" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetOverlaps"></a>

```go
func ResetOverlaps()
```

##### `ResetPrefixLength` <a name="ResetPrefixLength" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetPrefixLength"></a>

```go
func ResetPrefixLength()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTargetCidrRange` <a name="ResetTargetCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetTargetCidrRange"></a>

```go
func ResetTargetCidrRange()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkConnectivityInternalRange resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityinternalrange"

networkconnectivityinternalrange.NetworkConnectivityInternalRange_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityinternalrange"

networkconnectivityinternalrange.NetworkConnectivityInternalRange_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityinternalrange"

networkconnectivityinternalrange.NetworkConnectivityInternalRange_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityinternalrange"

networkconnectivityinternalrange.NetworkConnectivityInternalRange_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkConnectivityInternalRange resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkConnectivityInternalRange to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkConnectivityInternalRange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityInternalRange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference">NetworkConnectivityInternalRangeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.users">Users</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.ipCidrRangeInput">IpCidrRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.networkInput">NetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.overlapsInput">OverlapsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.peeringInput">PeeringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.prefixLengthInput">PrefixLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.targetCidrRangeInput">TargetCidrRangeInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.usageInput">UsageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.overlaps">Overlaps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.peering">Peering</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.prefixLength">PrefixLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.targetCidrRange">TargetCidrRange</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.usage">Usage</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.timeouts"></a>

```go
func Timeouts() NetworkConnectivityInternalRangeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference">NetworkConnectivityInternalRangeTimeoutsOutputReference</a>

---

##### `Users`<sup>Required</sup> <a name="Users" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.users"></a>

```go
func Users() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpCidrRangeInput`<sup>Optional</sup> <a name="IpCidrRangeInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.ipCidrRangeInput"></a>

```go
func IpCidrRangeInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.networkInput"></a>

```go
func NetworkInput() *string
```

- *Type:* *string

---

##### `OverlapsInput`<sup>Optional</sup> <a name="OverlapsInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.overlapsInput"></a>

```go
func OverlapsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PeeringInput`<sup>Optional</sup> <a name="PeeringInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.peeringInput"></a>

```go
func PeeringInput() *string
```

- *Type:* *string

---

##### `PrefixLengthInput`<sup>Optional</sup> <a name="PrefixLengthInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.prefixLengthInput"></a>

```go
func PrefixLengthInput() *f64
```

- *Type:* *f64

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TargetCidrRangeInput`<sup>Optional</sup> <a name="TargetCidrRangeInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.targetCidrRangeInput"></a>

```go
func TargetCidrRangeInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UsageInput`<sup>Optional</sup> <a name="UsageInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.usageInput"></a>

```go
func UsageInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.ipCidrRange"></a>

```go
func IpCidrRange() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `Overlaps`<sup>Required</sup> <a name="Overlaps" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.overlaps"></a>

```go
func Overlaps() *[]*string
```

- *Type:* *[]*string

---

##### `Peering`<sup>Required</sup> <a name="Peering" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.peering"></a>

```go
func Peering() *string
```

- *Type:* *string

---

##### `PrefixLength`<sup>Required</sup> <a name="PrefixLength" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.prefixLength"></a>

```go
func PrefixLength() *f64
```

- *Type:* *f64

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `TargetCidrRange`<sup>Required</sup> <a name="TargetCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.targetCidrRange"></a>

```go
func TargetCidrRange() *[]*string
```

- *Type:* *[]*string

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.usage"></a>

```go
func Usage() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRange.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityInternalRangeConfig <a name="NetworkConnectivityInternalRangeConfig" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityinternalrange"

&networkconnectivityinternalrange.NetworkConnectivityInternalRangeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Network: *string,
	Peering: *string,
	Usage: *string,
	Description: *string,
	Id: *string,
	IpCidrRange: *string,
	Labels: *map[string]*string,
	Overlaps: *[]*string,
	PrefixLength: *f64,
	Project: *string,
	TargetCidrRange: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.name">Name</a></code> | <code>*string</code> | The name of the policy based route. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.network">Network</a></code> | <code>*string</code> | Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.peering">Peering</a></code> | <code>*string</code> | The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.usage">Usage</a></code> | <code>*string</code> | The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#id NetworkConnectivityInternalRange#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | The IP range that this internal range defines. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.overlaps">Overlaps</a></code> | <code>*[]*string</code> | Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"]. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.prefixLength">PrefixLength</a></code> | <code>*f64</code> | An alternate to ipCidrRange. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#project NetworkConnectivityInternalRange#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.targetCidrRange">TargetCidrRange</a></code> | <code>*[]*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the policy based route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#name NetworkConnectivityInternalRange#name}

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.network"></a>

```go
Network *string
```

- *Type:* *string

Fully-qualified URL of the network that this route applies to, for example: projects/my-project/global/networks/my-network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#network NetworkConnectivityInternalRange#network}

---

##### `Peering`<sup>Required</sup> <a name="Peering" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.peering"></a>

```go
Peering *string
```

- *Type:* *string

The type of peering set for this internal range. Possible values: ["FOR_SELF", "FOR_PEER", "NOT_SHARED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#peering NetworkConnectivityInternalRange#peering}

---

##### `Usage`<sup>Required</sup> <a name="Usage" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.usage"></a>

```go
Usage *string
```

- *Type:* *string

The type of usage set for this InternalRange. Possible values: ["FOR_VPC", "EXTERNAL_TO_VPC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#usage NetworkConnectivityInternalRange#usage}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#description NetworkConnectivityInternalRange#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#id NetworkConnectivityInternalRange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpCidrRange`<sup>Optional</sup> <a name="IpCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.ipCidrRange"></a>

```go
IpCidrRange *string
```

- *Type:* *string

The IP range that this internal range defines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#ip_cidr_range NetworkConnectivityInternalRange#ip_cidr_range}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#labels NetworkConnectivityInternalRange#labels}

---

##### `Overlaps`<sup>Optional</sup> <a name="Overlaps" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.overlaps"></a>

```go
Overlaps *[]*string
```

- *Type:* *[]*string

Optional. Types of resources that are allowed to overlap with the current internal range. Possible values: ["OVERLAP_ROUTE_RANGE", "OVERLAP_EXISTING_SUBNET_RANGE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#overlaps NetworkConnectivityInternalRange#overlaps}

---

##### `PrefixLength`<sup>Optional</sup> <a name="PrefixLength" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.prefixLength"></a>

```go
PrefixLength *f64
```

- *Type:* *f64

An alternate to ipCidrRange.

Can be set when trying to create a reservation that automatically finds a free range of the given size.
If both ipCidrRange and prefixLength are set, there is an error if the range sizes do not match. Can also be used during updates to change the range size.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#prefix_length NetworkConnectivityInternalRange#prefix_length}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#project NetworkConnectivityInternalRange#project}.

---

##### `TargetCidrRange`<sup>Optional</sup> <a name="TargetCidrRange" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.targetCidrRange"></a>

```go
TargetCidrRange *[]*string
```

- *Type:* *[]*string

Optional.

Can be set to narrow down or pick a different address space while searching for a free range.
If not set, defaults to the "10.0.0.0/8" address space. This can be used to search in other rfc-1918 address spaces like "172.16.0.0/12" and "192.168.0.0/16" or non-rfc-1918 address spaces used in the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#target_cidr_range NetworkConnectivityInternalRange#target_cidr_range}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeConfig.property.timeouts"></a>

```go
Timeouts NetworkConnectivityInternalRangeTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts">NetworkConnectivityInternalRangeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#timeouts NetworkConnectivityInternalRange#timeouts}

---

### NetworkConnectivityInternalRangeTimeouts <a name="NetworkConnectivityInternalRangeTimeouts" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityinternalrange"

&networkconnectivityinternalrange.NetworkConnectivityInternalRangeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#create NetworkConnectivityInternalRange#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#delete NetworkConnectivityInternalRange#delete}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#update NetworkConnectivityInternalRange#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#create NetworkConnectivityInternalRange#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#delete NetworkConnectivityInternalRange#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/network_connectivity_internal_range#update NetworkConnectivityInternalRange#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityInternalRangeTimeoutsOutputReference <a name="NetworkConnectivityInternalRangeTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/networkconnectivityinternalrange"

networkconnectivityinternalrange.NewNetworkConnectivityInternalRangeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkConnectivityInternalRangeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkConnectivityInternalRange.NetworkConnectivityInternalRangeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



