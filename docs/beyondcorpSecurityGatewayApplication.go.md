# `beyondcorpSecurityGatewayApplication` Submodule <a name="`beyondcorpSecurityGatewayApplication` Submodule" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpSecurityGatewayApplication <a name="BeyondcorpSecurityGatewayApplication" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application google_beyondcorp_security_gateway_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

beyondcorpsecuritygatewayapplication.NewBeyondcorpSecurityGatewayApplication(scope Construct, id *string, config BeyondcorpSecurityGatewayApplicationConfig) BeyondcorpSecurityGatewayApplication
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig">BeyondcorpSecurityGatewayApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig">BeyondcorpSecurityGatewayApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putEndpointMatchers">PutEndpointMatchers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putUpstreams">PutUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetUpstreams">ResetUpstreams</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEndpointMatchers` <a name="PutEndpointMatchers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putEndpointMatchers"></a>

```go
func PutEndpointMatchers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putEndpointMatchers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putTimeouts"></a>

```go
func PutTimeouts(value BeyondcorpSecurityGatewayApplicationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a>

---

##### `PutUpstreams` <a name="PutUpstreams" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putUpstreams"></a>

```go
func PutUpstreams(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putUpstreams.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUpstreams` <a name="ResetUpstreams" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetUpstreams"></a>

```go
func ResetUpstreams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BeyondcorpSecurityGatewayApplication resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

beyondcorpsecuritygatewayapplication.BeyondcorpSecurityGatewayApplication_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

beyondcorpsecuritygatewayapplication.BeyondcorpSecurityGatewayApplication_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

beyondcorpsecuritygatewayapplication.BeyondcorpSecurityGatewayApplication_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

beyondcorpsecuritygatewayapplication.BeyondcorpSecurityGatewayApplication_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BeyondcorpSecurityGatewayApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BeyondcorpSecurityGatewayApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BeyondcorpSecurityGatewayApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BeyondcorpSecurityGatewayApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.endpointMatchers">EndpointMatchers</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList">BeyondcorpSecurityGatewayApplicationEndpointMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference">BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.upstreams">Upstreams</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList">BeyondcorpSecurityGatewayApplicationUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.endpointMatchersInput">EndpointMatchersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.securityGatewayIdInput">SecurityGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.upstreamsInput">UpstreamsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.securityGatewayId">SecurityGatewayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EndpointMatchers`<sup>Required</sup> <a name="EndpointMatchers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.endpointMatchers"></a>

```go
func EndpointMatchers() BeyondcorpSecurityGatewayApplicationEndpointMatchersList
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList">BeyondcorpSecurityGatewayApplicationEndpointMatchersList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.timeouts"></a>

```go
func Timeouts() BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference">BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `Upstreams`<sup>Required</sup> <a name="Upstreams" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.upstreams"></a>

```go
func Upstreams() BeyondcorpSecurityGatewayApplicationUpstreamsList
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList">BeyondcorpSecurityGatewayApplicationUpstreamsList</a>

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EndpointMatchersInput`<sup>Optional</sup> <a name="EndpointMatchersInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.endpointMatchersInput"></a>

```go
func EndpointMatchersInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SecurityGatewayIdInput`<sup>Optional</sup> <a name="SecurityGatewayIdInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.securityGatewayIdInput"></a>

```go
func SecurityGatewayIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UpstreamsInput`<sup>Optional</sup> <a name="UpstreamsInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.upstreamsInput"></a>

```go
func UpstreamsInput() interface{}
```

- *Type:* interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.securityGatewayId"></a>

```go
func SecurityGatewayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpSecurityGatewayApplicationConfig <a name="BeyondcorpSecurityGatewayApplicationConfig" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

&beyondcorpsecuritygatewayapplication.BeyondcorpSecurityGatewayApplicationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	EndpointMatchers: interface{},
	SecurityGatewayId: *string,
	DisplayName: *string,
	Id: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts,
	Upstreams: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | User-settable Application resource ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.endpointMatchers">EndpointMatchers</a></code> | <code>interface{}</code> | endpoint_matchers block. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.securityGatewayId">SecurityGatewayId</a></code> | <code>*string</code> | ID of the Security Gateway resource this belongs to. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#id BeyondcorpSecurityGatewayApplication#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#project BeyondcorpSecurityGatewayApplication#project}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.upstreams">Upstreams</a></code> | <code>interface{}</code> | upstreams block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#application_id BeyondcorpSecurityGatewayApplication#application_id}

---

##### `EndpointMatchers`<sup>Required</sup> <a name="EndpointMatchers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.endpointMatchers"></a>

```go
EndpointMatchers interface{}
```

- *Type:* interface{}

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#endpoint_matchers BeyondcorpSecurityGatewayApplication#endpoint_matchers}

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.securityGatewayId"></a>

```go
SecurityGatewayId *string
```

- *Type:* *string

ID of the Security Gateway resource this belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#security_gateway_id BeyondcorpSecurityGatewayApplication#security_gateway_id}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#display_name BeyondcorpSecurityGatewayApplication#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#id BeyondcorpSecurityGatewayApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#project BeyondcorpSecurityGatewayApplication#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.timeouts"></a>

```go
Timeouts BeyondcorpSecurityGatewayApplicationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#timeouts BeyondcorpSecurityGatewayApplication#timeouts}

---

##### `Upstreams`<sup>Optional</sup> <a name="Upstreams" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.upstreams"></a>

```go
Upstreams interface{}
```

- *Type:* interface{}

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#upstreams BeyondcorpSecurityGatewayApplication#upstreams}

---

### BeyondcorpSecurityGatewayApplicationEndpointMatchers <a name="BeyondcorpSecurityGatewayApplicationEndpointMatchers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

&beyondcorpsecuritygatewayapplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers {
	Hostname: *string,
	Ports: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers.property.hostname">Hostname</a></code> | <code>*string</code> | Required. Hostname of the application. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers.property.ports">Ports</a></code> | <code>*[]*f64</code> | Optional. Ports of the application. |

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Required. Hostname of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#hostname BeyondcorpSecurityGatewayApplication#hostname}

---

##### `Ports`<sup>Optional</sup> <a name="Ports" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers.property.ports"></a>

```go
Ports *[]*f64
```

- *Type:* *[]*f64

Optional. Ports of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#ports BeyondcorpSecurityGatewayApplication#ports}

---

### BeyondcorpSecurityGatewayApplicationTimeouts <a name="BeyondcorpSecurityGatewayApplicationTimeouts" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

&beyondcorpsecuritygatewayapplication.BeyondcorpSecurityGatewayApplicationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#create BeyondcorpSecurityGatewayApplication#create}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#delete BeyondcorpSecurityGatewayApplication#delete}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#update BeyondcorpSecurityGatewayApplication#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#create BeyondcorpSecurityGatewayApplication#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#delete BeyondcorpSecurityGatewayApplication#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#update BeyondcorpSecurityGatewayApplication#update}.

---

### BeyondcorpSecurityGatewayApplicationUpstreams <a name="BeyondcorpSecurityGatewayApplicationUpstreams" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

&beyondcorpsecuritygatewayapplication.BeyondcorpSecurityGatewayApplicationUpstreams {
	EgressPolicy: github.com/cdktf/cdktf-provider-google-go/google/v16.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy,
	Network: github.com/cdktf/cdktf-provider-google-go/google/v16.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.property.egressPolicy">EgressPolicy</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | egress_policy block. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | network block. |

---

##### `EgressPolicy`<sup>Optional</sup> <a name="EgressPolicy" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.property.egressPolicy"></a>

```go
EgressPolicy BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

egress_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#egress_policy BeyondcorpSecurityGatewayApplication#egress_policy}

---

##### `Network`<sup>Optional</sup> <a name="Network" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.property.network"></a>

```go
Network BeyondcorpSecurityGatewayApplicationUpstreamsNetwork
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#network BeyondcorpSecurityGatewayApplication#network}

---

### BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy <a name="BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

&beyondcorpsecuritygatewayapplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy {
	Regions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.property.regions">Regions</a></code> | <code>*[]*string</code> | Required. List of regions where the application sends traffic to. |

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Required. List of regions where the application sends traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#regions BeyondcorpSecurityGatewayApplication#regions}

---

### BeyondcorpSecurityGatewayApplicationUpstreamsNetwork <a name="BeyondcorpSecurityGatewayApplicationUpstreamsNetwork" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

&beyondcorpsecuritygatewayapplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork.property.name">Name</a></code> | <code>*string</code> | Required. Network name is of the format: 'projects/{project}/global/networks/{network}'. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork.property.name"></a>

```go
Name *string
```

- *Type:* *string

Required. Network name is of the format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application#name BeyondcorpSecurityGatewayApplication#name}

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpSecurityGatewayApplicationEndpointMatchersList <a name="BeyondcorpSecurityGatewayApplicationEndpointMatchersList" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

beyondcorpsecuritygatewayapplication.NewBeyondcorpSecurityGatewayApplicationEndpointMatchersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BeyondcorpSecurityGatewayApplicationEndpointMatchersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.get"></a>

```go
func Get(index *f64) BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference <a name="BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

beyondcorpsecuritygatewayapplication.NewBeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resetPorts">ResetPorts</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPorts` <a name="ResetPorts" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resetPorts"></a>

```go
func ResetPorts()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.portsInput">PortsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.ports">Ports</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `PortsInput`<sup>Optional</sup> <a name="PortsInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.portsInput"></a>

```go
func PortsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.ports"></a>

```go
func Ports() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference <a name="BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

beyondcorpsecuritygatewayapplication.NewBeyondcorpSecurityGatewayApplicationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference <a name="BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

beyondcorpsecuritygatewayapplication.NewBeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---


### BeyondcorpSecurityGatewayApplicationUpstreamsList <a name="BeyondcorpSecurityGatewayApplicationUpstreamsList" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

beyondcorpsecuritygatewayapplication.NewBeyondcorpSecurityGatewayApplicationUpstreamsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BeyondcorpSecurityGatewayApplicationUpstreamsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.get"></a>

```go
func Get(index *f64) BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference <a name="BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

beyondcorpsecuritygatewayapplication.NewBeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.internalValue"></a>

```go
func InternalValue() BeyondcorpSecurityGatewayApplicationUpstreamsNetwork
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---


### BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference <a name="BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplication"

beyondcorpsecuritygatewayapplication.NewBeyondcorpSecurityGatewayApplicationUpstreamsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy">PutEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork">PutNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetEgressPolicy">ResetEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetNetwork">ResetNetwork</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEgressPolicy` <a name="PutEgressPolicy" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy"></a>

```go
func PutEgressPolicy(value BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---

##### `PutNetwork` <a name="PutNetwork" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork"></a>

```go
func PutNetwork(value BeyondcorpSecurityGatewayApplicationUpstreamsNetwork)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---

##### `ResetEgressPolicy` <a name="ResetEgressPolicy" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetEgressPolicy"></a>

```go
func ResetEgressPolicy()
```

##### `ResetNetwork` <a name="ResetNetwork" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetNetwork"></a>

```go
func ResetNetwork()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicy">EgressPolicy</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.network">Network</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicyInput">EgressPolicyInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.networkInput">NetworkInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EgressPolicy`<sup>Required</sup> <a name="EgressPolicy" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicy"></a>

```go
func EgressPolicy() BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference</a>

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.network"></a>

```go
func Network() BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference</a>

---

##### `EgressPolicyInput`<sup>Optional</sup> <a name="EgressPolicyInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicyInput"></a>

```go
func EgressPolicyInput() BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---

##### `NetworkInput`<sup>Optional</sup> <a name="NetworkInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.networkInput"></a>

```go
func NetworkInput() BeyondcorpSecurityGatewayApplicationUpstreamsNetwork
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



