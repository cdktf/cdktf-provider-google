# `edgecontainerVpnConnection` Submodule <a name="`edgecontainerVpnConnection` Submodule" id="@cdktf/provider-google.edgecontainerVpnConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EdgecontainerVpnConnection <a name="EdgecontainerVpnConnection" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection google_edgecontainer_vpn_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

edgecontainervpnconnection.NewEdgecontainerVpnConnection(scope Construct, id *string, config EdgecontainerVpnConnectionConfig) EdgecontainerVpnConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig">EdgecontainerVpnConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig">EdgecontainerVpnConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putVpcProject">PutVpcProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetEnableHighAvailability">ResetEnableHighAvailability</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetNatGatewayIp">ResetNatGatewayIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetRouter">ResetRouter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetVpc">ResetVpc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetVpcProject">ResetVpcProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putTimeouts"></a>

```go
func PutTimeouts(value EdgecontainerVpnConnectionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a>

---

##### `PutVpcProject` <a name="PutVpcProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putVpcProject"></a>

```go
func PutVpcProject(value EdgecontainerVpnConnectionVpcProject)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.putVpcProject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a>

---

##### `ResetEnableHighAvailability` <a name="ResetEnableHighAvailability" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetEnableHighAvailability"></a>

```go
func ResetEnableHighAvailability()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNatGatewayIp` <a name="ResetNatGatewayIp" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetNatGatewayIp"></a>

```go
func ResetNatGatewayIp()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRouter` <a name="ResetRouter" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetRouter"></a>

```go
func ResetRouter()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVpc` <a name="ResetVpc" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetVpc"></a>

```go
func ResetVpc()
```

##### `ResetVpcProject` <a name="ResetVpcProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.resetVpcProject"></a>

```go
func ResetVpcProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a EdgecontainerVpnConnection resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

edgecontainervpnconnection.EdgecontainerVpnConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

edgecontainervpnconnection.EdgecontainerVpnConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

edgecontainervpnconnection.EdgecontainerVpnConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

edgecontainervpnconnection.EdgecontainerVpnConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a EdgecontainerVpnConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EdgecontainerVpnConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EdgecontainerVpnConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the EdgecontainerVpnConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.details">Details</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList">EdgecontainerVpnConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference">EdgecontainerVpnConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcProject">VpcProject</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference">EdgecontainerVpnConnectionVpcProjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.clusterInput">ClusterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.enableHighAvailabilityInput">EnableHighAvailabilityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.natGatewayIpInput">NatGatewayIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.routerInput">RouterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcInput">VpcInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcProjectInput">VpcProjectInput</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.cluster">Cluster</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.enableHighAvailability">EnableHighAvailability</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.natGatewayIp">NatGatewayIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.router">Router</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpc">Vpc</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.details"></a>

```go
func Details() EdgecontainerVpnConnectionDetailsList
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList">EdgecontainerVpnConnectionDetailsList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.timeouts"></a>

```go
func Timeouts() EdgecontainerVpnConnectionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference">EdgecontainerVpnConnectionTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `VpcProject`<sup>Required</sup> <a name="VpcProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcProject"></a>

```go
func VpcProject() EdgecontainerVpnConnectionVpcProjectOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference">EdgecontainerVpnConnectionVpcProjectOutputReference</a>

---

##### `ClusterInput`<sup>Optional</sup> <a name="ClusterInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.clusterInput"></a>

```go
func ClusterInput() *string
```

- *Type:* *string

---

##### `EnableHighAvailabilityInput`<sup>Optional</sup> <a name="EnableHighAvailabilityInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.enableHighAvailabilityInput"></a>

```go
func EnableHighAvailabilityInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NatGatewayIpInput`<sup>Optional</sup> <a name="NatGatewayIpInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.natGatewayIpInput"></a>

```go
func NatGatewayIpInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RouterInput`<sup>Optional</sup> <a name="RouterInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.routerInput"></a>

```go
func RouterInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcInput`<sup>Optional</sup> <a name="VpcInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcInput"></a>

```go
func VpcInput() *string
```

- *Type:* *string

---

##### `VpcProjectInput`<sup>Optional</sup> <a name="VpcProjectInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpcProjectInput"></a>

```go
func VpcProjectInput() EdgecontainerVpnConnectionVpcProject
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a>

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.cluster"></a>

```go
func Cluster() *string
```

- *Type:* *string

---

##### `EnableHighAvailability`<sup>Required</sup> <a name="EnableHighAvailability" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.enableHighAvailability"></a>

```go
func EnableHighAvailability() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NatGatewayIp`<sup>Required</sup> <a name="NatGatewayIp" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.natGatewayIp"></a>

```go
func NatGatewayIp() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Router`<sup>Required</sup> <a name="Router" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.router"></a>

```go
func Router() *string
```

- *Type:* *string

---

##### `Vpc`<sup>Required</sup> <a name="Vpc" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.vpc"></a>

```go
func Vpc() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EdgecontainerVpnConnectionConfig <a name="EdgecontainerVpnConnectionConfig" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

&edgecontainervpnconnection.EdgecontainerVpnConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Cluster: *string,
	Location: *string,
	Name: *string,
	EnableHighAvailability: interface{},
	Id: *string,
	Labels: *map[string]*string,
	NatGatewayIp: *string,
	Project: *string,
	Router: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts,
	Vpc: *string,
	VpcProject: github.com/cdktf/cdktf-provider-google-go/google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.cluster">Cluster</a></code> | <code>*string</code> | The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.location">Location</a></code> | <code>*string</code> | Google Cloud Platform location. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of VPN connection. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.enableHighAvailability">EnableHighAvailability</a></code> | <code>interface{}</code> | Whether this VPN connection has HA enabled on cluster side. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#id EdgecontainerVpnConnection#id}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels associated with this resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.natGatewayIp">NatGatewayIp</a></code> | <code>*string</code> | NAT gateway IP, or WAN IP address. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#project EdgecontainerVpnConnection#project}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.router">Router</a></code> | <code>*string</code> | The VPN connection Cloud Router name. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.vpc">Vpc</a></code> | <code>*string</code> | The network ID of VPC to connect to. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.vpcProject">VpcProject</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a></code> | vpc_project block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cluster`<sup>Required</sup> <a name="Cluster" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.cluster"></a>

```go
Cluster *string
```

- *Type:* *string

The canonical Cluster name to connect to. It is in the form of projects/{project}/locations/{location}/clusters/{cluster}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#cluster EdgecontainerVpnConnection#cluster}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Google Cloud Platform location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#location EdgecontainerVpnConnection#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of VPN connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#name EdgecontainerVpnConnection#name}

---

##### `EnableHighAvailability`<sup>Optional</sup> <a name="EnableHighAvailability" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.enableHighAvailability"></a>

```go
EnableHighAvailability interface{}
```

- *Type:* interface{}

Whether this VPN connection has HA enabled on cluster side.

If enabled, when creating VPN connection we will attempt to use 2 ANG floating IPs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#enable_high_availability EdgecontainerVpnConnection#enable_high_availability}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#id EdgecontainerVpnConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels associated with this resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#labels EdgecontainerVpnConnection#labels}

---

##### `NatGatewayIp`<sup>Optional</sup> <a name="NatGatewayIp" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.natGatewayIp"></a>

```go
NatGatewayIp *string
```

- *Type:* *string

NAT gateway IP, or WAN IP address.

If a customer has multiple NAT IPs, the customer needs to configure NAT such that only one external IP maps to the GMEC Anthos cluster.
This is empty if NAT is not used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#nat_gateway_ip EdgecontainerVpnConnection#nat_gateway_ip}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#project EdgecontainerVpnConnection#project}.

---

##### `Router`<sup>Optional</sup> <a name="Router" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.router"></a>

```go
Router *string
```

- *Type:* *string

The VPN connection Cloud Router name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#router EdgecontainerVpnConnection#router}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.timeouts"></a>

```go
Timeouts EdgecontainerVpnConnectionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts">EdgecontainerVpnConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#timeouts EdgecontainerVpnConnection#timeouts}

---

##### `Vpc`<sup>Optional</sup> <a name="Vpc" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.vpc"></a>

```go
Vpc *string
```

- *Type:* *string

The network ID of VPC to connect to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#vpc EdgecontainerVpnConnection#vpc}

---

##### `VpcProject`<sup>Optional</sup> <a name="VpcProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionConfig.property.vpcProject"></a>

```go
VpcProject EdgecontainerVpnConnectionVpcProject
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a>

vpc_project block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#vpc_project EdgecontainerVpnConnection#vpc_project}

---

### EdgecontainerVpnConnectionDetails <a name="EdgecontainerVpnConnectionDetails" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

&edgecontainervpnconnection.EdgecontainerVpnConnectionDetails {

}
```


### EdgecontainerVpnConnectionDetailsCloudRouter <a name="EdgecontainerVpnConnectionDetailsCloudRouter" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

&edgecontainervpnconnection.EdgecontainerVpnConnectionDetailsCloudRouter {

}
```


### EdgecontainerVpnConnectionDetailsCloudVpns <a name="EdgecontainerVpnConnectionDetailsCloudVpns" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

&edgecontainervpnconnection.EdgecontainerVpnConnectionDetailsCloudVpns {

}
```


### EdgecontainerVpnConnectionTimeouts <a name="EdgecontainerVpnConnectionTimeouts" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

&edgecontainervpnconnection.EdgecontainerVpnConnectionTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#create EdgecontainerVpnConnection#create}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#delete EdgecontainerVpnConnection#delete}. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#update EdgecontainerVpnConnection#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#create EdgecontainerVpnConnection#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#delete EdgecontainerVpnConnection#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#update EdgecontainerVpnConnection#update}.

---

### EdgecontainerVpnConnectionVpcProject <a name="EdgecontainerVpnConnectionVpcProject" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

&edgecontainervpnconnection.EdgecontainerVpnConnectionVpcProject {
	ProjectId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject.property.projectId">ProjectId</a></code> | <code>*string</code> | The project of the VPC to connect to. If not specified, it is the same as the cluster project. |

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The project of the VPC to connect to. If not specified, it is the same as the cluster project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/edgecontainer_vpn_connection#project_id EdgecontainerVpnConnection#project_id}

---

## Classes <a name="Classes" id="Classes"></a>

### EdgecontainerVpnConnectionDetailsCloudRouterList <a name="EdgecontainerVpnConnectionDetailsCloudRouterList" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

edgecontainervpnconnection.NewEdgecontainerVpnConnectionDetailsCloudRouterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EdgecontainerVpnConnectionDetailsCloudRouterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.get"></a>

```go
func Get(index *f64) EdgecontainerVpnConnectionDetailsCloudRouterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EdgecontainerVpnConnectionDetailsCloudRouterOutputReference <a name="EdgecontainerVpnConnectionDetailsCloudRouterOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

edgecontainervpnconnection.NewEdgecontainerVpnConnectionDetailsCloudRouterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EdgecontainerVpnConnectionDetailsCloudRouterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter">EdgecontainerVpnConnectionDetailsCloudRouter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerVpnConnectionDetailsCloudRouter
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouter">EdgecontainerVpnConnectionDetailsCloudRouter</a>

---


### EdgecontainerVpnConnectionDetailsCloudVpnsList <a name="EdgecontainerVpnConnectionDetailsCloudVpnsList" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

edgecontainervpnconnection.NewEdgecontainerVpnConnectionDetailsCloudVpnsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EdgecontainerVpnConnectionDetailsCloudVpnsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.get"></a>

```go
func Get(index *f64) EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference <a name="EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

edgecontainervpnconnection.NewEdgecontainerVpnConnectionDetailsCloudVpnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.gateway">Gateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns">EdgecontainerVpnConnectionDetailsCloudVpns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Gateway`<sup>Required</sup> <a name="Gateway" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.gateway"></a>

```go
func Gateway() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerVpnConnectionDetailsCloudVpns
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpns">EdgecontainerVpnConnectionDetailsCloudVpns</a>

---


### EdgecontainerVpnConnectionDetailsList <a name="EdgecontainerVpnConnectionDetailsList" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

edgecontainervpnconnection.NewEdgecontainerVpnConnectionDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EdgecontainerVpnConnectionDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.get"></a>

```go
func Get(index *f64) EdgecontainerVpnConnectionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### EdgecontainerVpnConnectionDetailsOutputReference <a name="EdgecontainerVpnConnectionDetailsOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

edgecontainervpnconnection.NewEdgecontainerVpnConnectionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EdgecontainerVpnConnectionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.cloudRouter">CloudRouter</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList">EdgecontainerVpnConnectionDetailsCloudRouterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.cloudVpns">CloudVpns</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList">EdgecontainerVpnConnectionDetailsCloudVpnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.error">Error</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails">EdgecontainerVpnConnectionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudRouter`<sup>Required</sup> <a name="CloudRouter" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.cloudRouter"></a>

```go
func CloudRouter() EdgecontainerVpnConnectionDetailsCloudRouterList
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudRouterList">EdgecontainerVpnConnectionDetailsCloudRouterList</a>

---

##### `CloudVpns`<sup>Required</sup> <a name="CloudVpns" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.cloudVpns"></a>

```go
func CloudVpns() EdgecontainerVpnConnectionDetailsCloudVpnsList
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsCloudVpnsList">EdgecontainerVpnConnectionDetailsCloudVpnsList</a>

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.error"></a>

```go
func Error() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerVpnConnectionDetails
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionDetails">EdgecontainerVpnConnectionDetails</a>

---


### EdgecontainerVpnConnectionTimeoutsOutputReference <a name="EdgecontainerVpnConnectionTimeoutsOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

edgecontainervpnconnection.NewEdgecontainerVpnConnectionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerVpnConnectionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EdgecontainerVpnConnectionVpcProjectOutputReference <a name="EdgecontainerVpnConnectionVpcProjectOutputReference" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/edgecontainervpnconnection"

edgecontainervpnconnection.NewEdgecontainerVpnConnectionVpcProjectOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EdgecontainerVpnConnectionVpcProjectOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProjectOutputReference.property.internalValue"></a>

```go
func InternalValue() EdgecontainerVpnConnectionVpcProject
```

- *Type:* <a href="#@cdktf/provider-google.edgecontainerVpnConnection.EdgecontainerVpnConnectionVpcProject">EdgecontainerVpnConnectionVpcProject</a>

---



