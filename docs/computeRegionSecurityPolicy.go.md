# `computeRegionSecurityPolicy` Submodule <a name="`computeRegionSecurityPolicy` Submodule" id="@cdktf/provider-google.computeRegionSecurityPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionSecurityPolicy <a name="ComputeRegionSecurityPolicy" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy google_compute_region_security_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicy(scope Construct, id *string, config ComputeRegionSecurityPolicyConfig) ComputeRegionSecurityPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig">ComputeRegionSecurityPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig">ComputeRegionSecurityPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putDdosProtectionConfig">PutDdosProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putUserDefinedFields">PutUserDefinedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetDdosProtectionConfig">ResetDdosProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetUserDefinedFields">ResetUserDefinedFields</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDdosProtectionConfig` <a name="PutDdosProtectionConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putDdosProtectionConfig"></a>

```go
func PutDdosProtectionConfig(value ComputeRegionSecurityPolicyDdosProtectionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putDdosProtectionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a>

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putTimeouts"></a>

```go
func PutTimeouts(value ComputeRegionSecurityPolicyTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts">ComputeRegionSecurityPolicyTimeouts</a>

---

##### `PutUserDefinedFields` <a name="PutUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putUserDefinedFields"></a>

```go
func PutUserDefinedFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.putUserDefinedFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDdosProtectionConfig` <a name="ResetDdosProtectionConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetDdosProtectionConfig"></a>

```go
func ResetDdosProtectionConfig()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetRules"></a>

```go
func ResetRules()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetType"></a>

```go
func ResetType()
```

##### `ResetUserDefinedFields` <a name="ResetUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.resetUserDefinedFields"></a>

```go
func ResetUserDefinedFields()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRegionSecurityPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.ComputeRegionSecurityPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.ComputeRegionSecurityPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.ComputeRegionSecurityPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.ComputeRegionSecurityPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeRegionSecurityPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeRegionSecurityPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeRegionSecurityPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRegionSecurityPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.ddosProtectionConfig">DdosProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference">ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.policyId">PolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList">ComputeRegionSecurityPolicyRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.selfLinkWithPolicyId">SelfLinkWithPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference">ComputeRegionSecurityPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.userDefinedFields">UserDefinedFields</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList">ComputeRegionSecurityPolicyUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.ddosProtectionConfigInput">DdosProtectionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.userDefinedFieldsInput">UserDefinedFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DdosProtectionConfig`<sup>Required</sup> <a name="DdosProtectionConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.ddosProtectionConfig"></a>

```go
func DdosProtectionConfig() ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference">ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference</a>

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.policyId"></a>

```go
func PolicyId() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.rules"></a>

```go
func Rules() ComputeRegionSecurityPolicyRulesList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList">ComputeRegionSecurityPolicyRulesList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `SelfLinkWithPolicyId`<sup>Required</sup> <a name="SelfLinkWithPolicyId" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.selfLinkWithPolicyId"></a>

```go
func SelfLinkWithPolicyId() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.timeouts"></a>

```go
func Timeouts() ComputeRegionSecurityPolicyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference">ComputeRegionSecurityPolicyTimeoutsOutputReference</a>

---

##### `UserDefinedFields`<sup>Required</sup> <a name="UserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.userDefinedFields"></a>

```go
func UserDefinedFields() ComputeRegionSecurityPolicyUserDefinedFieldsList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList">ComputeRegionSecurityPolicyUserDefinedFieldsList</a>

---

##### `DdosProtectionConfigInput`<sup>Optional</sup> <a name="DdosProtectionConfigInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.ddosProtectionConfigInput"></a>

```go
func DdosProtectionConfigInput() ComputeRegionSecurityPolicyDdosProtectionConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UserDefinedFieldsInput`<sup>Optional</sup> <a name="UserDefinedFieldsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.userDefinedFieldsInput"></a>

```go
func UserDefinedFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionSecurityPolicyConfig <a name="ComputeRegionSecurityPolicyConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	DdosProtectionConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig,
	Description: *string,
	Id: *string,
	Project: *string,
	Region: *string,
	Rules: interface{},
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts,
	Type: *string,
	UserDefinedFields: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.ddosProtectionConfig">DdosProtectionConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | ddos_protection_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#id ComputeRegionSecurityPolicy#id}. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#project ComputeRegionSecurityPolicy#project}. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.region">Region</a></code> | <code>*string</code> | The Region in which the created Region Security Policy should reside. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts">ComputeRegionSecurityPolicyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.type">Type</a></code> | <code>*string</code> | The type indicates the intended use of the security policy. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.userDefinedFields">UserDefinedFields</a></code> | <code>interface{}</code> | user_defined_fields block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Provided by the client when the resource is created. The name must be 1-63 characters long, and comply with RFC1035.
Specifically, the name must be 1-63 characters long and match the regular expression [a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)? which means the first character must be a lowercase letter, and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#name ComputeRegionSecurityPolicy#name}

---

##### `DdosProtectionConfig`<sup>Optional</sup> <a name="DdosProtectionConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.ddosProtectionConfig"></a>

```go
DdosProtectionConfig ComputeRegionSecurityPolicyDdosProtectionConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a>

ddos_protection_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#ddos_protection_config ComputeRegionSecurityPolicy#ddos_protection_config}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#description ComputeRegionSecurityPolicy#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#id ComputeRegionSecurityPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#project ComputeRegionSecurityPolicy#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The Region in which the created Region Security Policy should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#region ComputeRegionSecurityPolicy#region}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#rules ComputeRegionSecurityPolicy#rules}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.timeouts"></a>

```go
Timeouts ComputeRegionSecurityPolicyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts">ComputeRegionSecurityPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#timeouts ComputeRegionSecurityPolicy#timeouts}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type indicates the intended use of the security policy.

* CLOUD_ARMOR: Cloud Armor backend security policies can be configured to filter incoming HTTP requests targeting backend services. They filter requests before they hit the origin servers.
* CLOUD_ARMOR_EDGE: Cloud Armor edge security policies can be configured to filter incoming HTTP requests targeting backend services (including Cloud CDN-enabled) as well as backend buckets (Cloud Storage). They filter requests before the request is served from Google's cache.
* CLOUD_ARMOR_NETWORK: Cloud Armor network policies can be configured to filter packets targeting network load balancing resources such as backend services, target pools, target instances, and instances with external IPs. They filter requests before the request is served from the application.
  This field can be set only at resource creation time. Possible values: ["CLOUD_ARMOR", "CLOUD_ARMOR_EDGE", "CLOUD_ARMOR_NETWORK"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#type ComputeRegionSecurityPolicy#type}

---

##### `UserDefinedFields`<sup>Optional</sup> <a name="UserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyConfig.property.userDefinedFields"></a>

```go
UserDefinedFields interface{}
```

- *Type:* interface{}

user_defined_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#user_defined_fields ComputeRegionSecurityPolicy#user_defined_fields}

---

### ComputeRegionSecurityPolicyDdosProtectionConfig <a name="ComputeRegionSecurityPolicyDdosProtectionConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyDdosProtectionConfig {
	DdosProtection: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig.property.ddosProtection">DdosProtection</a></code> | <code>*string</code> | Google Cloud Armor offers the following options to help protect systems against DDoS attacks: - STANDARD: basic always-on protection for network load balancers, protocol forwarding, or VMs with public IP addresses. |

---

##### `DdosProtection`<sup>Required</sup> <a name="DdosProtection" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig.property.ddosProtection"></a>

```go
DdosProtection *string
```

- *Type:* *string

Google Cloud Armor offers the following options to help protect systems against DDoS attacks: - STANDARD: basic always-on protection for network load balancers, protocol forwarding, or VMs with public IP addresses.

* ADVANCED: additional protections for Managed Protection Plus subscribers who use network load balancers, protocol forwarding, or VMs with public IP addresses.
* ADVANCED_PREVIEW: flag to enable the security policy in preview mode. Possible values: ["ADVANCED", "ADVANCED_PREVIEW", "STANDARD"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#ddos_protection ComputeRegionSecurityPolicy#ddos_protection}

---

### ComputeRegionSecurityPolicyRules <a name="ComputeRegionSecurityPolicyRules" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyRules {
	Action: *string,
	Priority: *f64,
	Description: *string,
	Match: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch,
	NetworkMatch: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch,
	PreconfiguredWafConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig,
	Preview: interface{},
	RateLimitOptions: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.action">Action</a></code> | <code>*string</code> | The Action to perform when the rule is matched. The following are the valid actions:. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.priority">Priority</a></code> | <code>*f64</code> | An integer indicating the priority of a rule in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a></code> | match block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.networkMatch">NetworkMatch</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | network_match block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | preconfigured_waf_config block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.preview">Preview</a></code> | <code>interface{}</code> | If set to true, the specified action is not enforced. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.rateLimitOptions">RateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | rate_limit_options block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.action"></a>

```go
Action *string
```

- *Type:* *string

The Action to perform when the rule is matched. The following are the valid actions:.

* allow: allow access to target.
* deny(STATUS): deny access to target, returns the HTTP response code specified. Valid values for STATUS are 403, 404, and 502.
* rate_based_ban: limit client traffic to the configured threshold and ban the client if the traffic exceeds the threshold. Configure parameters for this action in RateLimitOptions. Requires rateLimitOptions to be set.
* redirect: redirect to a different target. This can either be an internal reCAPTCHA redirect, or an external URL-based redirect via a 302 response. Parameters for this action can be configured via redirectOptions. This action is only supported in Global Security Policies of type CLOUD_ARMOR.
* throttle: limit client traffic to the configured threshold. Configure parameters for this action in rateLimitOptions. Requires rateLimitOptions to be set for this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#action ComputeRegionSecurityPolicy#action}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

An integer indicating the priority of a rule in the list.

The priority must be a positive value between 0 and 2147483647.
Rules are evaluated from highest to lowest priority where 0 is the highest priority and 2147483647 is the lowest priority.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#priority ComputeRegionSecurityPolicy#priority}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#description ComputeRegionSecurityPolicy#description}

---

##### `Match`<sup>Optional</sup> <a name="Match" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.match"></a>

```go
Match ComputeRegionSecurityPolicyRulesMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a>

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#match ComputeRegionSecurityPolicy#match}

---

##### `NetworkMatch`<sup>Optional</sup> <a name="NetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.networkMatch"></a>

```go
NetworkMatch ComputeRegionSecurityPolicyRulesNetworkMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a>

network_match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#network_match ComputeRegionSecurityPolicy#network_match}

---

##### `PreconfiguredWafConfig`<sup>Optional</sup> <a name="PreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.preconfiguredWafConfig"></a>

```go
PreconfiguredWafConfig ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

preconfigured_waf_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#preconfigured_waf_config ComputeRegionSecurityPolicy#preconfigured_waf_config}

---

##### `Preview`<sup>Optional</sup> <a name="Preview" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.preview"></a>

```go
Preview interface{}
```

- *Type:* interface{}

If set to true, the specified action is not enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#preview ComputeRegionSecurityPolicy#preview}

---

##### `RateLimitOptions`<sup>Optional</sup> <a name="RateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRules.property.rateLimitOptions"></a>

```go
RateLimitOptions ComputeRegionSecurityPolicyRulesRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a>

rate_limit_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#rate_limit_options ComputeRegionSecurityPolicy#rate_limit_options}

---

### ComputeRegionSecurityPolicyRulesMatch <a name="ComputeRegionSecurityPolicyRulesMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyRulesMatch {
	Config: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig,
	Expr: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr,
	VersionedExpr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a></code> | config block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a></code> | expr block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.versionedExpr">VersionedExpr</a></code> | <code>*string</code> | Preconfigured versioned expression. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.config"></a>

```go
Config ComputeRegionSecurityPolicyRulesMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#config ComputeRegionSecurityPolicy#config}

---

##### `Expr`<sup>Optional</sup> <a name="Expr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.expr"></a>

```go
Expr ComputeRegionSecurityPolicyRulesMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a>

expr block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#expr ComputeRegionSecurityPolicy#expr}

---

##### `VersionedExpr`<sup>Optional</sup> <a name="VersionedExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch.property.versionedExpr"></a>

```go
VersionedExpr *string
```

- *Type:* *string

Preconfigured versioned expression.

If this field is specified, config must also be specified.
Available preconfigured expressions along with their requirements are: SRC_IPS_V1 - must specify the corresponding srcIpRange field in config. Possible values: ["SRC_IPS_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#versioned_expr ComputeRegionSecurityPolicy#versioned_expr}

---

### ComputeRegionSecurityPolicyRulesMatchConfig <a name="ComputeRegionSecurityPolicyRulesMatchConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyRulesMatchConfig {
	SrcIpRanges: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | CIDR IP address range. Maximum number of srcIpRanges allowed is 10. |

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig.property.srcIpRanges"></a>

```go
SrcIpRanges *[]*string
```

- *Type:* *[]*string

CIDR IP address range. Maximum number of srcIpRanges allowed is 10.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#src_ip_ranges ComputeRegionSecurityPolicy#src_ip_ranges}

---

### ComputeRegionSecurityPolicyRulesMatchExpr <a name="ComputeRegionSecurityPolicyRulesMatchExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyRulesMatchExpr {
	Expression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

The application context of the containing message determines which well-known feature set of CEL is supported.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#expression ComputeRegionSecurityPolicy#expression}

---

### ComputeRegionSecurityPolicyRulesNetworkMatch <a name="ComputeRegionSecurityPolicyRulesNetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyRulesNetworkMatch {
	DestIpRanges: *[]*string,
	DestPorts: *[]*string,
	IpProtocols: *[]*string,
	SrcAsns: *[]*f64,
	SrcIpRanges: *[]*string,
	SrcPorts: *[]*string,
	SrcRegionCodes: *[]*string,
	UserDefinedFields: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.destIpRanges">DestIpRanges</a></code> | <code>*[]*string</code> | Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.destPorts">DestPorts</a></code> | <code>*[]*string</code> | Destination port numbers for TCP/UDP/SCTP. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.ipProtocols">IpProtocols</a></code> | <code>*[]*string</code> | IPv4 protocol / IPv6 next header (after extension headers). |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcAsns">SrcAsns</a></code> | <code>*[]*f64</code> | BGP Autonomous System Number associated with the source IP address. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcPorts">SrcPorts</a></code> | <code>*[]*string</code> | Source port numbers for TCP/UDP/SCTP. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>*[]*string</code> | Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.userDefinedFields">UserDefinedFields</a></code> | <code>interface{}</code> | user_defined_fields block. |

---

##### `DestIpRanges`<sup>Optional</sup> <a name="DestIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.destIpRanges"></a>

```go
DestIpRanges *[]*string
```

- *Type:* *[]*string

Destination IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#dest_ip_ranges ComputeRegionSecurityPolicy#dest_ip_ranges}

---

##### `DestPorts`<sup>Optional</sup> <a name="DestPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.destPorts"></a>

```go
DestPorts *[]*string
```

- *Type:* *[]*string

Destination port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#dest_ports ComputeRegionSecurityPolicy#dest_ports}

---

##### `IpProtocols`<sup>Optional</sup> <a name="IpProtocols" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.ipProtocols"></a>

```go
IpProtocols *[]*string
```

- *Type:* *[]*string

IPv4 protocol / IPv6 next header (after extension headers).

Each element can be an 8-bit unsigned decimal number (e.g. "6"), range (e.g. "253-254"), or one of the following protocol names: "tcp", "udp", "icmp", "esp", "ah", "ipip", or "sctp".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#ip_protocols ComputeRegionSecurityPolicy#ip_protocols}

---

##### `SrcAsns`<sup>Optional</sup> <a name="SrcAsns" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcAsns"></a>

```go
SrcAsns *[]*f64
```

- *Type:* *[]*f64

BGP Autonomous System Number associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#src_asns ComputeRegionSecurityPolicy#src_asns}

---

##### `SrcIpRanges`<sup>Optional</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcIpRanges"></a>

```go
SrcIpRanges *[]*string
```

- *Type:* *[]*string

Source IPv4/IPv6 addresses or CIDR prefixes, in standard text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#src_ip_ranges ComputeRegionSecurityPolicy#src_ip_ranges}

---

##### `SrcPorts`<sup>Optional</sup> <a name="SrcPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcPorts"></a>

```go
SrcPorts *[]*string
```

- *Type:* *[]*string

Source port numbers for TCP/UDP/SCTP.

Each element can be a 16-bit unsigned decimal number (e.g. "80") or range (e.g. "0-1023").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#src_ports ComputeRegionSecurityPolicy#src_ports}

---

##### `SrcRegionCodes`<sup>Optional</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.srcRegionCodes"></a>

```go
SrcRegionCodes *[]*string
```

- *Type:* *[]*string

Two-letter ISO 3166-1 alpha-2 country code associated with the source IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#src_region_codes ComputeRegionSecurityPolicy#src_region_codes}

---

##### `UserDefinedFields`<sup>Optional</sup> <a name="UserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch.property.userDefinedFields"></a>

```go
UserDefinedFields interface{}
```

- *Type:* interface{}

user_defined_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#user_defined_fields ComputeRegionSecurityPolicy#user_defined_fields}

---

### ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields <a name="ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields {
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.name">Name</a></code> | <code>*string</code> | Name of the user-defined field, as given in the definition. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.values">Values</a></code> | <code>*[]*string</code> | Matching values of the field. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the user-defined field, as given in the definition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#name ComputeRegionSecurityPolicy#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFields.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Matching values of the field.

Each element can be a 32-bit unsigned decimal or hexadecimal (starting with "0x") number (e.g. "64") or range (e.g. "0x400-0x7ff").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#values ComputeRegionSecurityPolicy#values}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig {
	Exclusion: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.property.exclusion">Exclusion</a></code> | <code>interface{}</code> | exclusion block. |

---

##### `Exclusion`<sup>Optional</sup> <a name="Exclusion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig.property.exclusion"></a>

```go
Exclusion interface{}
```

- *Type:* interface{}

exclusion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#exclusion ComputeRegionSecurityPolicy#exclusion}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion {
	TargetRuleSet: *string,
	RequestCookie: interface{},
	RequestHeader: interface{},
	RequestQueryParam: interface{},
	RequestUri: interface{},
	TargetRuleIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleSet">TargetRuleSet</a></code> | <code>*string</code> | Target WAF rule set to apply the preconfigured WAF exclusion. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestCookie">RequestCookie</a></code> | <code>interface{}</code> | request_cookie block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestHeader">RequestHeader</a></code> | <code>interface{}</code> | request_header block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestQueryParam">RequestQueryParam</a></code> | <code>interface{}</code> | request_query_param block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestUri">RequestUri</a></code> | <code>interface{}</code> | request_uri block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleIds">TargetRuleIds</a></code> | <code>*[]*string</code> | A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion. |

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleSet"></a>

```go
TargetRuleSet *string
```

- *Type:* *string

Target WAF rule set to apply the preconfigured WAF exclusion.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#target_rule_set ComputeRegionSecurityPolicy#target_rule_set}

---

##### `RequestCookie`<sup>Optional</sup> <a name="RequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestCookie"></a>

```go
RequestCookie interface{}
```

- *Type:* interface{}

request_cookie block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#request_cookie ComputeRegionSecurityPolicy#request_cookie}

---

##### `RequestHeader`<sup>Optional</sup> <a name="RequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestHeader"></a>

```go
RequestHeader interface{}
```

- *Type:* interface{}

request_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#request_header ComputeRegionSecurityPolicy#request_header}

---

##### `RequestQueryParam`<sup>Optional</sup> <a name="RequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestQueryParam"></a>

```go
RequestQueryParam interface{}
```

- *Type:* interface{}

request_query_param block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#request_query_param ComputeRegionSecurityPolicy#request_query_param}

---

##### `RequestUri`<sup>Optional</sup> <a name="RequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.requestUri"></a>

```go
RequestUri interface{}
```

- *Type:* interface{}

request_uri block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#request_uri ComputeRegionSecurityPolicy#request_uri}

---

##### `TargetRuleIds`<sup>Optional</sup> <a name="TargetRuleIds" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusion.property.targetRuleIds"></a>

```go
TargetRuleIds *[]*string
```

- *Type:* *[]*string

A list of target rule IDs under the WAF rule set to apply the preconfigured WAF exclusion.

If omitted, it refers to all the rule IDs under the WAF rule set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#target_rule_ids ComputeRegionSecurityPolicy#target_rule_ids}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#operator ComputeRegionSecurityPolicy#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookie.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#value ComputeRegionSecurityPolicy#value}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#operator ComputeRegionSecurityPolicy#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeader.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#value ComputeRegionSecurityPolicy#value}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#operator ComputeRegionSecurityPolicy#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParam.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#value ComputeRegionSecurityPolicy#value}

---

### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri {
	Operator: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.operator">Operator</a></code> | <code>*string</code> | You can specify an exact match or a partial match by using a field operator and a field value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.value">Value</a></code> | <code>*string</code> | A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

You can specify an exact match or a partial match by using a field operator and a field value.

Available options:
EQUALS: The operator matches if the field value equals the specified value.
STARTS_WITH: The operator matches if the field value starts with the specified value.
ENDS_WITH: The operator matches if the field value ends with the specified value.
CONTAINS: The operator matches if the field value contains the specified value.
EQUALS_ANY: The operator matches if the field value is any value. Possible values: ["CONTAINS", "ENDS_WITH", "EQUALS", "EQUALS_ANY", "STARTS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#operator ComputeRegionSecurityPolicy#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUri.property.value"></a>

```go
Value *string
```

- *Type:* *string

A request field matching the specified value will be excluded from inspection during preconfigured WAF evaluation.

The field value must be given if the field operator is not EQUALS_ANY, and cannot be given if the field operator is EQUALS_ANY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#value ComputeRegionSecurityPolicy#value}

---

### ComputeRegionSecurityPolicyRulesRateLimitOptions <a name="ComputeRegionSecurityPolicyRulesRateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions {
	BanDurationSec: *f64,
	BanThreshold: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold,
	ConformAction: *string,
	EnforceOnKey: *string,
	EnforceOnKeyConfigs: interface{},
	EnforceOnKeyName: *string,
	ExceedAction: *string,
	RateLimitThreshold: github.com/cdktf/cdktf-provider-google-go/google/v14.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.banDurationSec">BanDurationSec</a></code> | <code>*f64</code> | Can only be specified if the action for the rule is "rate_based_ban". |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.banThreshold">BanThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | ban_threshold block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.conformAction">ConformAction</a></code> | <code>*string</code> | Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKey">EnforceOnKey</a></code> | <code>*string</code> | Determines the key to enforce the rateLimitThreshold on. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyConfigs">EnforceOnKeyConfigs</a></code> | <code>interface{}</code> | enforce_on_key_configs block. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.exceedAction">ExceedAction</a></code> | <code>*string</code> | Action to take for requests that are above the configured rate limit threshold, to deny with a specified HTTP response code. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | rate_limit_threshold block. |

---

##### `BanDurationSec`<sup>Optional</sup> <a name="BanDurationSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.banDurationSec"></a>

```go
BanDurationSec *f64
```

- *Type:* *f64

Can only be specified if the action for the rule is "rate_based_ban".

If specified, determines the time (in seconds) the traffic will continue to be banned by the rate limit after the rate falls below the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#ban_duration_sec ComputeRegionSecurityPolicy#ban_duration_sec}

---

##### `BanThreshold`<sup>Optional</sup> <a name="BanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.banThreshold"></a>

```go
BanThreshold ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

ban_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#ban_threshold ComputeRegionSecurityPolicy#ban_threshold}

---

##### `ConformAction`<sup>Optional</sup> <a name="ConformAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.conformAction"></a>

```go
ConformAction *string
```

- *Type:* *string

Action to take for requests that are under the configured rate limit threshold. Valid option is "allow" only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#conform_action ComputeRegionSecurityPolicy#conform_action}

---

##### `EnforceOnKey`<sup>Optional</sup> <a name="EnforceOnKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKey"></a>

```go
EnforceOnKey *string
```

- *Type:* *string

Determines the key to enforce the rateLimitThreshold on.

Possible values are:

* ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKey" is not configured.
* IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
* HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
* XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
* HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
* HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
* SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
* REGION_CODE: The country/region from which the request originates.
* TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "USER_IP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#enforce_on_key ComputeRegionSecurityPolicy#enforce_on_key}

---

##### `EnforceOnKeyConfigs`<sup>Optional</sup> <a name="EnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyConfigs"></a>

```go
EnforceOnKeyConfigs interface{}
```

- *Type:* interface{}

enforce_on_key_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#enforce_on_key_configs ComputeRegionSecurityPolicy#enforce_on_key_configs}

---

##### `EnforceOnKeyName`<sup>Optional</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.enforceOnKeyName"></a>

```go
EnforceOnKeyName *string
```

- *Type:* *string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#enforce_on_key_name ComputeRegionSecurityPolicy#enforce_on_key_name}

---

##### `ExceedAction`<sup>Optional</sup> <a name="ExceedAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.exceedAction"></a>

```go
ExceedAction *string
```

- *Type:* *string

Action to take for requests that are above the configured rate limit threshold, to deny with a specified HTTP response code.

Valid options are deny(STATUS), where valid values for STATUS are 403, 404, 429, and 502.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#exceed_action ComputeRegionSecurityPolicy#exceed_action}

---

##### `RateLimitThreshold`<sup>Optional</sup> <a name="RateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions.property.rateLimitThreshold"></a>

```go
RateLimitThreshold ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

rate_limit_threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#rate_limit_threshold ComputeRegionSecurityPolicy#rate_limit_threshold}

---

### ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold {
	Count: *f64,
	IntervalSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.count">Count</a></code> | <code>*f64</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | Interval over which the threshold is computed. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#count ComputeRegionSecurityPolicy#count}

---

##### `IntervalSec`<sup>Optional</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold.property.intervalSec"></a>

```go
IntervalSec *f64
```

- *Type:* *f64

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#interval_sec ComputeRegionSecurityPolicy#interval_sec}

---

### ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs {
	EnforceOnKeyName: *string,
	EnforceOnKeyType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType">EnforceOnKeyType</a></code> | <code>*string</code> | Determines the key to enforce the rateLimitThreshold on. |

---

##### `EnforceOnKeyName`<sup>Optional</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyName"></a>

```go
EnforceOnKeyName *string
```

- *Type:* *string

Rate limit key name applicable only for the following key types: HTTP_HEADER -- Name of the HTTP header whose value is taken as the key value.

HTTP_COOKIE -- Name of the HTTP cookie whose value is taken as the key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#enforce_on_key_name ComputeRegionSecurityPolicy#enforce_on_key_name}

---

##### `EnforceOnKeyType`<sup>Optional</sup> <a name="EnforceOnKeyType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigs.property.enforceOnKeyType"></a>

```go
EnforceOnKeyType *string
```

- *Type:* *string

Determines the key to enforce the rateLimitThreshold on.

Possible values are:

* ALL: A single rate limit threshold is applied to all the requests matching this rule. This is the default value if "enforceOnKeyConfigs" is not configured.
* IP: The source IP address of the request is the key. Each IP has this limit enforced separately.
* HTTP_HEADER: The value of the HTTP header whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the header value. If no such header is present in the request, the key type defaults to ALL.
* XFF_IP: The first IP address (i.e. the originating client IP address) specified in the list of IPs under X-Forwarded-For HTTP header. If no such header is present or the value is not a valid IP, the key defaults to the source IP address of the request i.e. key type IP.
* HTTP_COOKIE: The value of the HTTP cookie whose name is configured under "enforceOnKeyName". The key value is truncated to the first 128 bytes of the cookie value. If no such cookie is present in the request, the key type defaults to ALL.
* HTTP_PATH: The URL path of the HTTP request. The key value is truncated to the first 128 bytes.
* SNI: Server name indication in the TLS session of the HTTPS request. The key value is truncated to the first 128 bytes. The key type defaults to ALL on a HTTP session.
* REGION_CODE: The country/region from which the request originates.
* TLS_JA3_FINGERPRINT: JA3 TLS/SSL fingerprint if the client connects using HTTPS, HTTP/2 or HTTP/3. If not available, the key type defaults to ALL.
* USER_IP: The IP address of the originating client, which is resolved based on "userIpRequestHeaders" configured with the security policy. If there is no "userIpRequestHeaders" configuration or an IP address cannot be resolved from it, the key type defaults to IP. Possible values: ["ALL", "IP", "HTTP_HEADER", "XFF_IP", "HTTP_COOKIE", "HTTP_PATH", "SNI", "REGION_CODE", "TLS_JA3_FINGERPRINT", "USER_IP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#enforce_on_key_type ComputeRegionSecurityPolicy#enforce_on_key_type}

---

### ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold {
	Count: *f64,
	IntervalSec: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.count">Count</a></code> | <code>*f64</code> | Number of HTTP(S) requests for calculating the threshold. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | Interval over which the threshold is computed. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

Number of HTTP(S) requests for calculating the threshold.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#count ComputeRegionSecurityPolicy#count}

---

##### `IntervalSec`<sup>Optional</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold.property.intervalSec"></a>

```go
IntervalSec *f64
```

- *Type:* *f64

Interval over which the threshold is computed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#interval_sec ComputeRegionSecurityPolicy#interval_sec}

---

### ComputeRegionSecurityPolicyTimeouts <a name="ComputeRegionSecurityPolicyTimeouts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#create ComputeRegionSecurityPolicy#create}. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#delete ComputeRegionSecurityPolicy#delete}. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#update ComputeRegionSecurityPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#create ComputeRegionSecurityPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#delete ComputeRegionSecurityPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#update ComputeRegionSecurityPolicy#update}.

---

### ComputeRegionSecurityPolicyUserDefinedFields <a name="ComputeRegionSecurityPolicyUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

&computeregionsecuritypolicy.ComputeRegionSecurityPolicyUserDefinedFields {
	Base: *string,
	Mask: *string,
	Name: *string,
	Offset: *f64,
	Size: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.base">Base</a></code> | <code>*string</code> | The base relative to which 'offset' is measured. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.mask">Mask</a></code> | <code>*string</code> | If specified, apply this mask (bitwise AND) to the field to ignore bits before matching. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.name">Name</a></code> | <code>*string</code> | The name of this field. Must be unique within the policy. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.offset">Offset</a></code> | <code>*f64</code> | Offset of the first byte of the field (in network byte order) relative to 'base'. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.size">Size</a></code> | <code>*f64</code> | Size of the field in bytes. Valid values: 1-4. |

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.base"></a>

```go
Base *string
```

- *Type:* *string

The base relative to which 'offset' is measured.

Possible values are:

* IPV4: Points to the beginning of the IPv4 header.
* IPV6: Points to the beginning of the IPv6 header.
* TCP: Points to the beginning of the TCP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments.
* UDP: Points to the beginning of the UDP header, skipping over any IPv4 options or IPv6 extension headers. Not present for non-first fragments. Possible values: ["IPV4", "IPV6", "TCP", "UDP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#base ComputeRegionSecurityPolicy#base}

---

##### `Mask`<sup>Optional</sup> <a name="Mask" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.mask"></a>

```go
Mask *string
```

- *Type:* *string

If specified, apply this mask (bitwise AND) to the field to ignore bits before matching.

Encoded as a hexadecimal number (starting with "0x").
The last byte of the field (in network byte order) corresponds to the least significant byte of the mask.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#mask ComputeRegionSecurityPolicy#mask}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of this field. Must be unique within the policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#name ComputeRegionSecurityPolicy#name}

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.offset"></a>

```go
Offset *f64
```

- *Type:* *f64

Offset of the first byte of the field (in network byte order) relative to 'base'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#offset ComputeRegionSecurityPolicy#offset}

---

##### `Size`<sup>Optional</sup> <a name="Size" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFields.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Size of the field in bytes. Valid values: 1-4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.36.0/docs/resources/compute_region_security_policy#size ComputeRegionSecurityPolicy#size}

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference <a name="ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyDdosProtectionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtectionInput">DdosProtectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection">DdosProtection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DdosProtectionInput`<sup>Optional</sup> <a name="DdosProtectionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtectionInput"></a>

```go
func DdosProtectionInput() *string
```

- *Type:* *string

---

##### `DdosProtection`<sup>Required</sup> <a name="DdosProtection" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.ddosProtection"></a>

```go
func DdosProtection() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionSecurityPolicyDdosProtectionConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyDdosProtectionConfig">ComputeRegionSecurityPolicyDdosProtectionConfig</a>

---


### ComputeRegionSecurityPolicyRulesList <a name="ComputeRegionSecurityPolicyRulesList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionSecurityPolicyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.get"></a>

```go
func Get(index *f64) ComputeRegionSecurityPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulesMatchConfigOutputReference <a name="ComputeRegionSecurityPolicyRulesMatchConfigOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesMatchConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyRulesMatchConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.resetSrcIpRanges"></a>

```go
func ResetSrcIpRanges()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRangesInput"></a>

```go
func SrcIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionSecurityPolicyRulesMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a>

---


### ComputeRegionSecurityPolicyRulesMatchExprOutputReference <a name="ComputeRegionSecurityPolicyRulesMatchExprOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesMatchExprOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyRulesMatchExprOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionSecurityPolicyRulesMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a>

---


### ComputeRegionSecurityPolicyRulesMatchOutputReference <a name="ComputeRegionSecurityPolicyRulesMatchOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyRulesMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putExpr">PutExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetExpr">ResetExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetVersionedExpr">ResetVersionedExpr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putConfig"></a>

```go
func PutConfig(value ComputeRegionSecurityPolicyRulesMatchConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a>

---

##### `PutExpr` <a name="PutExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putExpr"></a>

```go
func PutExpr(value ComputeRegionSecurityPolicyRulesMatchExpr)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.putExpr.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetConfig"></a>

```go
func ResetConfig()
```

##### `ResetExpr` <a name="ResetExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetExpr"></a>

```go
func ResetExpr()
```

##### `ResetVersionedExpr` <a name="ResetVersionedExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.resetVersionedExpr"></a>

```go
func ResetVersionedExpr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.config">Config</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference">ComputeRegionSecurityPolicyRulesMatchConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.expr">Expr</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference">ComputeRegionSecurityPolicyRulesMatchExprOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.configInput">ConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.exprInput">ExprInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExprInput">VersionedExprInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExpr">VersionedExpr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.config"></a>

```go
func Config() ComputeRegionSecurityPolicyRulesMatchConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfigOutputReference">ComputeRegionSecurityPolicyRulesMatchConfigOutputReference</a>

---

##### `Expr`<sup>Required</sup> <a name="Expr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.expr"></a>

```go
func Expr() ComputeRegionSecurityPolicyRulesMatchExprOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExprOutputReference">ComputeRegionSecurityPolicyRulesMatchExprOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.configInput"></a>

```go
func ConfigInput() ComputeRegionSecurityPolicyRulesMatchConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchConfig">ComputeRegionSecurityPolicyRulesMatchConfig</a>

---

##### `ExprInput`<sup>Optional</sup> <a name="ExprInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.exprInput"></a>

```go
func ExprInput() ComputeRegionSecurityPolicyRulesMatchExpr
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchExpr">ComputeRegionSecurityPolicyRulesMatchExpr</a>

---

##### `VersionedExprInput`<sup>Optional</sup> <a name="VersionedExprInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExprInput"></a>

```go
func VersionedExprInput() *string
```

- *Type:* *string

---

##### `VersionedExpr`<sup>Required</sup> <a name="VersionedExpr" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.versionedExpr"></a>

```go
func VersionedExpr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionSecurityPolicyRulesMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a>

---


### ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference <a name="ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesNetworkMatchOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.putUserDefinedFields">PutUserDefinedFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestIpRanges">ResetDestIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestPorts">ResetDestPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetIpProtocols">ResetIpProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcAsns">ResetSrcAsns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcIpRanges">ResetSrcIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcPorts">ResetSrcPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcRegionCodes">ResetSrcRegionCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetUserDefinedFields">ResetUserDefinedFields</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutUserDefinedFields` <a name="PutUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.putUserDefinedFields"></a>

```go
func PutUserDefinedFields(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.putUserDefinedFields.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDestIpRanges` <a name="ResetDestIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestIpRanges"></a>

```go
func ResetDestIpRanges()
```

##### `ResetDestPorts` <a name="ResetDestPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetDestPorts"></a>

```go
func ResetDestPorts()
```

##### `ResetIpProtocols` <a name="ResetIpProtocols" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetIpProtocols"></a>

```go
func ResetIpProtocols()
```

##### `ResetSrcAsns` <a name="ResetSrcAsns" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcAsns"></a>

```go
func ResetSrcAsns()
```

##### `ResetSrcIpRanges` <a name="ResetSrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcIpRanges"></a>

```go
func ResetSrcIpRanges()
```

##### `ResetSrcPorts` <a name="ResetSrcPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcPorts"></a>

```go
func ResetSrcPorts()
```

##### `ResetSrcRegionCodes` <a name="ResetSrcRegionCodes" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetSrcRegionCodes"></a>

```go
func ResetSrcRegionCodes()
```

##### `ResetUserDefinedFields` <a name="ResetUserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.resetUserDefinedFields"></a>

```go
func ResetUserDefinedFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFields">UserDefinedFields</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList">ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRangesInput">DestIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPortsInput">DestPortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocolsInput">IpProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsnsInput">SrcAsnsInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRangesInput">SrcIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPortsInput">SrcPortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodesInput">SrcRegionCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFieldsInput">UserDefinedFieldsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRanges">DestIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPorts">DestPorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocols">IpProtocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsns">SrcAsns</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRanges">SrcIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPorts">SrcPorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodes">SrcRegionCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UserDefinedFields`<sup>Required</sup> <a name="UserDefinedFields" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFields"></a>

```go
func UserDefinedFields() ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList">ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList</a>

---

##### `DestIpRangesInput`<sup>Optional</sup> <a name="DestIpRangesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRangesInput"></a>

```go
func DestIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DestPortsInput`<sup>Optional</sup> <a name="DestPortsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPortsInput"></a>

```go
func DestPortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IpProtocolsInput`<sup>Optional</sup> <a name="IpProtocolsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocolsInput"></a>

```go
func IpProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcAsnsInput`<sup>Optional</sup> <a name="SrcAsnsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsnsInput"></a>

```go
func SrcAsnsInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `SrcIpRangesInput`<sup>Optional</sup> <a name="SrcIpRangesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRangesInput"></a>

```go
func SrcIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcPortsInput`<sup>Optional</sup> <a name="SrcPortsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPortsInput"></a>

```go
func SrcPortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcRegionCodesInput`<sup>Optional</sup> <a name="SrcRegionCodesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodesInput"></a>

```go
func SrcRegionCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `UserDefinedFieldsInput`<sup>Optional</sup> <a name="UserDefinedFieldsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.userDefinedFieldsInput"></a>

```go
func UserDefinedFieldsInput() interface{}
```

- *Type:* interface{}

---

##### `DestIpRanges`<sup>Required</sup> <a name="DestIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destIpRanges"></a>

```go
func DestIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `DestPorts`<sup>Required</sup> <a name="DestPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.destPorts"></a>

```go
func DestPorts() *[]*string
```

- *Type:* *[]*string

---

##### `IpProtocols`<sup>Required</sup> <a name="IpProtocols" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.ipProtocols"></a>

```go
func IpProtocols() *[]*string
```

- *Type:* *[]*string

---

##### `SrcAsns`<sup>Required</sup> <a name="SrcAsns" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcAsns"></a>

```go
func SrcAsns() *[]*f64
```

- *Type:* *[]*f64

---

##### `SrcIpRanges`<sup>Required</sup> <a name="SrcIpRanges" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcIpRanges"></a>

```go
func SrcIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `SrcPorts`<sup>Required</sup> <a name="SrcPorts" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcPorts"></a>

```go
func SrcPorts() *[]*string
```

- *Type:* *[]*string

---

##### `SrcRegionCodes`<sup>Required</sup> <a name="SrcRegionCodes" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.srcRegionCodes"></a>

```go
func SrcRegionCodes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionSecurityPolicyRulesNetworkMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a>

---


### ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList <a name="ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get"></a>

```go
func Get(index *f64) ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference <a name="ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchUserDefinedFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulesOutputReference <a name="ComputeRegionSecurityPolicyRulesOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionSecurityPolicyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putMatch">PutMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putNetworkMatch">PutNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putPreconfiguredWafConfig">PutPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putRateLimitOptions">PutRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetMatch">ResetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetNetworkMatch">ResetNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetPreconfiguredWafConfig">ResetPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetPreview">ResetPreview</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetRateLimitOptions">ResetRateLimitOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMatch` <a name="PutMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putMatch"></a>

```go
func PutMatch(value ComputeRegionSecurityPolicyRulesMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a>

---

##### `PutNetworkMatch` <a name="PutNetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putNetworkMatch"></a>

```go
func PutNetworkMatch(value ComputeRegionSecurityPolicyRulesNetworkMatch)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putNetworkMatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a>

---

##### `PutPreconfiguredWafConfig` <a name="PutPreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putPreconfiguredWafConfig"></a>

```go
func PutPreconfiguredWafConfig(value ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putPreconfiguredWafConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---

##### `PutRateLimitOptions` <a name="PutRateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putRateLimitOptions"></a>

```go
func PutRateLimitOptions(value ComputeRegionSecurityPolicyRulesRateLimitOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.putRateLimitOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetMatch` <a name="ResetMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetMatch"></a>

```go
func ResetMatch()
```

##### `ResetNetworkMatch` <a name="ResetNetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetNetworkMatch"></a>

```go
func ResetNetworkMatch()
```

##### `ResetPreconfiguredWafConfig` <a name="ResetPreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetPreconfiguredWafConfig"></a>

```go
func ResetPreconfiguredWafConfig()
```

##### `ResetPreview` <a name="ResetPreview" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetPreview"></a>

```go
func ResetPreview()
```

##### `ResetRateLimitOptions` <a name="ResetRateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.resetRateLimitOptions"></a>

```go
func ResetRateLimitOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.match">Match</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference">ComputeRegionSecurityPolicyRulesMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.networkMatch">NetworkMatch</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference">ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfig">PreconfiguredWafConfig</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptions">RateLimitOptions</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.matchInput">MatchInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.networkMatchInput">NetworkMatchInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfigInput">PreconfiguredWafConfigInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.previewInput">PreviewInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptionsInput">RateLimitOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preview">Preview</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Match`<sup>Required</sup> <a name="Match" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.match"></a>

```go
func Match() ComputeRegionSecurityPolicyRulesMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatchOutputReference">ComputeRegionSecurityPolicyRulesMatchOutputReference</a>

---

##### `NetworkMatch`<sup>Required</sup> <a name="NetworkMatch" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.networkMatch"></a>

```go
func NetworkMatch() ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference">ComputeRegionSecurityPolicyRulesNetworkMatchOutputReference</a>

---

##### `PreconfiguredWafConfig`<sup>Required</sup> <a name="PreconfiguredWafConfig" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfig"></a>

```go
func PreconfiguredWafConfig() ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference</a>

---

##### `RateLimitOptions`<sup>Required</sup> <a name="RateLimitOptions" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptions"></a>

```go
func RateLimitOptions() ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `MatchInput`<sup>Optional</sup> <a name="MatchInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.matchInput"></a>

```go
func MatchInput() ComputeRegionSecurityPolicyRulesMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesMatch">ComputeRegionSecurityPolicyRulesMatch</a>

---

##### `NetworkMatchInput`<sup>Optional</sup> <a name="NetworkMatchInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.networkMatchInput"></a>

```go
func NetworkMatchInput() ComputeRegionSecurityPolicyRulesNetworkMatch
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesNetworkMatch">ComputeRegionSecurityPolicyRulesNetworkMatch</a>

---

##### `PreconfiguredWafConfigInput`<sup>Optional</sup> <a name="PreconfiguredWafConfigInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preconfiguredWafConfigInput"></a>

```go
func PreconfiguredWafConfigInput() ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---

##### `PreviewInput`<sup>Optional</sup> <a name="PreviewInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.previewInput"></a>

```go
func PreviewInput() interface{}
```

- *Type:* interface{}

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `RateLimitOptionsInput`<sup>Optional</sup> <a name="RateLimitOptionsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.rateLimitOptionsInput"></a>

```go
func RateLimitOptionsInput() ComputeRegionSecurityPolicyRulesRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Preview`<sup>Required</sup> <a name="Preview" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.preview"></a>

```go
func Preview() interface{}
```

- *Type:* interface{}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get"></a>

```go
func Get(index *f64) ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestCookie">PutRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestHeader">PutRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam">PutRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestUri">PutRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestCookie">ResetRequestCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestHeader">ResetRequestHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam">ResetRequestQueryParam</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestUri">ResetRequestUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds">ResetTargetRuleIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestCookie` <a name="PutRequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestCookie"></a>

```go
func PutRequestCookie(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestCookie.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestHeader` <a name="PutRequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestHeader"></a>

```go
func PutRequestHeader(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestHeader.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestQueryParam` <a name="PutRequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam"></a>

```go
func PutRequestQueryParam(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestQueryParam.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRequestUri` <a name="PutRequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestUri"></a>

```go
func PutRequestUri(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.putRequestUri.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetRequestCookie` <a name="ResetRequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestCookie"></a>

```go
func ResetRequestCookie()
```

##### `ResetRequestHeader` <a name="ResetRequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestHeader"></a>

```go
func ResetRequestHeader()
```

##### `ResetRequestQueryParam` <a name="ResetRequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestQueryParam"></a>

```go
func ResetRequestQueryParam()
```

##### `ResetRequestUri` <a name="ResetRequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetRequestUri"></a>

```go
func ResetRequestUri()
```

##### `ResetTargetRuleIds` <a name="ResetTargetRuleIds" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.resetTargetRuleIds"></a>

```go
func ResetTargetRuleIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookie">RequestCookie</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeader">RequestHeader</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam">RequestQueryParam</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUri">RequestUri</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput">RequestCookieInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput">RequestHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput">RequestQueryParamInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUriInput">RequestUriInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput">TargetRuleIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput">TargetRuleSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds">TargetRuleIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet">TargetRuleSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestCookie`<sup>Required</sup> <a name="RequestCookie" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookie"></a>

```go
func RequestCookie() ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList</a>

---

##### `RequestHeader`<sup>Required</sup> <a name="RequestHeader" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeader"></a>

```go
func RequestHeader() ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList</a>

---

##### `RequestQueryParam`<sup>Required</sup> <a name="RequestQueryParam" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParam"></a>

```go
func RequestQueryParam() ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList</a>

---

##### `RequestUri`<sup>Required</sup> <a name="RequestUri" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUri"></a>

```go
func RequestUri() ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList</a>

---

##### `RequestCookieInput`<sup>Optional</sup> <a name="RequestCookieInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestCookieInput"></a>

```go
func RequestCookieInput() interface{}
```

- *Type:* interface{}

---

##### `RequestHeaderInput`<sup>Optional</sup> <a name="RequestHeaderInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestHeaderInput"></a>

```go
func RequestHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `RequestQueryParamInput`<sup>Optional</sup> <a name="RequestQueryParamInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestQueryParamInput"></a>

```go
func RequestQueryParamInput() interface{}
```

- *Type:* interface{}

---

##### `RequestUriInput`<sup>Optional</sup> <a name="RequestUriInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.requestUriInput"></a>

```go
func RequestUriInput() interface{}
```

- *Type:* interface{}

---

##### `TargetRuleIdsInput`<sup>Optional</sup> <a name="TargetRuleIdsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIdsInput"></a>

```go
func TargetRuleIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TargetRuleSetInput`<sup>Optional</sup> <a name="TargetRuleSetInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSetInput"></a>

```go
func TargetRuleSetInput() *string
```

- *Type:* *string

---

##### `TargetRuleIds`<sup>Required</sup> <a name="TargetRuleIds" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleIds"></a>

```go
func TargetRuleIds() *[]*string
```

- *Type:* *[]*string

---

##### `TargetRuleSet`<sup>Required</sup> <a name="TargetRuleSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.targetRuleSet"></a>

```go
func TargetRuleSet() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get"></a>

```go
func Get(index *f64) ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestCookieOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get"></a>

```go
func Get(index *f64) ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestHeaderOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get"></a>

```go
func Get(index *f64) ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestQueryParamOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get"></a>

```go
func Get(index *f64) ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionRequestUriOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference <a name="ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.putExclusion">PutExclusion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resetExclusion">ResetExclusion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusion` <a name="PutExclusion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.putExclusion"></a>

```go
func PutExclusion(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.putExclusion.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetExclusion` <a name="ResetExclusion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.resetExclusion"></a>

```go
func ResetExclusion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusion">Exclusion</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusionInput">ExclusionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Exclusion`<sup>Required</sup> <a name="Exclusion" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusion"></a>

```go
func Exclusion() ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigExclusionList</a>

---

##### `ExclusionInput`<sup>Optional</sup> <a name="ExclusionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.exclusionInput"></a>

```go
func ExclusionInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig">ComputeRegionSecurityPolicyRulesPreconfiguredWafConfig</a>

---


### ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetIntervalSec">ResetIntervalSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetIntervalSec` <a name="ResetIntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.resetIntervalSec"></a>

```go
func ResetIntervalSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput">IntervalSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `IntervalSecInput`<sup>Optional</sup> <a name="IntervalSecInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSecInput"></a>

```go
func IntervalSecInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.intervalSec"></a>

```go
func IntervalSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---


### ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get"></a>

```go
func Get(index *f64) ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName">ResetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType">ResetEnforceOnKeyType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnforceOnKeyName` <a name="ResetEnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyName"></a>

```go
func ResetEnforceOnKeyName()
```

##### `ResetEnforceOnKeyType` <a name="ResetEnforceOnKeyType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.resetEnforceOnKeyType"></a>

```go
func ResetEnforceOnKeyType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput">EnforceOnKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput">EnforceOnKeyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType">EnforceOnKeyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnforceOnKeyNameInput`<sup>Optional</sup> <a name="EnforceOnKeyNameInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyNameInput"></a>

```go
func EnforceOnKeyNameInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyTypeInput`<sup>Optional</sup> <a name="EnforceOnKeyTypeInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyTypeInput"></a>

```go
func EnforceOnKeyTypeInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyName"></a>

```go
func EnforceOnKeyName() *string
```

- *Type:* *string

---

##### `EnforceOnKeyType`<sup>Required</sup> <a name="EnforceOnKeyType" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.enforceOnKeyType"></a>

```go
func EnforceOnKeyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putBanThreshold">PutBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putEnforceOnKeyConfigs">PutEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putRateLimitThreshold">PutRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanDurationSec">ResetBanDurationSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanThreshold">ResetBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetConformAction">ResetConformAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKey">ResetEnforceOnKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs">ResetEnforceOnKeyConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyName">ResetEnforceOnKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetExceedAction">ResetExceedAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetRateLimitThreshold">ResetRateLimitThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBanThreshold` <a name="PutBanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putBanThreshold"></a>

```go
func PutBanThreshold(value ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putBanThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---

##### `PutEnforceOnKeyConfigs` <a name="PutEnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putEnforceOnKeyConfigs"></a>

```go
func PutEnforceOnKeyConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putEnforceOnKeyConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRateLimitThreshold` <a name="PutRateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putRateLimitThreshold"></a>

```go
func PutRateLimitThreshold(value ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.putRateLimitThreshold.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---

##### `ResetBanDurationSec` <a name="ResetBanDurationSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanDurationSec"></a>

```go
func ResetBanDurationSec()
```

##### `ResetBanThreshold` <a name="ResetBanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetBanThreshold"></a>

```go
func ResetBanThreshold()
```

##### `ResetConformAction` <a name="ResetConformAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetConformAction"></a>

```go
func ResetConformAction()
```

##### `ResetEnforceOnKey` <a name="ResetEnforceOnKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKey"></a>

```go
func ResetEnforceOnKey()
```

##### `ResetEnforceOnKeyConfigs` <a name="ResetEnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyConfigs"></a>

```go
func ResetEnforceOnKeyConfigs()
```

##### `ResetEnforceOnKeyName` <a name="ResetEnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetEnforceOnKeyName"></a>

```go
func ResetEnforceOnKeyName()
```

##### `ResetExceedAction` <a name="ResetExceedAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetExceedAction"></a>

```go
func ResetExceedAction()
```

##### `ResetRateLimitThreshold` <a name="ResetRateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.resetRateLimitThreshold"></a>

```go
func ResetRateLimitThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThreshold">BanThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigs">EnforceOnKeyConfigs</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList">ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThreshold">RateLimitThreshold</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSecInput">BanDurationSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThresholdInput">BanThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformActionInput">ConformActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput">EnforceOnKeyConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyInput">EnforceOnKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyNameInput">EnforceOnKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedActionInput">ExceedActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThresholdInput">RateLimitThresholdInput</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSec">BanDurationSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformAction">ConformAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKey">EnforceOnKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyName">EnforceOnKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedAction">ExceedAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BanThreshold`<sup>Required</sup> <a name="BanThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThreshold"></a>

```go
func BanThreshold() ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThresholdOutputReference</a>

---

##### `EnforceOnKeyConfigs`<sup>Required</sup> <a name="EnforceOnKeyConfigs" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigs"></a>

```go
func EnforceOnKeyConfigs() ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList">ComputeRegionSecurityPolicyRulesRateLimitOptionsEnforceOnKeyConfigsList</a>

---

##### `RateLimitThreshold`<sup>Required</sup> <a name="RateLimitThreshold" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThreshold"></a>

```go
func RateLimitThreshold() ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference</a>

---

##### `BanDurationSecInput`<sup>Optional</sup> <a name="BanDurationSecInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSecInput"></a>

```go
func BanDurationSecInput() *f64
```

- *Type:* *f64

---

##### `BanThresholdInput`<sup>Optional</sup> <a name="BanThresholdInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banThresholdInput"></a>

```go
func BanThresholdInput() ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsBanThreshold</a>

---

##### `ConformActionInput`<sup>Optional</sup> <a name="ConformActionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformActionInput"></a>

```go
func ConformActionInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyConfigsInput`<sup>Optional</sup> <a name="EnforceOnKeyConfigsInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyConfigsInput"></a>

```go
func EnforceOnKeyConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `EnforceOnKeyInput`<sup>Optional</sup> <a name="EnforceOnKeyInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyInput"></a>

```go
func EnforceOnKeyInput() *string
```

- *Type:* *string

---

##### `EnforceOnKeyNameInput`<sup>Optional</sup> <a name="EnforceOnKeyNameInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyNameInput"></a>

```go
func EnforceOnKeyNameInput() *string
```

- *Type:* *string

---

##### `ExceedActionInput`<sup>Optional</sup> <a name="ExceedActionInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedActionInput"></a>

```go
func ExceedActionInput() *string
```

- *Type:* *string

---

##### `RateLimitThresholdInput`<sup>Optional</sup> <a name="RateLimitThresholdInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.rateLimitThresholdInput"></a>

```go
func RateLimitThresholdInput() ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---

##### `BanDurationSec`<sup>Required</sup> <a name="BanDurationSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.banDurationSec"></a>

```go
func BanDurationSec() *f64
```

- *Type:* *f64

---

##### `ConformAction`<sup>Required</sup> <a name="ConformAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.conformAction"></a>

```go
func ConformAction() *string
```

- *Type:* *string

---

##### `EnforceOnKey`<sup>Required</sup> <a name="EnforceOnKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKey"></a>

```go
func EnforceOnKey() *string
```

- *Type:* *string

---

##### `EnforceOnKeyName`<sup>Required</sup> <a name="EnforceOnKeyName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.enforceOnKeyName"></a>

```go
func EnforceOnKeyName() *string
```

- *Type:* *string

---

##### `ExceedAction`<sup>Required</sup> <a name="ExceedAction" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.exceedAction"></a>

```go
func ExceedAction() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionSecurityPolicyRulesRateLimitOptions
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptions">ComputeRegionSecurityPolicyRulesRateLimitOptions</a>

---


### ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference <a name="ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetIntervalSec">ResetIntervalSec</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetCount"></a>

```go
func ResetCount()
```

##### `ResetIntervalSec` <a name="ResetIntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.resetIntervalSec"></a>

```go
func ResetIntervalSec()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.countInput">CountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput">IntervalSecInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec">IntervalSec</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.countInput"></a>

```go
func CountInput() *f64
```

- *Type:* *f64

---

##### `IntervalSecInput`<sup>Optional</sup> <a name="IntervalSecInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSecInput"></a>

```go
func IntervalSecInput() *f64
```

- *Type:* *f64

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `IntervalSec`<sup>Required</sup> <a name="IntervalSec" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.intervalSec"></a>

```go
func IntervalSec() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold
```

- *Type:* <a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold">ComputeRegionSecurityPolicyRulesRateLimitOptionsRateLimitThreshold</a>

---


### ComputeRegionSecurityPolicyTimeoutsOutputReference <a name="ComputeRegionSecurityPolicyTimeoutsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeRegionSecurityPolicyTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyUserDefinedFieldsList <a name="ComputeRegionSecurityPolicyUserDefinedFieldsList" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyUserDefinedFieldsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeRegionSecurityPolicyUserDefinedFieldsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.get"></a>

```go
func Get(index *f64) ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference <a name="ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/computeregionsecuritypolicy"

computeregionsecuritypolicy.NewComputeRegionSecurityPolicyUserDefinedFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetMask">ResetMask</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetOffset">ResetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetSize">ResetSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMask` <a name="ResetMask" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetMask"></a>

```go
func ResetMask()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetOffset` <a name="ResetOffset" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetOffset"></a>

```go
func ResetOffset()
```

##### `ResetSize` <a name="ResetSize" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.resetSize"></a>

```go
func ResetSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.baseInput">BaseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.maskInput">MaskInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offsetInput">OffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base">Base</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask">Mask</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset">Offset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseInput`<sup>Optional</sup> <a name="BaseInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.baseInput"></a>

```go
func BaseInput() *string
```

- *Type:* *string

---

##### `MaskInput`<sup>Optional</sup> <a name="MaskInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.maskInput"></a>

```go
func MaskInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offsetInput"></a>

```go
func OffsetInput() *f64
```

- *Type:* *f64

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `Base`<sup>Required</sup> <a name="Base" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.base"></a>

```go
func Base() *string
```

- *Type:* *string

---

##### `Mask`<sup>Required</sup> <a name="Mask" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.mask"></a>

```go
func Mask() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.offset"></a>

```go
func Offset() *f64
```

- *Type:* *f64

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.computeRegionSecurityPolicy.ComputeRegionSecurityPolicyUserDefinedFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



