# `networkServicesGrpcRoute` Submodule <a name="`networkServicesGrpcRoute` Submodule" id="@cdktf/provider-google.networkServicesGrpcRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesGrpcRoute <a name="NetworkServicesGrpcRoute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route google_network_services_grpc_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NewNetworkServicesGrpcRoute(scope Construct, id *string, config NetworkServicesGrpcRouteConfig) NetworkServicesGrpcRoute
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig">NetworkServicesGrpcRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig">NetworkServicesGrpcRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetGateways">ResetGateways</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetMeshes">ResetMeshes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putTimeouts"></a>

```go
func PutTimeouts(value NetworkServicesGrpcRouteTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts">NetworkServicesGrpcRouteTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGateways` <a name="ResetGateways" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetGateways"></a>

```go
func ResetGateways()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetMeshes` <a name="ResetMeshes" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetMeshes"></a>

```go
func ResetMeshes()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkServicesGrpcRoute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NetworkServicesGrpcRoute_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NetworkServicesGrpcRoute_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NetworkServicesGrpcRoute_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NetworkServicesGrpcRoute_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetworkServicesGrpcRoute resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkServicesGrpcRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkServicesGrpcRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesGrpcRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList">NetworkServicesGrpcRouteRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference">NetworkServicesGrpcRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.gatewaysInput">GatewaysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.hostnamesInput">HostnamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.meshesInput">MeshesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.gateways">Gateways</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.hostnames">Hostnames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.meshes">Meshes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.rules"></a>

```go
func Rules() NetworkServicesGrpcRouteRulesList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList">NetworkServicesGrpcRouteRulesList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.timeouts"></a>

```go
func Timeouts() NetworkServicesGrpcRouteTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference">NetworkServicesGrpcRouteTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GatewaysInput`<sup>Optional</sup> <a name="GatewaysInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.gatewaysInput"></a>

```go
func GatewaysInput() *[]*string
```

- *Type:* *[]*string

---

##### `HostnamesInput`<sup>Optional</sup> <a name="HostnamesInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.hostnamesInput"></a>

```go
func HostnamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MeshesInput`<sup>Optional</sup> <a name="MeshesInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.meshesInput"></a>

```go
func MeshesInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Gateways`<sup>Required</sup> <a name="Gateways" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.gateways"></a>

```go
func Gateways() *[]*string
```

- *Type:* *[]*string

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.hostnames"></a>

```go
func Hostnames() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Meshes`<sup>Required</sup> <a name="Meshes" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.meshes"></a>

```go
func Meshes() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRoute.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesGrpcRouteConfig <a name="NetworkServicesGrpcRouteConfig" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

&networkservicesgrpcroute.NetworkServicesGrpcRouteConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Hostnames: *[]*string,
	Name: *string,
	Rules: interface{},
	Description: *string,
	Gateways: *[]*string,
	Id: *string,
	Labels: *map[string]*string,
	Location: *string,
	Meshes: *[]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.hostnames">Hostnames</a></code> | <code>*[]*string</code> | Required. Service hostnames with an optional port for which this route describes traffic. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.name">Name</a></code> | <code>*string</code> | Name of the GrpcRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.description">Description</a></code> | <code>*string</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.gateways">Gateways</a></code> | <code>*[]*string</code> | List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#id NetworkServicesGrpcRoute#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of label tags associated with the GrpcRoute resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.location">Location</a></code> | <code>*string</code> | Location (region) of the GRPCRoute resource to be created. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.meshes">Meshes</a></code> | <code>*[]*string</code> | List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#project NetworkServicesGrpcRoute#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts">NetworkServicesGrpcRouteTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Hostnames`<sup>Required</sup> <a name="Hostnames" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.hostnames"></a>

```go
Hostnames *[]*string
```

- *Type:* *[]*string

Required. Service hostnames with an optional port for which this route describes traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#hostnames NetworkServicesGrpcRoute#hostnames}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the GrpcRoute resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#name NetworkServicesGrpcRoute#name}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#rules NetworkServicesGrpcRoute#rules}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#description NetworkServicesGrpcRoute#description}

---

##### `Gateways`<sup>Optional</sup> <a name="Gateways" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.gateways"></a>

```go
Gateways *[]*string
```

- *Type:* *[]*string

List of gateways this GrpcRoute is attached to, as one of the routing rules to route the requests served by the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#gateways NetworkServicesGrpcRoute#gateways}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#id NetworkServicesGrpcRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of label tags associated with the GrpcRoute resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#labels NetworkServicesGrpcRoute#labels}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location (region) of the GRPCRoute resource to be created.

Only the value 'global' is currently allowed; defaults to 'global' if omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#location NetworkServicesGrpcRoute#location}

---

##### `Meshes`<sup>Optional</sup> <a name="Meshes" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.meshes"></a>

```go
Meshes *[]*string
```

- *Type:* *[]*string

List of meshes this GrpcRoute is attached to, as one of the routing rules to route the requests served by the mesh.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#meshes NetworkServicesGrpcRoute#meshes}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#project NetworkServicesGrpcRoute#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteConfig.property.timeouts"></a>

```go
Timeouts NetworkServicesGrpcRouteTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts">NetworkServicesGrpcRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#timeouts NetworkServicesGrpcRoute#timeouts}

---

### NetworkServicesGrpcRouteRules <a name="NetworkServicesGrpcRouteRules" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

&networkservicesgrpcroute.NetworkServicesGrpcRouteRules {
	Action: github.com/cdktf/cdktf-provider-google-go/google/v14.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction,
	Matches: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a></code> | action block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules.property.matches">Matches</a></code> | <code>interface{}</code> | matches block. |

---

##### `Action`<sup>Optional</sup> <a name="Action" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules.property.action"></a>

```go
Action NetworkServicesGrpcRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#action NetworkServicesGrpcRoute#action}

---

##### `Matches`<sup>Optional</sup> <a name="Matches" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRules.property.matches"></a>

```go
Matches interface{}
```

- *Type:* interface{}

matches block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#matches NetworkServicesGrpcRoute#matches}

---

### NetworkServicesGrpcRouteRulesAction <a name="NetworkServicesGrpcRouteRulesAction" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

&networkservicesgrpcroute.NetworkServicesGrpcRouteRulesAction {
	Destinations: interface{},
	FaultInjectionPolicy: github.com/cdktf/cdktf-provider-google-go/google/v14.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy,
	RetryPolicy: github.com/cdktf/cdktf-provider-google-go/google/v14.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy,
	Timeout: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.destinations">Destinations</a></code> | <code>interface{}</code> | destinations block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.faultInjectionPolicy">FaultInjectionPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a></code> | fault_injection_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a></code> | retry_policy block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.timeout">Timeout</a></code> | <code>*string</code> | Specifies the timeout for selected route. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.destinations"></a>

```go
Destinations interface{}
```

- *Type:* interface{}

destinations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#destinations NetworkServicesGrpcRoute#destinations}

---

##### `FaultInjectionPolicy`<sup>Optional</sup> <a name="FaultInjectionPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.faultInjectionPolicy"></a>

```go
FaultInjectionPolicy NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

fault_injection_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#fault_injection_policy NetworkServicesGrpcRoute#fault_injection_policy}

---

##### `RetryPolicy`<sup>Optional</sup> <a name="RetryPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.retryPolicy"></a>

```go
RetryPolicy NetworkServicesGrpcRouteRulesActionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a>

retry_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#retry_policy NetworkServicesGrpcRoute#retry_policy}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction.property.timeout"></a>

```go
Timeout *string
```

- *Type:* *string

Specifies the timeout for selected route.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#timeout NetworkServicesGrpcRoute#timeout}

---

### NetworkServicesGrpcRouteRulesActionDestinations <a name="NetworkServicesGrpcRouteRulesActionDestinations" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

&networkservicesgrpcroute.NetworkServicesGrpcRouteRulesActionDestinations {
	ServiceName: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations.property.serviceName">ServiceName</a></code> | <code>*string</code> | The URL of a BackendService to route traffic to. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations.property.weight">Weight</a></code> | <code>*f64</code> | Specifies the proportion of requests forwarded to the backend referenced by the serviceName field. |

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations.property.serviceName"></a>

```go
ServiceName *string
```

- *Type:* *string

The URL of a BackendService to route traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#service_name NetworkServicesGrpcRoute#service_name}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinations.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

Specifies the proportion of requests forwarded to the backend referenced by the serviceName field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#weight NetworkServicesGrpcRoute#weight}

---

### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

&networkservicesgrpcroute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy {
	Abort: github.com/cdktf/cdktf-provider-google-go/google/v14.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort,
	Delay: github.com/cdktf/cdktf-provider-google-go/google/v14.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.abort">Abort</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a></code> | abort block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.delay">Delay</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a></code> | delay block. |

---

##### `Abort`<sup>Optional</sup> <a name="Abort" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.abort"></a>

```go
Abort NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

abort block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#abort NetworkServicesGrpcRoute#abort}

---

##### `Delay`<sup>Optional</sup> <a name="Delay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy.property.delay"></a>

```go
Delay NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

delay block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#delay NetworkServicesGrpcRoute#delay}

---

### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

&networkservicesgrpcroute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort {
	HttpStatus: *f64,
	Percentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus">HttpStatus</a></code> | <code>*f64</code> | The HTTP status code used to abort the request. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.percentage">Percentage</a></code> | <code>*f64</code> | The percentage of traffic which will be aborted. |

---

##### `HttpStatus`<sup>Optional</sup> <a name="HttpStatus" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.httpStatus"></a>

```go
HttpStatus *f64
```

- *Type:* *f64

The HTTP status code used to abort the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#http_status NetworkServicesGrpcRoute#http_status}

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort.property.percentage"></a>

```go
Percentage *f64
```

- *Type:* *f64

The percentage of traffic which will be aborted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#percentage NetworkServicesGrpcRoute#percentage}

---

### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

&networkservicesgrpcroute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay {
	FixedDelay: *string,
	Percentage: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay">FixedDelay</a></code> | <code>*string</code> | Specify a fixed delay before forwarding the request. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.percentage">Percentage</a></code> | <code>*f64</code> | The percentage of traffic on which delay will be injected. |

---

##### `FixedDelay`<sup>Optional</sup> <a name="FixedDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.fixedDelay"></a>

```go
FixedDelay *string
```

- *Type:* *string

Specify a fixed delay before forwarding the request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#fixed_delay NetworkServicesGrpcRoute#fixed_delay}

---

##### `Percentage`<sup>Optional</sup> <a name="Percentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay.property.percentage"></a>

```go
Percentage *f64
```

- *Type:* *f64

The percentage of traffic on which delay will be injected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#percentage NetworkServicesGrpcRoute#percentage}

---

### NetworkServicesGrpcRouteRulesActionRetryPolicy <a name="NetworkServicesGrpcRouteRulesActionRetryPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

&networkservicesgrpcroute.NetworkServicesGrpcRouteRulesActionRetryPolicy {
	NumRetries: *f64,
	RetryConditions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy.property.numRetries">NumRetries</a></code> | <code>*f64</code> | Specifies the allowed number of retries. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy.property.retryConditions">RetryConditions</a></code> | <code>*[]*string</code> | Specifies one or more conditions when this retry policy applies. Possible values: ["connect-failure", "refused-stream", "cancelled", "deadline-exceeded", "resource-exhausted", "unavailable"]. |

---

##### `NumRetries`<sup>Optional</sup> <a name="NumRetries" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy.property.numRetries"></a>

```go
NumRetries *f64
```

- *Type:* *f64

Specifies the allowed number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#num_retries NetworkServicesGrpcRoute#num_retries}

---

##### `RetryConditions`<sup>Optional</sup> <a name="RetryConditions" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy.property.retryConditions"></a>

```go
RetryConditions *[]*string
```

- *Type:* *[]*string

Specifies one or more conditions when this retry policy applies. Possible values: ["connect-failure", "refused-stream", "cancelled", "deadline-exceeded", "resource-exhausted", "unavailable"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#retry_conditions NetworkServicesGrpcRoute#retry_conditions}

---

### NetworkServicesGrpcRouteRulesMatches <a name="NetworkServicesGrpcRouteRulesMatches" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

&networkservicesgrpcroute.NetworkServicesGrpcRouteRulesMatches {
	Headers: interface{},
	Method: github.com/cdktf/cdktf-provider-google-go/google/v14.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches.property.method">Method</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a></code> | method block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#headers NetworkServicesGrpcRoute#headers}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatches.property.method"></a>

```go
Method NetworkServicesGrpcRouteRulesMatchesMethod
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a>

method block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#method NetworkServicesGrpcRoute#method}

---

### NetworkServicesGrpcRouteRulesMatchesHeaders <a name="NetworkServicesGrpcRouteRulesMatchesHeaders" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

&networkservicesgrpcroute.NetworkServicesGrpcRouteRulesMatchesHeaders {
	Key: *string,
	Value: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.key">Key</a></code> | <code>*string</code> | Required. The key of the header. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.value">Value</a></code> | <code>*string</code> | Required. The value of the header. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.type">Type</a></code> | <code>*string</code> | The type of match. Default value: "EXACT" Possible values: ["TYPE_UNSPECIFIED", "EXACT", "REGULAR_EXPRESSION"]. |

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.key"></a>

```go
Key *string
```

- *Type:* *string

Required. The key of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#key NetworkServicesGrpcRoute#key}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

Required. The value of the header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#value NetworkServicesGrpcRoute#value}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeaders.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of match. Default value: "EXACT" Possible values: ["TYPE_UNSPECIFIED", "EXACT", "REGULAR_EXPRESSION"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#type NetworkServicesGrpcRoute#type}

---

### NetworkServicesGrpcRouteRulesMatchesMethod <a name="NetworkServicesGrpcRouteRulesMatchesMethod" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

&networkservicesgrpcroute.NetworkServicesGrpcRouteRulesMatchesMethod {
	GrpcMethod: *string,
	GrpcService: *string,
	CaseSensitive: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.grpcMethod">GrpcMethod</a></code> | <code>*string</code> | Required. Name of the method to match against. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.grpcService">GrpcService</a></code> | <code>*string</code> | Required. Name of the service to match against. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.caseSensitive">CaseSensitive</a></code> | <code>interface{}</code> | Specifies that matches are case sensitive. The default value is true. |

---

##### `GrpcMethod`<sup>Required</sup> <a name="GrpcMethod" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.grpcMethod"></a>

```go
GrpcMethod *string
```

- *Type:* *string

Required. Name of the method to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#grpc_method NetworkServicesGrpcRoute#grpc_method}

---

##### `GrpcService`<sup>Required</sup> <a name="GrpcService" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.grpcService"></a>

```go
GrpcService *string
```

- *Type:* *string

Required. Name of the service to match against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#grpc_service NetworkServicesGrpcRoute#grpc_service}

---

##### `CaseSensitive`<sup>Optional</sup> <a name="CaseSensitive" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod.property.caseSensitive"></a>

```go
CaseSensitive interface{}
```

- *Type:* interface{}

Specifies that matches are case sensitive. The default value is true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#case_sensitive NetworkServicesGrpcRoute#case_sensitive}

---

### NetworkServicesGrpcRouteTimeouts <a name="NetworkServicesGrpcRouteTimeouts" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

&networkservicesgrpcroute.NetworkServicesGrpcRouteTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#create NetworkServicesGrpcRoute#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#delete NetworkServicesGrpcRoute#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#update NetworkServicesGrpcRoute#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#create NetworkServicesGrpcRoute#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#delete NetworkServicesGrpcRoute#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/network_services_grpc_route#update NetworkServicesGrpcRoute#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesGrpcRouteRulesActionDestinationsList <a name="NetworkServicesGrpcRouteRulesActionDestinationsList" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NewNetworkServicesGrpcRouteRulesActionDestinationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesGrpcRouteRulesActionDestinationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.get"></a>

```go
func Get(index *f64) NetworkServicesGrpcRouteRulesActionDestinationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesGrpcRouteRulesActionDestinationsOutputReference <a name="NetworkServicesGrpcRouteRulesActionDestinationsOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NewNetworkServicesGrpcRouteRulesActionDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesGrpcRouteRulesActionDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetServiceName"></a>

```go
func ResetServiceName()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceName">ServiceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceNameInput"></a>

```go
func ServiceNameInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.serviceName"></a>

```go
func ServiceName() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NewNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus">ResetHttpStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpStatus` <a name="ResetHttpStatus" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetHttpStatus"></a>

```go
func ResetHttpStatus()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.resetPercentage"></a>

```go
func ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput">HttpStatusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput">PercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus">HttpStatus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage">Percentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpStatusInput`<sup>Optional</sup> <a name="HttpStatusInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatusInput"></a>

```go
func HttpStatusInput() *f64
```

- *Type:* *f64

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentageInput"></a>

```go
func PercentageInput() *f64
```

- *Type:* *f64

---

##### `HttpStatus`<sup>Required</sup> <a name="HttpStatus" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.httpStatus"></a>

```go
func HttpStatus() *f64
```

- *Type:* *f64

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.percentage"></a>

```go
func Percentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

---


### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NewNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay">ResetFixedDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage">ResetPercentage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixedDelay` <a name="ResetFixedDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetFixedDelay"></a>

```go
func ResetFixedDelay()
```

##### `ResetPercentage` <a name="ResetPercentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.resetPercentage"></a>

```go
func ResetPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput">FixedDelayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput">PercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay">FixedDelay</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage">Percentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FixedDelayInput`<sup>Optional</sup> <a name="FixedDelayInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelayInput"></a>

```go
func FixedDelayInput() *string
```

- *Type:* *string

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentageInput"></a>

```go
func PercentageInput() *f64
```

- *Type:* *f64

---

##### `FixedDelay`<sup>Required</sup> <a name="FixedDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.fixedDelay"></a>

```go
func FixedDelay() *string
```

- *Type:* *string

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.percentage"></a>

```go
func Percentage() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

---


### NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference <a name="NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NewNetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putAbort">PutAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putDelay">PutDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort">ResetAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay">ResetDelay</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAbort` <a name="PutAbort" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putAbort"></a>

```go
func PutAbort(value NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putAbort.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `PutDelay` <a name="PutDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putDelay"></a>

```go
func PutDelay(value NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.putDelay.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `ResetAbort` <a name="ResetAbort" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetAbort"></a>

```go
func ResetAbort()
```

##### `ResetDelay` <a name="ResetDelay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.resetDelay"></a>

```go
func ResetDelay()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abort">Abort</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delay">Delay</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput">AbortInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput">DelayInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Abort`<sup>Required</sup> <a name="Abort" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abort"></a>

```go
func Abort() NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbortOutputReference</a>

---

##### `Delay`<sup>Required</sup> <a name="Delay" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delay"></a>

```go
func Delay() NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelayOutputReference</a>

---

##### `AbortInput`<sup>Optional</sup> <a name="AbortInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.abortInput"></a>

```go
func AbortInput() NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyAbort</a>

---

##### `DelayInput`<sup>Optional</sup> <a name="DelayInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.delayInput"></a>

```go
func DelayInput() NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyDelay</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

---


### NetworkServicesGrpcRouteRulesActionOutputReference <a name="NetworkServicesGrpcRouteRulesActionOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NewNetworkServicesGrpcRouteRulesActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesGrpcRouteRulesActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putDestinations">PutDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putFaultInjectionPolicy">PutFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putRetryPolicy">PutRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetFaultInjectionPolicy">ResetFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetRetryPolicy">ResetRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDestinations` <a name="PutDestinations" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putDestinations"></a>

```go
func PutDestinations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putDestinations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutFaultInjectionPolicy` <a name="PutFaultInjectionPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putFaultInjectionPolicy"></a>

```go
func PutFaultInjectionPolicy(value NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putFaultInjectionPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

---

##### `PutRetryPolicy` <a name="PutRetryPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putRetryPolicy"></a>

```go
func PutRetryPolicy(value NetworkServicesGrpcRouteRulesActionRetryPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.putRetryPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a>

---

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetDestinations"></a>

```go
func ResetDestinations()
```

##### `ResetFaultInjectionPolicy` <a name="ResetFaultInjectionPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetFaultInjectionPolicy"></a>

```go
func ResetFaultInjectionPolicy()
```

##### `ResetRetryPolicy` <a name="ResetRetryPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetRetryPolicy"></a>

```go
func ResetRetryPolicy()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.destinations">Destinations</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList">NetworkServicesGrpcRouteRulesActionDestinationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicy">FaultInjectionPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicy">RetryPolicy</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference">NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicyInput">FaultInjectionPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicyInput">RetryPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.timeout">Timeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.destinations"></a>

```go
func Destinations() NetworkServicesGrpcRouteRulesActionDestinationsList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionDestinationsList">NetworkServicesGrpcRouteRulesActionDestinationsList</a>

---

##### `FaultInjectionPolicy`<sup>Required</sup> <a name="FaultInjectionPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicy"></a>

```go
func FaultInjectionPolicy() NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicyOutputReference</a>

---

##### `RetryPolicy`<sup>Required</sup> <a name="RetryPolicy" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicy"></a>

```go
func RetryPolicy() NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference">NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference</a>

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.destinationsInput"></a>

```go
func DestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `FaultInjectionPolicyInput`<sup>Optional</sup> <a name="FaultInjectionPolicyInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.faultInjectionPolicyInput"></a>

```go
func FaultInjectionPolicyInput() NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy">NetworkServicesGrpcRouteRulesActionFaultInjectionPolicy</a>

---

##### `RetryPolicyInput`<sup>Optional</sup> <a name="RetryPolicyInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.retryPolicyInput"></a>

```go
func RetryPolicyInput() NetworkServicesGrpcRouteRulesActionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.timeout"></a>

```go
func Timeout() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesGrpcRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a>

---


### NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference <a name="NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NewNetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetNumRetries">ResetNumRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetRetryConditions">ResetRetryConditions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNumRetries` <a name="ResetNumRetries" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetNumRetries"></a>

```go
func ResetNumRetries()
```

##### `ResetRetryConditions` <a name="ResetRetryConditions" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.resetRetryConditions"></a>

```go
func ResetRetryConditions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput">NumRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput">RetryConditionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetries">NumRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditions">RetryConditions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NumRetriesInput`<sup>Optional</sup> <a name="NumRetriesInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetriesInput"></a>

```go
func NumRetriesInput() *f64
```

- *Type:* *f64

---

##### `RetryConditionsInput`<sup>Optional</sup> <a name="RetryConditionsInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditionsInput"></a>

```go
func RetryConditionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NumRetries`<sup>Required</sup> <a name="NumRetries" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.numRetries"></a>

```go
func NumRetries() *f64
```

- *Type:* *f64

---

##### `RetryConditions`<sup>Required</sup> <a name="RetryConditions" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.retryConditions"></a>

```go
func RetryConditions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesGrpcRouteRulesActionRetryPolicy
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionRetryPolicy">NetworkServicesGrpcRouteRulesActionRetryPolicy</a>

---


### NetworkServicesGrpcRouteRulesList <a name="NetworkServicesGrpcRouteRulesList" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NewNetworkServicesGrpcRouteRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesGrpcRouteRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.get"></a>

```go
func Get(index *f64) NetworkServicesGrpcRouteRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesGrpcRouteRulesMatchesHeadersList <a name="NetworkServicesGrpcRouteRulesMatchesHeadersList" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NewNetworkServicesGrpcRouteRulesMatchesHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesGrpcRouteRulesMatchesHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.get"></a>

```go
func Get(index *f64) NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference <a name="NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NewNetworkServicesGrpcRouteRulesMatchesHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesGrpcRouteRulesMatchesList <a name="NetworkServicesGrpcRouteRulesMatchesList" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NewNetworkServicesGrpcRouteRulesMatchesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkServicesGrpcRouteRulesMatchesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.get"></a>

```go
func Get(index *f64) NetworkServicesGrpcRouteRulesMatchesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesGrpcRouteRulesMatchesMethodOutputReference <a name="NetworkServicesGrpcRouteRulesMatchesMethodOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NewNetworkServicesGrpcRouteRulesMatchesMethodOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesGrpcRouteRulesMatchesMethodOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resetCaseSensitive">ResetCaseSensitive</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaseSensitive` <a name="ResetCaseSensitive" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.resetCaseSensitive"></a>

```go
func ResetCaseSensitive()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitiveInput">CaseSensitiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethodInput">GrpcMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcServiceInput">GrpcServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitive">CaseSensitive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethod">GrpcMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcService">GrpcService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CaseSensitiveInput`<sup>Optional</sup> <a name="CaseSensitiveInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitiveInput"></a>

```go
func CaseSensitiveInput() interface{}
```

- *Type:* interface{}

---

##### `GrpcMethodInput`<sup>Optional</sup> <a name="GrpcMethodInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethodInput"></a>

```go
func GrpcMethodInput() *string
```

- *Type:* *string

---

##### `GrpcServiceInput`<sup>Optional</sup> <a name="GrpcServiceInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcServiceInput"></a>

```go
func GrpcServiceInput() *string
```

- *Type:* *string

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.caseSensitive"></a>

```go
func CaseSensitive() interface{}
```

- *Type:* interface{}

---

##### `GrpcMethod`<sup>Required</sup> <a name="GrpcMethod" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcMethod"></a>

```go
func GrpcMethod() *string
```

- *Type:* *string

---

##### `GrpcService`<sup>Required</sup> <a name="GrpcService" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.grpcService"></a>

```go
func GrpcService() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference.property.internalValue"></a>

```go
func InternalValue() NetworkServicesGrpcRouteRulesMatchesMethod
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a>

---


### NetworkServicesGrpcRouteRulesMatchesOutputReference <a name="NetworkServicesGrpcRouteRulesMatchesOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NewNetworkServicesGrpcRouteRulesMatchesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesGrpcRouteRulesMatchesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putMethod">PutMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMethod` <a name="PutMethod" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putMethod"></a>

```go
func PutMethod(value NetworkServicesGrpcRouteRulesMatchesMethod)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.putMethod.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a>

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.resetMethod"></a>

```go
func ResetMethod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList">NetworkServicesGrpcRouteRulesMatchesHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.method">Method</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference">NetworkServicesGrpcRouteRulesMatchesMethodOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.methodInput">MethodInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.headers"></a>

```go
func Headers() NetworkServicesGrpcRouteRulesMatchesHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesHeadersList">NetworkServicesGrpcRouteRulesMatchesHeadersList</a>

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.method"></a>

```go
func Method() NetworkServicesGrpcRouteRulesMatchesMethodOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethodOutputReference">NetworkServicesGrpcRouteRulesMatchesMethodOutputReference</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.methodInput"></a>

```go
func MethodInput() NetworkServicesGrpcRouteRulesMatchesMethod
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesMethod">NetworkServicesGrpcRouteRulesMatchesMethod</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesGrpcRouteRulesOutputReference <a name="NetworkServicesGrpcRouteRulesOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NewNetworkServicesGrpcRouteRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkServicesGrpcRouteRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putAction">PutAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putMatches">PutMatches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resetAction">ResetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resetMatches">ResetMatches</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAction` <a name="PutAction" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putAction"></a>

```go
func PutAction(value NetworkServicesGrpcRouteRulesAction)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a>

---

##### `PutMatches` <a name="PutMatches" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putMatches"></a>

```go
func PutMatches(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.putMatches.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAction` <a name="ResetAction" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resetAction"></a>

```go
func ResetAction()
```

##### `ResetMatches` <a name="ResetMatches" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.resetMatches"></a>

```go
func ResetMatches()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.action">Action</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference">NetworkServicesGrpcRouteRulesActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.matches">Matches</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList">NetworkServicesGrpcRouteRulesMatchesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.actionInput">ActionInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.matchesInput">MatchesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.action"></a>

```go
func Action() NetworkServicesGrpcRouteRulesActionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesActionOutputReference">NetworkServicesGrpcRouteRulesActionOutputReference</a>

---

##### `Matches`<sup>Required</sup> <a name="Matches" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.matches"></a>

```go
func Matches() NetworkServicesGrpcRouteRulesMatchesList
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesMatchesList">NetworkServicesGrpcRouteRulesMatchesList</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.actionInput"></a>

```go
func ActionInput() NetworkServicesGrpcRouteRulesAction
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesAction">NetworkServicesGrpcRouteRulesAction</a>

---

##### `MatchesInput`<sup>Optional</sup> <a name="MatchesInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.matchesInput"></a>

```go
func MatchesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkServicesGrpcRouteTimeoutsOutputReference <a name="NetworkServicesGrpcRouteTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/networkservicesgrpcroute"

networkservicesgrpcroute.NewNetworkServicesGrpcRouteTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkServicesGrpcRouteTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.networkServicesGrpcRoute.NetworkServicesGrpcRouteTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



