# `beyondcorpSecurityGatewayApplicationIamMember` Submodule <a name="`beyondcorpSecurityGatewayApplicationIamMember` Submodule" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpSecurityGatewayApplicationIamMember <a name="BeyondcorpSecurityGatewayApplicationIamMember" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member google_beyondcorp_security_gateway_application_iam_member}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplicationiammember"

beyondcorpsecuritygatewayapplicationiammember.NewBeyondcorpSecurityGatewayApplicationIamMember(scope Construct, id *string, config BeyondcorpSecurityGatewayApplicationIamMemberConfig) BeyondcorpSecurityGatewayApplicationIamMember
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig">BeyondcorpSecurityGatewayApplicationIamMemberConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig">BeyondcorpSecurityGatewayApplicationIamMemberConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.putCondition">PutCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.resetCondition">ResetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCondition` <a name="PutCondition" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.putCondition"></a>

```go
func PutCondition(value BeyondcorpSecurityGatewayApplicationIamMemberCondition)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberCondition">BeyondcorpSecurityGatewayApplicationIamMemberCondition</a>

---

##### `ResetCondition` <a name="ResetCondition" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.resetCondition"></a>

```go
func ResetCondition()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BeyondcorpSecurityGatewayApplicationIamMember resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplicationiammember"

beyondcorpsecuritygatewayapplicationiammember.BeyondcorpSecurityGatewayApplicationIamMember_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplicationiammember"

beyondcorpsecuritygatewayapplicationiammember.BeyondcorpSecurityGatewayApplicationIamMember_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplicationiammember"

beyondcorpsecuritygatewayapplicationiammember.BeyondcorpSecurityGatewayApplicationIamMember_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplicationiammember"

beyondcorpsecuritygatewayapplicationiammember.BeyondcorpSecurityGatewayApplicationIamMember_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BeyondcorpSecurityGatewayApplicationIamMember resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BeyondcorpSecurityGatewayApplicationIamMember to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BeyondcorpSecurityGatewayApplicationIamMember that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BeyondcorpSecurityGatewayApplicationIamMember to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference">BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.applicationIdInput">ApplicationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.conditionInput">ConditionInput</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberCondition">BeyondcorpSecurityGatewayApplicationIamMemberCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.memberInput">MemberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.securityGatewayIdInput">SecurityGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.applicationId">ApplicationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.member">Member</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.securityGatewayId">SecurityGatewayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.condition"></a>

```go
func Condition() BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference">BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.applicationIdInput"></a>

```go
func ApplicationIdInput() *string
```

- *Type:* *string

---

##### `ConditionInput`<sup>Optional</sup> <a name="ConditionInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.conditionInput"></a>

```go
func ConditionInput() BeyondcorpSecurityGatewayApplicationIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberCondition">BeyondcorpSecurityGatewayApplicationIamMemberCondition</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MemberInput`<sup>Optional</sup> <a name="MemberInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.memberInput"></a>

```go
func MemberInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `SecurityGatewayIdInput`<sup>Optional</sup> <a name="SecurityGatewayIdInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.securityGatewayIdInput"></a>

```go
func SecurityGatewayIdInput() *string
```

- *Type:* *string

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.applicationId"></a>

```go
func ApplicationId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.member"></a>

```go
func Member() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.securityGatewayId"></a>

```go
func SecurityGatewayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMember.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpSecurityGatewayApplicationIamMemberCondition <a name="BeyondcorpSecurityGatewayApplicationIamMemberCondition" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberCondition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberCondition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplicationiammember"

&beyondcorpsecuritygatewayapplicationiammember.BeyondcorpSecurityGatewayApplicationIamMemberCondition {
	Expression: *string,
	Title: *string,
	Description: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberCondition.property.expression">Expression</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#expression BeyondcorpSecurityGatewayApplicationIamMember#expression}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberCondition.property.title">Title</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#title BeyondcorpSecurityGatewayApplicationIamMember#title}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberCondition.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#description BeyondcorpSecurityGatewayApplicationIamMember#description}. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberCondition.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#expression BeyondcorpSecurityGatewayApplicationIamMember#expression}.

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberCondition.property.title"></a>

```go
Title *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#title BeyondcorpSecurityGatewayApplicationIamMember#title}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberCondition.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#description BeyondcorpSecurityGatewayApplicationIamMember#description}.

---

### BeyondcorpSecurityGatewayApplicationIamMemberConfig <a name="BeyondcorpSecurityGatewayApplicationIamMemberConfig" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplicationiammember"

&beyondcorpsecuritygatewayapplicationiammember.BeyondcorpSecurityGatewayApplicationIamMemberConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApplicationId: *string,
	Member: *string,
	Role: *string,
	SecurityGatewayId: *string,
	Condition: github.com/cdktf/cdktf-provider-google-go/google/v16.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberCondition,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.applicationId">ApplicationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#application_id BeyondcorpSecurityGatewayApplicationIamMember#application_id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.member">Member</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#member BeyondcorpSecurityGatewayApplicationIamMember#member}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.role">Role</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#role BeyondcorpSecurityGatewayApplicationIamMember#role}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.securityGatewayId">SecurityGatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#security_gateway_id BeyondcorpSecurityGatewayApplicationIamMember#security_gateway_id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.condition">Condition</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberCondition">BeyondcorpSecurityGatewayApplicationIamMemberCondition</a></code> | condition block. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#id BeyondcorpSecurityGatewayApplicationIamMember#id}. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#project BeyondcorpSecurityGatewayApplicationIamMember#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.applicationId"></a>

```go
ApplicationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#application_id BeyondcorpSecurityGatewayApplicationIamMember#application_id}.

---

##### `Member`<sup>Required</sup> <a name="Member" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.member"></a>

```go
Member *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#member BeyondcorpSecurityGatewayApplicationIamMember#member}.

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#role BeyondcorpSecurityGatewayApplicationIamMember#role}.

---

##### `SecurityGatewayId`<sup>Required</sup> <a name="SecurityGatewayId" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.securityGatewayId"></a>

```go
SecurityGatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#security_gateway_id BeyondcorpSecurityGatewayApplicationIamMember#security_gateway_id}.

---

##### `Condition`<sup>Optional</sup> <a name="Condition" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.condition"></a>

```go
Condition BeyondcorpSecurityGatewayApplicationIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberCondition">BeyondcorpSecurityGatewayApplicationIamMemberCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#condition BeyondcorpSecurityGatewayApplicationIamMember#condition}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#id BeyondcorpSecurityGatewayApplicationIamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/beyondcorp_security_gateway_application_iam_member#project BeyondcorpSecurityGatewayApplicationIamMember#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference <a name="BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/beyondcorpsecuritygatewayapplicationiammember"

beyondcorpsecuritygatewayapplicationiammember.NewBeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberCondition">BeyondcorpSecurityGatewayApplicationIamMemberCondition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberConditionOutputReference.property.internalValue"></a>

```go
func InternalValue() BeyondcorpSecurityGatewayApplicationIamMemberCondition
```

- *Type:* <a href="#@cdktf/provider-google.beyondcorpSecurityGatewayApplicationIamMember.BeyondcorpSecurityGatewayApplicationIamMemberCondition">BeyondcorpSecurityGatewayApplicationIamMemberCondition</a>

---



