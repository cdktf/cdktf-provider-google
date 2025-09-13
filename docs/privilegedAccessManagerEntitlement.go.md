# `privilegedAccessManagerEntitlement` Submodule <a name="`privilegedAccessManagerEntitlement` Submodule" id="@cdktf/provider-google.privilegedAccessManagerEntitlement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivilegedAccessManagerEntitlement <a name="PrivilegedAccessManagerEntitlement" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement google_privileged_access_manager_entitlement}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.NewPrivilegedAccessManagerEntitlement(scope Construct, id *string, config PrivilegedAccessManagerEntitlementConfig) PrivilegedAccessManagerEntitlement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig">PrivilegedAccessManagerEntitlementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig">PrivilegedAccessManagerEntitlementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putAdditionalNotificationTargets">PutAdditionalNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putApprovalWorkflow">PutApprovalWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putEligibleUsers">PutEligibleUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putPrivilegedAccess">PutPrivilegedAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putRequesterJustificationConfig">PutRequesterJustificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetAdditionalNotificationTargets">ResetAdditionalNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetApprovalWorkflow">ResetApprovalWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAdditionalNotificationTargets` <a name="PutAdditionalNotificationTargets" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putAdditionalNotificationTargets"></a>

```go
func PutAdditionalNotificationTargets(value PrivilegedAccessManagerEntitlementAdditionalNotificationTargets)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putAdditionalNotificationTargets.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets">PrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

---

##### `PutApprovalWorkflow` <a name="PutApprovalWorkflow" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putApprovalWorkflow"></a>

```go
func PutApprovalWorkflow(value PrivilegedAccessManagerEntitlementApprovalWorkflow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putApprovalWorkflow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow">PrivilegedAccessManagerEntitlementApprovalWorkflow</a>

---

##### `PutEligibleUsers` <a name="PutEligibleUsers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putEligibleUsers"></a>

```go
func PutEligibleUsers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putEligibleUsers.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPrivilegedAccess` <a name="PutPrivilegedAccess" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putPrivilegedAccess"></a>

```go
func PutPrivilegedAccess(value PrivilegedAccessManagerEntitlementPrivilegedAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putPrivilegedAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess">PrivilegedAccessManagerEntitlementPrivilegedAccess</a>

---

##### `PutRequesterJustificationConfig` <a name="PutRequesterJustificationConfig" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putRequesterJustificationConfig"></a>

```go
func PutRequesterJustificationConfig(value PrivilegedAccessManagerEntitlementRequesterJustificationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putRequesterJustificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig">PrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putTimeouts"></a>

```go
func PutTimeouts(value PrivilegedAccessManagerEntitlementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts">PrivilegedAccessManagerEntitlementTimeouts</a>

---

##### `ResetAdditionalNotificationTargets` <a name="ResetAdditionalNotificationTargets" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetAdditionalNotificationTargets"></a>

```go
func ResetAdditionalNotificationTargets()
```

##### `ResetApprovalWorkflow` <a name="ResetApprovalWorkflow" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetApprovalWorkflow"></a>

```go
func ResetApprovalWorkflow()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a PrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a PrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PrivilegedAccessManagerEntitlement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PrivilegedAccessManagerEntitlement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the PrivilegedAccessManagerEntitlement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.additionalNotificationTargets">AdditionalNotificationTargets</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference">PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.approvalWorkflow">ApprovalWorkflow</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference">PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.eligibleUsers">EligibleUsers</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList">PrivilegedAccessManagerEntitlementEligibleUsersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.privilegedAccess">PrivilegedAccess</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference">PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.requesterJustificationConfig">RequesterJustificationConfig</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference">PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference">PrivilegedAccessManagerEntitlementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.additionalNotificationTargetsInput">AdditionalNotificationTargetsInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets">PrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.approvalWorkflowInput">ApprovalWorkflowInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow">PrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.eligibleUsersInput">EligibleUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.entitlementIdInput">EntitlementIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.maxRequestDurationInput">MaxRequestDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.privilegedAccessInput">PrivilegedAccessInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess">PrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.requesterJustificationConfigInput">RequesterJustificationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig">PrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.maxRequestDuration">MaxRequestDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdditionalNotificationTargets`<sup>Required</sup> <a name="AdditionalNotificationTargets" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.additionalNotificationTargets"></a>

```go
func AdditionalNotificationTargets() PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference">PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference</a>

---

##### `ApprovalWorkflow`<sup>Required</sup> <a name="ApprovalWorkflow" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.approvalWorkflow"></a>

```go
func ApprovalWorkflow() PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference">PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EligibleUsers`<sup>Required</sup> <a name="EligibleUsers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.eligibleUsers"></a>

```go
func EligibleUsers() PrivilegedAccessManagerEntitlementEligibleUsersList
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList">PrivilegedAccessManagerEntitlementEligibleUsersList</a>

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PrivilegedAccess`<sup>Required</sup> <a name="PrivilegedAccess" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.privilegedAccess"></a>

```go
func PrivilegedAccess() PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference">PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference</a>

---

##### `RequesterJustificationConfig`<sup>Required</sup> <a name="RequesterJustificationConfig" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.requesterJustificationConfig"></a>

```go
func RequesterJustificationConfig() PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference">PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.timeouts"></a>

```go
func Timeouts() PrivilegedAccessManagerEntitlementTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference">PrivilegedAccessManagerEntitlementTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `AdditionalNotificationTargetsInput`<sup>Optional</sup> <a name="AdditionalNotificationTargetsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.additionalNotificationTargetsInput"></a>

```go
func AdditionalNotificationTargetsInput() PrivilegedAccessManagerEntitlementAdditionalNotificationTargets
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets">PrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

---

##### `ApprovalWorkflowInput`<sup>Optional</sup> <a name="ApprovalWorkflowInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.approvalWorkflowInput"></a>

```go
func ApprovalWorkflowInput() PrivilegedAccessManagerEntitlementApprovalWorkflow
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow">PrivilegedAccessManagerEntitlementApprovalWorkflow</a>

---

##### `EligibleUsersInput`<sup>Optional</sup> <a name="EligibleUsersInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.eligibleUsersInput"></a>

```go
func EligibleUsersInput() interface{}
```

- *Type:* interface{}

---

##### `EntitlementIdInput`<sup>Optional</sup> <a name="EntitlementIdInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.entitlementIdInput"></a>

```go
func EntitlementIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MaxRequestDurationInput`<sup>Optional</sup> <a name="MaxRequestDurationInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.maxRequestDurationInput"></a>

```go
func MaxRequestDurationInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `PrivilegedAccessInput`<sup>Optional</sup> <a name="PrivilegedAccessInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.privilegedAccessInput"></a>

```go
func PrivilegedAccessInput() PrivilegedAccessManagerEntitlementPrivilegedAccess
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess">PrivilegedAccessManagerEntitlementPrivilegedAccess</a>

---

##### `RequesterJustificationConfigInput`<sup>Optional</sup> <a name="RequesterJustificationConfigInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.requesterJustificationConfigInput"></a>

```go
func RequesterJustificationConfigInput() PrivilegedAccessManagerEntitlementRequesterJustificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig">PrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.entitlementId"></a>

```go
func EntitlementId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `MaxRequestDuration`<sup>Required</sup> <a name="MaxRequestDuration" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.maxRequestDuration"></a>

```go
func MaxRequestDuration() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivilegedAccessManagerEntitlementAdditionalNotificationTargets <a name="PrivilegedAccessManagerEntitlementAdditionalNotificationTargets" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

&privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets {
	AdminEmailRecipients: *[]*string,
	RequesterEmailRecipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.adminEmailRecipients">AdminEmailRecipients</a></code> | <code>*[]*string</code> | Optional. Additional email addresses to be notified when a principal(requester) is granted access. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.requesterEmailRecipients">RequesterEmailRecipients</a></code> | <code>*[]*string</code> | Optional. Additional email address to be notified about an eligible entitlement. |

---

##### `AdminEmailRecipients`<sup>Optional</sup> <a name="AdminEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.adminEmailRecipients"></a>

```go
AdminEmailRecipients *[]*string
```

- *Type:* *[]*string

Optional. Additional email addresses to be notified when a principal(requester) is granted access.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#admin_email_recipients PrivilegedAccessManagerEntitlement#admin_email_recipients}

---

##### `RequesterEmailRecipients`<sup>Optional</sup> <a name="RequesterEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets.property.requesterEmailRecipients"></a>

```go
RequesterEmailRecipients *[]*string
```

- *Type:* *[]*string

Optional. Additional email address to be notified about an eligible entitlement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#requester_email_recipients PrivilegedAccessManagerEntitlement#requester_email_recipients}

---

### PrivilegedAccessManagerEntitlementApprovalWorkflow <a name="PrivilegedAccessManagerEntitlementApprovalWorkflow" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

&privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow {
	ManualApprovals: github.com/cdktf/cdktf-provider-google-go/google/v16.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow.property.manualApprovals">ManualApprovals</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | manual_approvals block. |

---

##### `ManualApprovals`<sup>Required</sup> <a name="ManualApprovals" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow.property.manualApprovals"></a>

```go
ManualApprovals PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

manual_approvals block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#manual_approvals PrivilegedAccessManagerEntitlement#manual_approvals}

---

### PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals <a name="PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

&privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals {
	Steps: interface{},
	RequireApproverJustification: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.steps">Steps</a></code> | <code>interface{}</code> | steps block. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.requireApproverJustification">RequireApproverJustification</a></code> | <code>interface{}</code> | Optional. Do the approvers need to provide a justification for their actions? |

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.steps"></a>

```go
Steps interface{}
```

- *Type:* interface{}

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#steps PrivilegedAccessManagerEntitlement#steps}

---

##### `RequireApproverJustification`<sup>Optional</sup> <a name="RequireApproverJustification" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals.property.requireApproverJustification"></a>

```go
RequireApproverJustification interface{}
```

- *Type:* interface{}

Optional. Do the approvers need to provide a justification for their actions?

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#require_approver_justification PrivilegedAccessManagerEntitlement#require_approver_justification}

---

### PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps <a name="PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

&privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps {
	Approvers: github.com/cdktf/cdktf-provider-google-go/google/v16.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers,
	ApprovalsNeeded: *f64,
	ApproverEmailRecipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvers">Approvers</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | approvers block. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvalsNeeded">ApprovalsNeeded</a></code> | <code>*f64</code> | How many users from the above list need to approve. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approverEmailRecipients">ApproverEmailRecipients</a></code> | <code>*[]*string</code> | Optional. Additional email addresses to be notified when a grant is pending approval. |

---

##### `Approvers`<sup>Required</sup> <a name="Approvers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvers"></a>

```go
Approvers PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

approvers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#approvers PrivilegedAccessManagerEntitlement#approvers}

---

##### `ApprovalsNeeded`<sup>Optional</sup> <a name="ApprovalsNeeded" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approvalsNeeded"></a>

```go
ApprovalsNeeded *f64
```

- *Type:* *f64

How many users from the above list need to approve.

If there are not enough distinct users in the list above then the workflow
will indefinitely block. Should always be greater than 0. Currently 1 is the only
supported value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#approvals_needed PrivilegedAccessManagerEntitlement#approvals_needed}

---

##### `ApproverEmailRecipients`<sup>Optional</sup> <a name="ApproverEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps.property.approverEmailRecipients"></a>

```go
ApproverEmailRecipients *[]*string
```

- *Type:* *[]*string

Optional. Additional email addresses to be notified when a grant is pending approval.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#approver_email_recipients PrivilegedAccessManagerEntitlement#approver_email_recipients}

---

### PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers <a name="PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

&privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers {
	Principals: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.property.principals">Principals</a></code> | <code>*[]*string</code> | Users who are being allowed for the operation. |

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers.property.principals"></a>

```go
Principals *[]*string
```

- *Type:* *[]*string

Users who are being allowed for the operation.

Each entry should be a valid v1 IAM Principal Identifier. Format for these is documented at: https://cloud.google.com/iam/docs/principal-identifiers#v1

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#principals PrivilegedAccessManagerEntitlement#principals}

---

### PrivilegedAccessManagerEntitlementConfig <a name="PrivilegedAccessManagerEntitlementConfig" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

&privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EligibleUsers: interface{},
	EntitlementId: *string,
	Location: *string,
	MaxRequestDuration: *string,
	Parent: *string,
	PrivilegedAccess: github.com/cdktf/cdktf-provider-google-go/google/v16.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess,
	RequesterJustificationConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig,
	AdditionalNotificationTargets: github.com/cdktf/cdktf-provider-google-go/google/v16.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets,
	ApprovalWorkflow: github.com/cdktf/cdktf-provider-google-go/google/v16.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.eligibleUsers">EligibleUsers</a></code> | <code>interface{}</code> | eligible_users block. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.entitlementId">EntitlementId</a></code> | <code>*string</code> | The ID to use for this Entitlement. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.location">Location</a></code> | <code>*string</code> | The region of the Entitlement resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.maxRequestDuration">MaxRequestDuration</a></code> | <code>*string</code> | The maximum amount of time for which access would be granted for a request. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.parent">Parent</a></code> | <code>*string</code> | Format: projects/{project-id\|project-number} or organizations/{organization-number} or folders/{folder-number}. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.privilegedAccess">PrivilegedAccess</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess">PrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | privileged_access block. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.requesterJustificationConfig">RequesterJustificationConfig</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig">PrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | requester_justification_config block. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.additionalNotificationTargets">AdditionalNotificationTargets</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets">PrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | additional_notification_targets block. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.approvalWorkflow">ApprovalWorkflow</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow">PrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | approval_workflow block. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#id PrivilegedAccessManagerEntitlement#id}. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts">PrivilegedAccessManagerEntitlementTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EligibleUsers`<sup>Required</sup> <a name="EligibleUsers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.eligibleUsers"></a>

```go
EligibleUsers interface{}
```

- *Type:* interface{}

eligible_users block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#eligible_users PrivilegedAccessManagerEntitlement#eligible_users}

---

##### `EntitlementId`<sup>Required</sup> <a name="EntitlementId" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.entitlementId"></a>

```go
EntitlementId *string
```

- *Type:* *string

The ID to use for this Entitlement.

This will become the last part of the resource name.
This value should be 4-63 characters, and valid characters are "[a-z]", "[0-9]", and "-". The first character should be from [a-z].
This value should be unique among all other Entitlements under the specified 'parent'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#entitlement_id PrivilegedAccessManagerEntitlement#entitlement_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The region of the Entitlement resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#location PrivilegedAccessManagerEntitlement#location}

---

##### `MaxRequestDuration`<sup>Required</sup> <a name="MaxRequestDuration" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.maxRequestDuration"></a>

```go
MaxRequestDuration *string
```

- *Type:* *string

The maximum amount of time for which access would be granted for a request.

A requester can choose to ask for access for less than this duration but never more.
Format: calculate the time in seconds and concatenate it with 's' i.e. 2 hours = "7200s", 45 minutes = "2700s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#max_request_duration PrivilegedAccessManagerEntitlement#max_request_duration}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#parent PrivilegedAccessManagerEntitlement#parent}

---

##### `PrivilegedAccess`<sup>Required</sup> <a name="PrivilegedAccess" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.privilegedAccess"></a>

```go
PrivilegedAccess PrivilegedAccessManagerEntitlementPrivilegedAccess
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess">PrivilegedAccessManagerEntitlementPrivilegedAccess</a>

privileged_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#privileged_access PrivilegedAccessManagerEntitlement#privileged_access}

---

##### `RequesterJustificationConfig`<sup>Required</sup> <a name="RequesterJustificationConfig" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.requesterJustificationConfig"></a>

```go
RequesterJustificationConfig PrivilegedAccessManagerEntitlementRequesterJustificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig">PrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

requester_justification_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#requester_justification_config PrivilegedAccessManagerEntitlement#requester_justification_config}

---

##### `AdditionalNotificationTargets`<sup>Optional</sup> <a name="AdditionalNotificationTargets" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.additionalNotificationTargets"></a>

```go
AdditionalNotificationTargets PrivilegedAccessManagerEntitlementAdditionalNotificationTargets
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets">PrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

additional_notification_targets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#additional_notification_targets PrivilegedAccessManagerEntitlement#additional_notification_targets}

---

##### `ApprovalWorkflow`<sup>Optional</sup> <a name="ApprovalWorkflow" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.approvalWorkflow"></a>

```go
ApprovalWorkflow PrivilegedAccessManagerEntitlementApprovalWorkflow
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow">PrivilegedAccessManagerEntitlementApprovalWorkflow</a>

approval_workflow block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#approval_workflow PrivilegedAccessManagerEntitlement#approval_workflow}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#id PrivilegedAccessManagerEntitlement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementConfig.property.timeouts"></a>

```go
Timeouts PrivilegedAccessManagerEntitlementTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts">PrivilegedAccessManagerEntitlementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#timeouts PrivilegedAccessManagerEntitlement#timeouts}

---

### PrivilegedAccessManagerEntitlementEligibleUsers <a name="PrivilegedAccessManagerEntitlementEligibleUsers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

&privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlementEligibleUsers {
	Principals: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers.property.principals">Principals</a></code> | <code>*[]*string</code> | Users who are being allowed for the operation. |

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsers.property.principals"></a>

```go
Principals *[]*string
```

- *Type:* *[]*string

Users who are being allowed for the operation.

Each entry should be a valid v1 IAM Principal Identifier. Format for these is documented at "https://cloud.google.com/iam/docs/principal-identifiers#v1"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#principals PrivilegedAccessManagerEntitlement#principals}

---

### PrivilegedAccessManagerEntitlementPrivilegedAccess <a name="PrivilegedAccessManagerEntitlementPrivilegedAccess" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

&privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess {
	GcpIamAccess: github.com/cdktf/cdktf-provider-google-go/google/v16.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess.property.gcpIamAccess">GcpIamAccess</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | gcp_iam_access block. |

---

##### `GcpIamAccess`<sup>Required</sup> <a name="GcpIamAccess" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess.property.gcpIamAccess"></a>

```go
GcpIamAccess PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

gcp_iam_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#gcp_iam_access PrivilegedAccessManagerEntitlement#gcp_iam_access}

---

### PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess <a name="PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

&privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess {
	Resource: *string,
	ResourceType: *string,
	RoleBindings: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resource">Resource</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resourceType">ResourceType</a></code> | <code>*string</code> | The type of this resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.roleBindings">RoleBindings</a></code> | <code>interface{}</code> | role_bindings block. |

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#resource PrivilegedAccessManagerEntitlement#resource}

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

The type of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#resource_type PrivilegedAccessManagerEntitlement#resource_type}

---

##### `RoleBindings`<sup>Required</sup> <a name="RoleBindings" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess.property.roleBindings"></a>

```go
RoleBindings interface{}
```

- *Type:* interface{}

role_bindings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#role_bindings PrivilegedAccessManagerEntitlement#role_bindings}

---

### PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings <a name="PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

&privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings {
	Role: *string,
	ConditionExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.role">Role</a></code> | <code>*string</code> | IAM role to be granted. https://cloud.google.com/iam/docs/roles-overview. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.conditionExpression">ConditionExpression</a></code> | <code>*string</code> | The expression field of the IAM condition to be associated with the role. |

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.role"></a>

```go
Role *string
```

- *Type:* *string

IAM role to be granted. https://cloud.google.com/iam/docs/roles-overview.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#role PrivilegedAccessManagerEntitlement#role}

---

##### `ConditionExpression`<sup>Optional</sup> <a name="ConditionExpression" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings.property.conditionExpression"></a>

```go
ConditionExpression *string
```

- *Type:* *string

The expression field of the IAM condition to be associated with the role.

If specified, a user with an active grant for this entitlement would be able to access the resource only if this condition evaluates to true for their request.
https://cloud.google.com/iam/docs/conditions-overview#attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#condition_expression PrivilegedAccessManagerEntitlement#condition_expression}

---

### PrivilegedAccessManagerEntitlementRequesterJustificationConfig <a name="PrivilegedAccessManagerEntitlementRequesterJustificationConfig" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

&privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig {
	NotMandatory: github.com/cdktf/cdktf-provider-google-go/google/v16.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory,
	Unstructured: github.com/cdktf/cdktf-provider-google-go/google/v16.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.notMandatory">NotMandatory</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | not_mandatory block. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.unstructured">Unstructured</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | unstructured block. |

---

##### `NotMandatory`<sup>Optional</sup> <a name="NotMandatory" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.notMandatory"></a>

```go
NotMandatory PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

not_mandatory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#not_mandatory PrivilegedAccessManagerEntitlement#not_mandatory}

---

##### `Unstructured`<sup>Optional</sup> <a name="Unstructured" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig.property.unstructured"></a>

```go
Unstructured PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

unstructured block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#unstructured PrivilegedAccessManagerEntitlement#unstructured}

---

### PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory <a name="PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

&privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory {

}
```


### PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured <a name="PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

&privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured {

}
```


### PrivilegedAccessManagerEntitlementTimeouts <a name="PrivilegedAccessManagerEntitlementTimeouts" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

&privilegedaccessmanagerentitlement.PrivilegedAccessManagerEntitlementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#create PrivilegedAccessManagerEntitlement#create}. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#delete PrivilegedAccessManagerEntitlement#delete}. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#update PrivilegedAccessManagerEntitlement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#create PrivilegedAccessManagerEntitlement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#delete PrivilegedAccessManagerEntitlement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/resources/privileged_access_manager_entitlement#update PrivilegedAccessManagerEntitlement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference <a name="PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.NewPrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetAdminEmailRecipients">ResetAdminEmailRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetRequesterEmailRecipients">ResetRequesterEmailRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdminEmailRecipients` <a name="ResetAdminEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetAdminEmailRecipients"></a>

```go
func ResetAdminEmailRecipients()
```

##### `ResetRequesterEmailRecipients` <a name="ResetRequesterEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.resetRequesterEmailRecipients"></a>

```go
func ResetRequesterEmailRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipientsInput">AdminEmailRecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipientsInput">RequesterEmailRecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipients">AdminEmailRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipients">RequesterEmailRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets">PrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminEmailRecipientsInput`<sup>Optional</sup> <a name="AdminEmailRecipientsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipientsInput"></a>

```go
func AdminEmailRecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequesterEmailRecipientsInput`<sup>Optional</sup> <a name="RequesterEmailRecipientsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipientsInput"></a>

```go
func RequesterEmailRecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdminEmailRecipients`<sup>Required</sup> <a name="AdminEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.adminEmailRecipients"></a>

```go
func AdminEmailRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `RequesterEmailRecipients`<sup>Required</sup> <a name="RequesterEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.requesterEmailRecipients"></a>

```go
func RequesterEmailRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivilegedAccessManagerEntitlementAdditionalNotificationTargets
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementAdditionalNotificationTargets">PrivilegedAccessManagerEntitlementAdditionalNotificationTargets</a>

---


### PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference <a name="PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.NewPrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.putSteps">PutSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resetRequireApproverJustification">ResetRequireApproverJustification</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSteps` <a name="PutSteps" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.putSteps"></a>

```go
func PutSteps(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.putSteps.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRequireApproverJustification` <a name="ResetRequireApproverJustification" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.resetRequireApproverJustification"></a>

```go
func ResetRequireApproverJustification()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustificationInput">RequireApproverJustificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.stepsInput">StepsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustification">RequireApproverJustification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.steps"></a>

```go
func Steps() PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList</a>

---

##### `RequireApproverJustificationInput`<sup>Optional</sup> <a name="RequireApproverJustificationInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustificationInput"></a>

```go
func RequireApproverJustificationInput() interface{}
```

- *Type:* interface{}

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.stepsInput"></a>

```go
func StepsInput() interface{}
```

- *Type:* interface{}

---

##### `RequireApproverJustification`<sup>Required</sup> <a name="RequireApproverJustification" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.requireApproverJustification"></a>

```go
func RequireApproverJustification() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

---


### PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference <a name="PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.NewPrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principals">Principals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principalsInput"></a>

```go
func PrincipalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.principals"></a>

```go
func Principals() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

---


### PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList <a name="PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.NewPrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get"></a>

```go
func Get(index *f64) PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference <a name="PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.NewPrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.putApprovers">PutApprovers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApprovalsNeeded">ResetApprovalsNeeded</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApproverEmailRecipients">ResetApproverEmailRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApprovers` <a name="PutApprovers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.putApprovers"></a>

```go
func PutApprovers(value PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.putApprovers.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

---

##### `ResetApprovalsNeeded` <a name="ResetApprovalsNeeded" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApprovalsNeeded"></a>

```go
func ResetApprovalsNeeded()
```

##### `ResetApproverEmailRecipients` <a name="ResetApproverEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.resetApproverEmailRecipients"></a>

```go
func ResetApproverEmailRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvers">Approvers</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeededInput">ApprovalsNeededInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipientsInput">ApproverEmailRecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approversInput">ApproversInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeeded">ApprovalsNeeded</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipients">ApproverEmailRecipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Approvers`<sup>Required</sup> <a name="Approvers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvers"></a>

```go
func Approvers() PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference</a>

---

##### `ApprovalsNeededInput`<sup>Optional</sup> <a name="ApprovalsNeededInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeededInput"></a>

```go
func ApprovalsNeededInput() *f64
```

- *Type:* *f64

---

##### `ApproverEmailRecipientsInput`<sup>Optional</sup> <a name="ApproverEmailRecipientsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipientsInput"></a>

```go
func ApproverEmailRecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ApproversInput`<sup>Optional</sup> <a name="ApproversInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approversInput"></a>

```go
func ApproversInput() PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers</a>

---

##### `ApprovalsNeeded`<sup>Required</sup> <a name="ApprovalsNeeded" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approvalsNeeded"></a>

```go
func ApprovalsNeeded() *f64
```

- *Type:* *f64

---

##### `ApproverEmailRecipients`<sup>Required</sup> <a name="ApproverEmailRecipients" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.approverEmailRecipients"></a>

```go
func ApproverEmailRecipients() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference <a name="PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.NewPrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.putManualApprovals">PutManualApprovals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutManualApprovals` <a name="PutManualApprovals" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.putManualApprovals"></a>

```go
func PutManualApprovals(value PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.putManualApprovals.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovals">ManualApprovals</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovalsInput">ManualApprovalsInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow">PrivilegedAccessManagerEntitlementApprovalWorkflow</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManualApprovals`<sup>Required</sup> <a name="ManualApprovals" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovals"></a>

```go
func ManualApprovals() PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference</a>

---

##### `ManualApprovalsInput`<sup>Optional</sup> <a name="ManualApprovalsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.manualApprovalsInput"></a>

```go
func ManualApprovalsInput() PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals">PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivilegedAccessManagerEntitlementApprovalWorkflow
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementApprovalWorkflow">PrivilegedAccessManagerEntitlementApprovalWorkflow</a>

---


### PrivilegedAccessManagerEntitlementEligibleUsersList <a name="PrivilegedAccessManagerEntitlementEligibleUsersList" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.NewPrivilegedAccessManagerEntitlementEligibleUsersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrivilegedAccessManagerEntitlementEligibleUsersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.get"></a>

```go
func Get(index *f64) PrivilegedAccessManagerEntitlementEligibleUsersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivilegedAccessManagerEntitlementEligibleUsersOutputReference <a name="PrivilegedAccessManagerEntitlementEligibleUsersOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.NewPrivilegedAccessManagerEntitlementEligibleUsersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrivilegedAccessManagerEntitlementEligibleUsersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principalsInput">PrincipalsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principals">Principals</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrincipalsInput`<sup>Optional</sup> <a name="PrincipalsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principalsInput"></a>

```go
func PrincipalsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Principals`<sup>Required</sup> <a name="Principals" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.principals"></a>

```go
func Principals() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementEligibleUsersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference <a name="PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.NewPrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.putRoleBindings">PutRoleBindings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRoleBindings` <a name="PutRoleBindings" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.putRoleBindings"></a>

```go
func PutRoleBindings(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.putRoleBindings.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindings">RoleBindings</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindingsInput">RoleBindingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoleBindings`<sup>Required</sup> <a name="RoleBindings" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindings"></a>

```go
func RoleBindings() PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList</a>

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `RoleBindingsInput`<sup>Optional</sup> <a name="RoleBindingsInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.roleBindingsInput"></a>

```go
func RoleBindingsInput() interface{}
```

- *Type:* interface{}

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

---


### PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList <a name="PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.NewPrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get"></a>

```go
func Get(index *f64) PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference <a name="PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.NewPrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resetConditionExpression">ResetConditionExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConditionExpression` <a name="ResetConditionExpression" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.resetConditionExpression"></a>

```go
func ResetConditionExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpressionInput">ConditionExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpression">ConditionExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionExpressionInput`<sup>Optional</sup> <a name="ConditionExpressionInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpressionInput"></a>

```go
func ConditionExpressionInput() *string
```

- *Type:* *string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `ConditionExpression`<sup>Required</sup> <a name="ConditionExpression" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.conditionExpression"></a>

```go
func ConditionExpression() *string
```

- *Type:* *string

---

##### `Role`<sup>Required</sup> <a name="Role" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference <a name="PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.NewPrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.putGcpIamAccess">PutGcpIamAccess</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGcpIamAccess` <a name="PutGcpIamAccess" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.putGcpIamAccess"></a>

```go
func PutGcpIamAccess(value PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.putGcpIamAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccess">GcpIamAccess</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccessInput">GcpIamAccessInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess">PrivilegedAccessManagerEntitlementPrivilegedAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GcpIamAccess`<sup>Required</sup> <a name="GcpIamAccess" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccess"></a>

```go
func GcpIamAccess() PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference</a>

---

##### `GcpIamAccessInput`<sup>Optional</sup> <a name="GcpIamAccessInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.gcpIamAccessInput"></a>

```go
func GcpIamAccessInput() PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess">PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivilegedAccessManagerEntitlementPrivilegedAccess
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementPrivilegedAccess">PrivilegedAccessManagerEntitlementPrivilegedAccess</a>

---


### PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference <a name="PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.NewPrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

---


### PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference <a name="PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.NewPrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putNotMandatory">PutNotMandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putUnstructured">PutUnstructured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetNotMandatory">ResetNotMandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetUnstructured">ResetUnstructured</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNotMandatory` <a name="PutNotMandatory" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putNotMandatory"></a>

```go
func PutNotMandatory(value PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putNotMandatory.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

---

##### `PutUnstructured` <a name="PutUnstructured" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putUnstructured"></a>

```go
func PutUnstructured(value PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.putUnstructured.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

---

##### `ResetNotMandatory` <a name="ResetNotMandatory" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetNotMandatory"></a>

```go
func ResetNotMandatory()
```

##### `ResetUnstructured` <a name="ResetUnstructured" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.resetUnstructured"></a>

```go
func ResetUnstructured()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatory">NotMandatory</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructured">Unstructured</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatoryInput">NotMandatoryInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructuredInput">UnstructuredInput</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig">PrivilegedAccessManagerEntitlementRequesterJustificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NotMandatory`<sup>Required</sup> <a name="NotMandatory" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatory"></a>

```go
func NotMandatory() PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference</a>

---

##### `Unstructured`<sup>Required</sup> <a name="Unstructured" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructured"></a>

```go
func Unstructured() PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference</a>

---

##### `NotMandatoryInput`<sup>Optional</sup> <a name="NotMandatoryInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.notMandatoryInput"></a>

```go
func NotMandatoryInput() PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory">PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory</a>

---

##### `UnstructuredInput`<sup>Optional</sup> <a name="UnstructuredInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.unstructuredInput"></a>

```go
func UnstructuredInput() PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivilegedAccessManagerEntitlementRequesterJustificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfig">PrivilegedAccessManagerEntitlementRequesterJustificationConfig</a>

---


### PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference <a name="PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.NewPrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured
```

- *Type:* <a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured">PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured</a>

---


### PrivilegedAccessManagerEntitlementTimeoutsOutputReference <a name="PrivilegedAccessManagerEntitlementTimeoutsOutputReference" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/privilegedaccessmanagerentitlement"

privilegedaccessmanagerentitlement.NewPrivilegedAccessManagerEntitlementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivilegedAccessManagerEntitlementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privilegedAccessManagerEntitlement.PrivilegedAccessManagerEntitlementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



