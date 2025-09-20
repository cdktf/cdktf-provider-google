# `apigeeSecurityAction` Submodule <a name="`apigeeSecurityAction` Submodule" id="@cdktf/provider-google.apigeeSecurityAction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeSecurityAction <a name="ApigeeSecurityAction" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action google_apigee_security_action}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

apigeesecurityaction.NewApigeeSecurityAction(scope Construct, id *string, config ApigeeSecurityActionConfig) ApigeeSecurityAction
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig">ApigeeSecurityActionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig">ApigeeSecurityActionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putAllow">PutAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig">PutConditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putDeny">PutDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putFlag">PutFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetAllow">ResetAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetApiProxies">ResetApiProxies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDeny">ResetDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetExpireTime">ResetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetFlag">ResetFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllow` <a name="PutAllow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putAllow"></a>

```go
func PutAllow(value ApigeeSecurityActionAllow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putAllow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

---

##### `PutConditionConfig` <a name="PutConditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig"></a>

```go
func PutConditionConfig(value ApigeeSecurityActionConditionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putConditionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

---

##### `PutDeny` <a name="PutDeny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putDeny"></a>

```go
func PutDeny(value ApigeeSecurityActionDeny)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putDeny.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

---

##### `PutFlag` <a name="PutFlag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putFlag"></a>

```go
func PutFlag(value ApigeeSecurityActionFlag)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putFlag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putTimeouts"></a>

```go
func PutTimeouts(value ApigeeSecurityActionTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>

---

##### `ResetAllow` <a name="ResetAllow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetAllow"></a>

```go
func ResetAllow()
```

##### `ResetApiProxies` <a name="ResetApiProxies" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetApiProxies"></a>

```go
func ResetApiProxies()
```

##### `ResetDeny` <a name="ResetDeny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDeny"></a>

```go
func ResetDeny()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExpireTime` <a name="ResetExpireTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetExpireTime"></a>

```go
func ResetExpireTime()
```

##### `ResetFlag` <a name="ResetFlag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetFlag"></a>

```go
func ResetFlag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.resetTtl"></a>

```go
func ResetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApigeeSecurityAction resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

apigeesecurityaction.ApigeeSecurityAction_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

apigeesecurityaction.ApigeeSecurityAction_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

apigeesecurityaction.ApigeeSecurityAction_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

apigeesecurityaction.ApigeeSecurityAction_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApigeeSecurityAction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApigeeSecurityAction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApigeeSecurityAction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApigeeSecurityAction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference">ApigeeSecurityActionAllowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfig">ConditionConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference">ApigeeSecurityActionConditionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference">ApigeeSecurityActionDenyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flag">Flag</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference">ApigeeSecurityActionFlagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference">ApigeeSecurityActionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allowInput">AllowInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxiesInput">ApiProxiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfigInput">ConditionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.denyInput">DenyInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envIdInput">EnvIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTimeInput">ExpireTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flagInput">FlagInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgIdInput">OrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionIdInput">SecurityActionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttlInput">TtlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxies">ApiProxies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envId">EnvId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgId">OrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionId">SecurityActionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttl">Ttl</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Allow`<sup>Required</sup> <a name="Allow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allow"></a>

```go
func Allow() ApigeeSecurityActionAllowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference">ApigeeSecurityActionAllowOutputReference</a>

---

##### `ConditionConfig`<sup>Required</sup> <a name="ConditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfig"></a>

```go
func ConditionConfig() ApigeeSecurityActionConditionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference">ApigeeSecurityActionConditionConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Deny`<sup>Required</sup> <a name="Deny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.deny"></a>

```go
func Deny() ApigeeSecurityActionDenyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference">ApigeeSecurityActionDenyOutputReference</a>

---

##### `Flag`<sup>Required</sup> <a name="Flag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flag"></a>

```go
func Flag() ApigeeSecurityActionFlagOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference">ApigeeSecurityActionFlagOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeouts"></a>

```go
func Timeouts() ApigeeSecurityActionTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference">ApigeeSecurityActionTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AllowInput`<sup>Optional</sup> <a name="AllowInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.allowInput"></a>

```go
func AllowInput() ApigeeSecurityActionAllow
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

---

##### `ApiProxiesInput`<sup>Optional</sup> <a name="ApiProxiesInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxiesInput"></a>

```go
func ApiProxiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ConditionConfigInput`<sup>Optional</sup> <a name="ConditionConfigInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.conditionConfigInput"></a>

```go
func ConditionConfigInput() ApigeeSecurityActionConditionConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

---

##### `DenyInput`<sup>Optional</sup> <a name="DenyInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.denyInput"></a>

```go
func DenyInput() ApigeeSecurityActionDeny
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnvIdInput`<sup>Optional</sup> <a name="EnvIdInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envIdInput"></a>

```go
func EnvIdInput() *string
```

- *Type:* *string

---

##### `ExpireTimeInput`<sup>Optional</sup> <a name="ExpireTimeInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTimeInput"></a>

```go
func ExpireTimeInput() *string
```

- *Type:* *string

---

##### `FlagInput`<sup>Optional</sup> <a name="FlagInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.flagInput"></a>

```go
func FlagInput() ApigeeSecurityActionFlag
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrgIdInput`<sup>Optional</sup> <a name="OrgIdInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgIdInput"></a>

```go
func OrgIdInput() *string
```

- *Type:* *string

---

##### `SecurityActionIdInput`<sup>Optional</sup> <a name="SecurityActionIdInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionIdInput"></a>

```go
func SecurityActionIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttlInput"></a>

```go
func TtlInput() *string
```

- *Type:* *string

---

##### `ApiProxies`<sup>Required</sup> <a name="ApiProxies" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.apiProxies"></a>

```go
func ApiProxies() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.envId"></a>

```go
func EnvId() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.orgId"></a>

```go
func OrgId() *string
```

- *Type:* *string

---

##### `SecurityActionId`<sup>Required</sup> <a name="SecurityActionId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.securityActionId"></a>

```go
func SecurityActionId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.ttl"></a>

```go
func Ttl() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityAction.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeSecurityActionAllow <a name="ApigeeSecurityActionAllow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

&apigeesecurityaction.ApigeeSecurityActionAllow {

}
```


### ApigeeSecurityActionConditionConfig <a name="ApigeeSecurityActionConditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

&apigeesecurityaction.ApigeeSecurityActionConditionConfig {
	AccessTokens: *[]*string,
	ApiKeys: *[]*string,
	ApiProducts: *[]*string,
	Asns: *[]*string,
	BotReasons: *[]*string,
	DeveloperApps: *[]*string,
	Developers: *[]*string,
	HttpMethods: *[]*string,
	IpAddressRanges: *[]*string,
	RegionCodes: *[]*string,
	UserAgents: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.accessTokens">AccessTokens</a></code> | <code>*[]*string</code> | A list of accessTokens. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiKeys">ApiKeys</a></code> | <code>*[]*string</code> | A list of API keys. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiProducts">ApiProducts</a></code> | <code>*[]*string</code> | A list of API Products. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.asns">Asns</a></code> | <code>*[]*string</code> | A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.botReasons">BotReasons</a></code> | <code>*[]*string</code> | A list of Bot Reasons. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developerApps">DeveloperApps</a></code> | <code>*[]*string</code> | A list of developer apps. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developers">Developers</a></code> | <code>*[]*string</code> | A list of developers. Limit 1000 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.httpMethods">HttpMethods</a></code> | <code>*[]*string</code> | Act only on particular HTTP methods. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.ipAddressRanges">IpAddressRanges</a></code> | <code>*[]*string</code> | A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.regionCodes">RegionCodes</a></code> | <code>*[]*string</code> | A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.userAgents">UserAgents</a></code> | <code>*[]*string</code> | A list of user agents to deny. We look for exact matches. Limit 50 per action. |

---

##### `AccessTokens`<sup>Optional</sup> <a name="AccessTokens" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.accessTokens"></a>

```go
AccessTokens *[]*string
```

- *Type:* *[]*string

A list of accessTokens. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#access_tokens ApigeeSecurityAction#access_tokens}

---

##### `ApiKeys`<sup>Optional</sup> <a name="ApiKeys" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiKeys"></a>

```go
ApiKeys *[]*string
```

- *Type:* *[]*string

A list of API keys. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#api_keys ApigeeSecurityAction#api_keys}

---

##### `ApiProducts`<sup>Optional</sup> <a name="ApiProducts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.apiProducts"></a>

```go
ApiProducts *[]*string
```

- *Type:* *[]*string

A list of API Products. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#api_products ApigeeSecurityAction#api_products}

---

##### `Asns`<sup>Optional</sup> <a name="Asns" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.asns"></a>

```go
Asns *[]*string
```

- *Type:* *[]*string

A list of ASN numbers to act on, e.g. 23. https://en.wikipedia.org/wiki/Autonomous_system_(Internet) This uses int64 instead of uint32 because of https://linter.aip.dev/141/forbidden-types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#asns ApigeeSecurityAction#asns}

---

##### `BotReasons`<sup>Optional</sup> <a name="BotReasons" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.botReasons"></a>

```go
BotReasons *[]*string
```

- *Type:* *[]*string

A list of Bot Reasons.

Current options: Flooder, Brute Guessor, Static Content Scraper,
OAuth Abuser, Robot Abuser, TorListRule, Advanced Anomaly Detection, Advanced API Scraper,
Search Engine Crawlers, Public Clouds, Public Cloud AWS, Public Cloud Azure, and Public Cloud Google.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#bot_reasons ApigeeSecurityAction#bot_reasons}

---

##### `DeveloperApps`<sup>Optional</sup> <a name="DeveloperApps" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developerApps"></a>

```go
DeveloperApps *[]*string
```

- *Type:* *[]*string

A list of developer apps. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#developer_apps ApigeeSecurityAction#developer_apps}

---

##### `Developers`<sup>Optional</sup> <a name="Developers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.developers"></a>

```go
Developers *[]*string
```

- *Type:* *[]*string

A list of developers. Limit 1000 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#developers ApigeeSecurityAction#developers}

---

##### `HttpMethods`<sup>Optional</sup> <a name="HttpMethods" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.httpMethods"></a>

```go
HttpMethods *[]*string
```

- *Type:* *[]*string

Act only on particular HTTP methods.

E.g. A read-only API can block POST/PUT/DELETE methods.
Accepted values are: GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE and PATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#http_methods ApigeeSecurityAction#http_methods}

---

##### `IpAddressRanges`<sup>Optional</sup> <a name="IpAddressRanges" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.ipAddressRanges"></a>

```go
IpAddressRanges *[]*string
```

- *Type:* *[]*string

A list of IP addresses. This could be either IPv4 or IPv6. Limited to 100 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#ip_address_ranges ApigeeSecurityAction#ip_address_ranges}

---

##### `RegionCodes`<sup>Optional</sup> <a name="RegionCodes" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.regionCodes"></a>

```go
RegionCodes *[]*string
```

- *Type:* *[]*string

A list of countries/region codes to act on, e.g. US. This follows https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#region_codes ApigeeSecurityAction#region_codes}

---

##### `UserAgents`<sup>Optional</sup> <a name="UserAgents" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig.property.userAgents"></a>

```go
UserAgents *[]*string
```

- *Type:* *[]*string

A list of user agents to deny. We look for exact matches. Limit 50 per action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#user_agents ApigeeSecurityAction#user_agents}

---

### ApigeeSecurityActionConfig <a name="ApigeeSecurityActionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

&apigeesecurityaction.ApigeeSecurityActionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConditionConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.apigeeSecurityAction.ApigeeSecurityActionConditionConfig,
	EnvId: *string,
	OrgId: *string,
	SecurityActionId: *string,
	State: *string,
	Allow: github.com/cdktf/cdktf-provider-google-go/google/v16.apigeeSecurityAction.ApigeeSecurityActionAllow,
	ApiProxies: *[]*string,
	Deny: github.com/cdktf/cdktf-provider-google-go/google/v16.apigeeSecurityAction.ApigeeSecurityActionDeny,
	Description: *string,
	ExpireTime: *string,
	Flag: github.com/cdktf/cdktf-provider-google-go/google/v16.apigeeSecurityAction.ApigeeSecurityActionFlag,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.apigeeSecurityAction.ApigeeSecurityActionTimeouts,
	Ttl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.conditionConfig">ConditionConfig</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a></code> | condition_config block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.envId">EnvId</a></code> | <code>*string</code> | The Apigee environment that this security action applies to. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.orgId">OrgId</a></code> | <code>*string</code> | The organization that this security action applies to. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.securityActionId">SecurityActionId</a></code> | <code>*string</code> | The ID to use for the SecurityAction, which will become the final component of the action's resource name. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.state">State</a></code> | <code>*string</code> | Only an ENABLED SecurityAction is enforced. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.allow">Allow</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a></code> | allow block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.apiProxies">ApiProxies</a></code> | <code>*[]*string</code> | If unset, this would apply to all proxies in the environment. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.deny">Deny</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a></code> | deny block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.description">Description</a></code> | <code>*string</code> | An optional user provided description of the SecurityAction. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.expireTime">ExpireTime</a></code> | <code>*string</code> | The expiration for this SecurityAction. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.flag">Flag</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a></code> | flag block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#id ApigeeSecurityAction#id}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.ttl">Ttl</a></code> | <code>*string</code> | The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConditionConfig`<sup>Required</sup> <a name="ConditionConfig" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.conditionConfig"></a>

```go
ConditionConfig ApigeeSecurityActionConditionConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

condition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#condition_config ApigeeSecurityAction#condition_config}

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.envId"></a>

```go
EnvId *string
```

- *Type:* *string

The Apigee environment that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#env_id ApigeeSecurityAction#env_id}

---

##### `OrgId`<sup>Required</sup> <a name="OrgId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.orgId"></a>

```go
OrgId *string
```

- *Type:* *string

The organization that this security action applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#org_id ApigeeSecurityAction#org_id}

---

##### `SecurityActionId`<sup>Required</sup> <a name="SecurityActionId" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.securityActionId"></a>

```go
SecurityActionId *string
```

- *Type:* *string

The ID to use for the SecurityAction, which will become the final component of the action's resource name.

This value should be 0-61 characters, and valid format is (^a-z?$).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#security_action_id ApigeeSecurityAction#security_action_id}

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Only an ENABLED SecurityAction is enforced.

An ENABLED SecurityAction past its expiration time will not be enforced. Possible values: ["ENABLED", "DISABLED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#state ApigeeSecurityAction#state}

---

##### `Allow`<sup>Optional</sup> <a name="Allow" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.allow"></a>

```go
Allow ApigeeSecurityActionAllow
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

allow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#allow ApigeeSecurityAction#allow}

---

##### `ApiProxies`<sup>Optional</sup> <a name="ApiProxies" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.apiProxies"></a>

```go
ApiProxies *[]*string
```

- *Type:* *[]*string

If unset, this would apply to all proxies in the environment.

If set, this action is enforced only if at least one proxy in the repeated
list is deployed at the time of enforcement. If set, several restrictions are enforced on SecurityActions.
There can be at most 100 enabled actions with proxies set in an env.
Several other restrictions apply on conditions and are detailed later.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#api_proxies ApigeeSecurityAction#api_proxies}

---

##### `Deny`<sup>Optional</sup> <a name="Deny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.deny"></a>

```go
Deny ApigeeSecurityActionDeny
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

deny block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#deny ApigeeSecurityAction#deny}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional user provided description of the SecurityAction.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#description ApigeeSecurityAction#description}

---

##### `ExpireTime`<sup>Optional</sup> <a name="ExpireTime" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.expireTime"></a>

```go
ExpireTime *string
```

- *Type:* *string

The expiration for this SecurityAction.

Uses RFC 3339, where generated output will always be Z-normalized and uses 0, 3, 6 or 9
fractional digits. Offsets other than "Z" are also accepted.
Examples: "2014-10-02T15:01:23Z", "2014-10-02T15:01:23.045123456Z" or "2014-10-02T15:01:23+05:30".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#expire_time ApigeeSecurityAction#expire_time}

---

##### `Flag`<sup>Optional</sup> <a name="Flag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.flag"></a>

```go
Flag ApigeeSecurityActionFlag
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

flag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#flag ApigeeSecurityAction#flag}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#id ApigeeSecurityAction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.timeouts"></a>

```go
Timeouts ApigeeSecurityActionTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts">ApigeeSecurityActionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#timeouts ApigeeSecurityAction#timeouts}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConfig.property.ttl"></a>

```go
Ttl *string
```

- *Type:* *string

The TTL for this SecurityAction. A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#ttl ApigeeSecurityAction#ttl}

---

### ApigeeSecurityActionDeny <a name="ApigeeSecurityActionDeny" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

&apigeesecurityaction.ApigeeSecurityActionDeny {
	ResponseCode: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny.property.responseCode">ResponseCode</a></code> | <code>*f64</code> | The HTTP response code if the Action = DENY. |

---

##### `ResponseCode`<sup>Optional</sup> <a name="ResponseCode" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny.property.responseCode"></a>

```go
ResponseCode *f64
```

- *Type:* *f64

The HTTP response code if the Action = DENY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#response_code ApigeeSecurityAction#response_code}

---

### ApigeeSecurityActionFlag <a name="ApigeeSecurityActionFlag" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

&apigeesecurityaction.ApigeeSecurityActionFlag {
	Headers: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag.property.headers">Headers</a></code> | <code>interface{}</code> | headers block. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#headers ApigeeSecurityAction#headers}

---

### ApigeeSecurityActionFlagHeaders <a name="ApigeeSecurityActionFlagHeaders" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

&apigeesecurityaction.ApigeeSecurityActionFlagHeaders {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.name">Name</a></code> | <code>*string</code> | The header name to be sent to the target. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.value">Value</a></code> | <code>*string</code> | The header value to be sent to the target. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

The header name to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#name ApigeeSecurityAction#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

The header value to be sent to the target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#value ApigeeSecurityAction#value}

---

### ApigeeSecurityActionTimeouts <a name="ApigeeSecurityActionTimeouts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

&apigeesecurityaction.ApigeeSecurityActionTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#create ApigeeSecurityAction#create}. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#delete ApigeeSecurityAction#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#create ApigeeSecurityAction#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/apigee_security_action#delete ApigeeSecurityAction#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeSecurityActionAllowOutputReference <a name="ApigeeSecurityActionAllowOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

apigeesecurityaction.NewApigeeSecurityActionAllowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeSecurityActionAllowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllowOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeSecurityActionAllow
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionAllow">ApigeeSecurityActionAllow</a>

---


### ApigeeSecurityActionConditionConfigOutputReference <a name="ApigeeSecurityActionConditionConfigOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

apigeesecurityaction.NewApigeeSecurityActionConditionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeSecurityActionConditionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens">ResetAccessTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiKeys">ResetApiKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiProducts">ResetApiProducts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAsns">ResetAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetBotReasons">ResetBotReasons</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps">ResetDeveloperApps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDevelopers">ResetDevelopers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods">ResetHttpMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges">ResetIpAddressRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes">ResetRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetUserAgents">ResetUserAgents</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessTokens` <a name="ResetAccessTokens" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAccessTokens"></a>

```go
func ResetAccessTokens()
```

##### `ResetApiKeys` <a name="ResetApiKeys" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiKeys"></a>

```go
func ResetApiKeys()
```

##### `ResetApiProducts` <a name="ResetApiProducts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetApiProducts"></a>

```go
func ResetApiProducts()
```

##### `ResetAsns` <a name="ResetAsns" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetAsns"></a>

```go
func ResetAsns()
```

##### `ResetBotReasons` <a name="ResetBotReasons" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetBotReasons"></a>

```go
func ResetBotReasons()
```

##### `ResetDeveloperApps` <a name="ResetDeveloperApps" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDeveloperApps"></a>

```go
func ResetDeveloperApps()
```

##### `ResetDevelopers` <a name="ResetDevelopers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetDevelopers"></a>

```go
func ResetDevelopers()
```

##### `ResetHttpMethods` <a name="ResetHttpMethods" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetHttpMethods"></a>

```go
func ResetHttpMethods()
```

##### `ResetIpAddressRanges` <a name="ResetIpAddressRanges" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetIpAddressRanges"></a>

```go
func ResetIpAddressRanges()
```

##### `ResetRegionCodes` <a name="ResetRegionCodes" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetRegionCodes"></a>

```go
func ResetRegionCodes()
```

##### `ResetUserAgents` <a name="ResetUserAgents" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.resetUserAgents"></a>

```go
func ResetUserAgents()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput">AccessTokensInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput">ApiKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput">ApiProductsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asnsInput">AsnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput">BotReasonsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput">DeveloperAppsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developersInput">DevelopersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput">HttpMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput">IpAddressRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput">RegionCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput">UserAgentsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokens">AccessTokens</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeys">ApiKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProducts">ApiProducts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asns">Asns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasons">BotReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerApps">DeveloperApps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developers">Developers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethods">HttpMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges">IpAddressRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodes">RegionCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgents">UserAgents</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTokensInput`<sup>Optional</sup> <a name="AccessTokensInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokensInput"></a>

```go
func AccessTokensInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApiKeysInput`<sup>Optional</sup> <a name="ApiKeysInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeysInput"></a>

```go
func ApiKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApiProductsInput`<sup>Optional</sup> <a name="ApiProductsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProductsInput"></a>

```go
func ApiProductsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AsnsInput`<sup>Optional</sup> <a name="AsnsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asnsInput"></a>

```go
func AsnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BotReasonsInput`<sup>Optional</sup> <a name="BotReasonsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasonsInput"></a>

```go
func BotReasonsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeveloperAppsInput`<sup>Optional</sup> <a name="DeveloperAppsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerAppsInput"></a>

```go
func DeveloperAppsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DevelopersInput`<sup>Optional</sup> <a name="DevelopersInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developersInput"></a>

```go
func DevelopersInput() *[]*string
```

- *Type:* *[]*string

---

##### `HttpMethodsInput`<sup>Optional</sup> <a name="HttpMethodsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethodsInput"></a>

```go
func HttpMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpAddressRangesInput`<sup>Optional</sup> <a name="IpAddressRangesInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRangesInput"></a>

```go
func IpAddressRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionCodesInput`<sup>Optional</sup> <a name="RegionCodesInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodesInput"></a>

```go
func RegionCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserAgentsInput`<sup>Optional</sup> <a name="UserAgentsInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgentsInput"></a>

```go
func UserAgentsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AccessTokens`<sup>Required</sup> <a name="AccessTokens" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.accessTokens"></a>

```go
func AccessTokens() *[]*string
```

- *Type:* *[]*string

---

##### `ApiKeys`<sup>Required</sup> <a name="ApiKeys" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiKeys"></a>

```go
func ApiKeys() *[]*string
```

- *Type:* *[]*string

---

##### `ApiProducts`<sup>Required</sup> <a name="ApiProducts" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.apiProducts"></a>

```go
func ApiProducts() *[]*string
```

- *Type:* *[]*string

---

##### `Asns`<sup>Required</sup> <a name="Asns" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.asns"></a>

```go
func Asns() *[]*string
```

- *Type:* *[]*string

---

##### `BotReasons`<sup>Required</sup> <a name="BotReasons" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.botReasons"></a>

```go
func BotReasons() *[]*string
```

- *Type:* *[]*string

---

##### `DeveloperApps`<sup>Required</sup> <a name="DeveloperApps" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developerApps"></a>

```go
func DeveloperApps() *[]*string
```

- *Type:* *[]*string

---

##### `Developers`<sup>Required</sup> <a name="Developers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.developers"></a>

```go
func Developers() *[]*string
```

- *Type:* *[]*string

---

##### `HttpMethods`<sup>Required</sup> <a name="HttpMethods" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.httpMethods"></a>

```go
func HttpMethods() *[]*string
```

- *Type:* *[]*string

---

##### `IpAddressRanges`<sup>Required</sup> <a name="IpAddressRanges" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.ipAddressRanges"></a>

```go
func IpAddressRanges() *[]*string
```

- *Type:* *[]*string

---

##### `RegionCodes`<sup>Required</sup> <a name="RegionCodes" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.regionCodes"></a>

```go
func RegionCodes() *[]*string
```

- *Type:* *[]*string

---

##### `UserAgents`<sup>Required</sup> <a name="UserAgents" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.userAgents"></a>

```go
func UserAgents() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeSecurityActionConditionConfig
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionConditionConfig">ApigeeSecurityActionConditionConfig</a>

---


### ApigeeSecurityActionDenyOutputReference <a name="ApigeeSecurityActionDenyOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

apigeesecurityaction.NewApigeeSecurityActionDenyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeSecurityActionDenyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resetResponseCode">ResetResponseCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResponseCode` <a name="ResetResponseCode" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.resetResponseCode"></a>

```go
func ResetResponseCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCodeInput">ResponseCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCode">ResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResponseCodeInput`<sup>Optional</sup> <a name="ResponseCodeInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCodeInput"></a>

```go
func ResponseCodeInput() *f64
```

- *Type:* *f64

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.responseCode"></a>

```go
func ResponseCode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDenyOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeSecurityActionDeny
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionDeny">ApigeeSecurityActionDeny</a>

---


### ApigeeSecurityActionFlagHeadersList <a name="ApigeeSecurityActionFlagHeadersList" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

apigeesecurityaction.NewApigeeSecurityActionFlagHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigeeSecurityActionFlagHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.get"></a>

```go
func Get(index *f64) ApigeeSecurityActionFlagHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigeeSecurityActionFlagHeadersOutputReference <a name="ApigeeSecurityActionFlagHeadersOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

apigeesecurityaction.NewApigeeSecurityActionFlagHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigeeSecurityActionFlagHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigeeSecurityActionFlagOutputReference <a name="ApigeeSecurityActionFlagOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

apigeesecurityaction.NewApigeeSecurityActionFlagOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeSecurityActionFlagOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHeaders` <a name="PutHeaders" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList">ApigeeSecurityActionFlagHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headers"></a>

```go
func Headers() ApigeeSecurityActionFlagHeadersList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagHeadersList">ApigeeSecurityActionFlagHeadersList</a>

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlagOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeSecurityActionFlag
```

- *Type:* <a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionFlag">ApigeeSecurityActionFlag</a>

---


### ApigeeSecurityActionTimeoutsOutputReference <a name="ApigeeSecurityActionTimeoutsOutputReference" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/apigeesecurityaction"

apigeesecurityaction.NewApigeeSecurityActionTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeSecurityActionTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeSecurityAction.ApigeeSecurityActionTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



