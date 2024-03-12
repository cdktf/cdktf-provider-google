# `clouddomainsRegistration` Submodule <a name="`clouddomainsRegistration` Submodule" id="@cdktf/provider-google.clouddomainsRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ClouddomainsRegistration <a name="ClouddomainsRegistration" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration google_clouddomains_registration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.NewClouddomainsRegistration(scope Construct, id *string, config ClouddomainsRegistrationConfig) ClouddomainsRegistration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig">ClouddomainsRegistrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig">ClouddomainsRegistrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putContactSettings">PutContactSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putDnsSettings">PutDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putManagementSettings">PutManagementSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putYearlyPrice">PutYearlyPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetContactNotices">ResetContactNotices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetDnsSettings">ResetDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetDomainNotices">ResetDomainNotices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetManagementSettings">ResetManagementSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContactSettings` <a name="PutContactSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putContactSettings"></a>

```go
func PutContactSettings(value ClouddomainsRegistrationContactSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putContactSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a>

---

##### `PutDnsSettings` <a name="PutDnsSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putDnsSettings"></a>

```go
func PutDnsSettings(value ClouddomainsRegistrationDnsSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putDnsSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a>

---

##### `PutManagementSettings` <a name="PutManagementSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putManagementSettings"></a>

```go
func PutManagementSettings(value ClouddomainsRegistrationManagementSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putManagementSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putTimeouts"></a>

```go
func PutTimeouts(value ClouddomainsRegistrationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a>

---

##### `PutYearlyPrice` <a name="PutYearlyPrice" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putYearlyPrice"></a>

```go
func PutYearlyPrice(value ClouddomainsRegistrationYearlyPrice)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.putYearlyPrice.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a>

---

##### `ResetContactNotices` <a name="ResetContactNotices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetContactNotices"></a>

```go
func ResetContactNotices()
```

##### `ResetDnsSettings` <a name="ResetDnsSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetDnsSettings"></a>

```go
func ResetDnsSettings()
```

##### `ResetDomainNotices` <a name="ResetDomainNotices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetDomainNotices"></a>

```go
func ResetDomainNotices()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetManagementSettings` <a name="ResetManagementSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetManagementSettings"></a>

```go
func ResetManagementSettings()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ClouddomainsRegistration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.ClouddomainsRegistration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.ClouddomainsRegistration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.ClouddomainsRegistration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.ClouddomainsRegistration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ClouddomainsRegistration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ClouddomainsRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ClouddomainsRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ClouddomainsRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactSettings">ContactSettings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference">ClouddomainsRegistrationContactSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dnsSettings">DnsSettings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference">ClouddomainsRegistrationDnsSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.issues">Issues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.managementSettings">ManagementSettings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference">ClouddomainsRegistrationManagementSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.registerFailureReason">RegisterFailureReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.supportedPrivacy">SupportedPrivacy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference">ClouddomainsRegistrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.yearlyPrice">YearlyPrice</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference">ClouddomainsRegistrationYearlyPriceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactNoticesInput">ContactNoticesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactSettingsInput">ContactSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dnsSettingsInput">DnsSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNoticesInput">DomainNoticesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.managementSettingsInput">ManagementSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.yearlyPriceInput">YearlyPriceInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactNotices">ContactNotices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNotices">DomainNotices</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContactSettings`<sup>Required</sup> <a name="ContactSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactSettings"></a>

```go
func ContactSettings() ClouddomainsRegistrationContactSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference">ClouddomainsRegistrationContactSettingsOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DnsSettings`<sup>Required</sup> <a name="DnsSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dnsSettings"></a>

```go
func DnsSettings() ClouddomainsRegistrationDnsSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference">ClouddomainsRegistrationDnsSettingsOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `Issues`<sup>Required</sup> <a name="Issues" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.issues"></a>

```go
func Issues() *[]*string
```

- *Type:* *[]*string

---

##### `ManagementSettings`<sup>Required</sup> <a name="ManagementSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.managementSettings"></a>

```go
func ManagementSettings() ClouddomainsRegistrationManagementSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference">ClouddomainsRegistrationManagementSettingsOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RegisterFailureReason`<sup>Required</sup> <a name="RegisterFailureReason" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.registerFailureReason"></a>

```go
func RegisterFailureReason() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SupportedPrivacy`<sup>Required</sup> <a name="SupportedPrivacy" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.supportedPrivacy"></a>

```go
func SupportedPrivacy() *[]*string
```

- *Type:* *[]*string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.timeouts"></a>

```go
func Timeouts() ClouddomainsRegistrationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference">ClouddomainsRegistrationTimeoutsOutputReference</a>

---

##### `YearlyPrice`<sup>Required</sup> <a name="YearlyPrice" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.yearlyPrice"></a>

```go
func YearlyPrice() ClouddomainsRegistrationYearlyPriceOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference">ClouddomainsRegistrationYearlyPriceOutputReference</a>

---

##### `ContactNoticesInput`<sup>Optional</sup> <a name="ContactNoticesInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactNoticesInput"></a>

```go
func ContactNoticesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContactSettingsInput`<sup>Optional</sup> <a name="ContactSettingsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactSettingsInput"></a>

```go
func ContactSettingsInput() ClouddomainsRegistrationContactSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a>

---

##### `DnsSettingsInput`<sup>Optional</sup> <a name="DnsSettingsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.dnsSettingsInput"></a>

```go
func DnsSettingsInput() ClouddomainsRegistrationDnsSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a>

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `DomainNoticesInput`<sup>Optional</sup> <a name="DomainNoticesInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNoticesInput"></a>

```go
func DomainNoticesInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ManagementSettingsInput`<sup>Optional</sup> <a name="ManagementSettingsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.managementSettingsInput"></a>

```go
func ManagementSettingsInput() ClouddomainsRegistrationManagementSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `YearlyPriceInput`<sup>Optional</sup> <a name="YearlyPriceInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.yearlyPriceInput"></a>

```go
func YearlyPriceInput() ClouddomainsRegistrationYearlyPrice
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a>

---

##### `ContactNotices`<sup>Required</sup> <a name="ContactNotices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.contactNotices"></a>

```go
func ContactNotices() *[]*string
```

- *Type:* *[]*string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `DomainNotices`<sup>Required</sup> <a name="DomainNotices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.domainNotices"></a>

```go
func DomainNotices() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ClouddomainsRegistrationConfig <a name="ClouddomainsRegistrationConfig" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

&clouddomainsregistration.ClouddomainsRegistrationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ContactSettings: github.com/cdktf/cdktf-provider-google-go/google/v13.clouddomainsRegistration.ClouddomainsRegistrationContactSettings,
	DomainName: *string,
	Location: *string,
	YearlyPrice: github.com/cdktf/cdktf-provider-google-go/google/v13.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice,
	ContactNotices: *[]*string,
	DnsSettings: github.com/cdktf/cdktf-provider-google-go/google/v13.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings,
	DomainNotices: *[]*string,
	Id: *string,
	Labels: *map[string]*string,
	ManagementSettings: github.com/cdktf/cdktf-provider-google-go/google/v13.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v13.clouddomainsRegistration.ClouddomainsRegistrationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.contactSettings">ContactSettings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a></code> | contact_settings block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Required. The domain name. Unicode domain names must be expressed in Punycode format. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.location">Location</a></code> | <code>*string</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.yearlyPrice">YearlyPrice</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a></code> | yearly_price block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.contactNotices">ContactNotices</a></code> | <code>*[]*string</code> | The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.dnsSettings">DnsSettings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a></code> | dns_settings block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.domainNotices">DomainNotices</a></code> | <code>*[]*string</code> | The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#id ClouddomainsRegistration#id}. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of labels associated with the Registration. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.managementSettings">ManagementSettings</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a></code> | management_settings block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#project ClouddomainsRegistration#project}. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContactSettings`<sup>Required</sup> <a name="ContactSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.contactSettings"></a>

```go
ContactSettings ClouddomainsRegistrationContactSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a>

contact_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#contact_settings ClouddomainsRegistration#contact_settings}

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Required. The domain name. Unicode domain names must be expressed in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#domain_name ClouddomainsRegistration#domain_name}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#location ClouddomainsRegistration#location}

---

##### `YearlyPrice`<sup>Required</sup> <a name="YearlyPrice" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.yearlyPrice"></a>

```go
YearlyPrice ClouddomainsRegistrationYearlyPrice
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a>

yearly_price block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#yearly_price ClouddomainsRegistration#yearly_price}

---

##### `ContactNotices`<sup>Optional</sup> <a name="ContactNotices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.contactNotices"></a>

```go
ContactNotices *[]*string
```

- *Type:* *[]*string

The list of contact notices that the caller acknowledges. Possible value is PUBLIC_CONTACT_DATA_ACKNOWLEDGEMENT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#contact_notices ClouddomainsRegistration#contact_notices}

---

##### `DnsSettings`<sup>Optional</sup> <a name="DnsSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.dnsSettings"></a>

```go
DnsSettings ClouddomainsRegistrationDnsSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a>

dns_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#dns_settings ClouddomainsRegistration#dns_settings}

---

##### `DomainNotices`<sup>Optional</sup> <a name="DomainNotices" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.domainNotices"></a>

```go
DomainNotices *[]*string
```

- *Type:* *[]*string

The list of domain notices that you acknowledge. Possible value is HSTS_PRELOADED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#domain_notices ClouddomainsRegistration#domain_notices}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#id ClouddomainsRegistration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of labels associated with the Registration.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#labels ClouddomainsRegistration#labels}

---

##### `ManagementSettings`<sup>Optional</sup> <a name="ManagementSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.managementSettings"></a>

```go
ManagementSettings ClouddomainsRegistrationManagementSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a>

management_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#management_settings ClouddomainsRegistration#management_settings}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#project ClouddomainsRegistration#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationConfig.property.timeouts"></a>

```go
Timeouts ClouddomainsRegistrationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts">ClouddomainsRegistrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#timeouts ClouddomainsRegistration#timeouts}

---

### ClouddomainsRegistrationContactSettings <a name="ClouddomainsRegistrationContactSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

&clouddomainsregistration.ClouddomainsRegistrationContactSettings {
	AdminContact: github.com/cdktf/cdktf-provider-google-go/google/v13.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact,
	Privacy: *string,
	RegistrantContact: github.com/cdktf/cdktf-provider-google-go/google/v13.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact,
	TechnicalContact: github.com/cdktf/cdktf-provider-google-go/google/v13.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.adminContact">AdminContact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a></code> | admin_contact block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.privacy">Privacy</a></code> | <code>*string</code> | Required. Privacy setting for the contacts associated with the Registration. Values are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.registrantContact">RegistrantContact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | registrant_contact block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.technicalContact">TechnicalContact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | technical_contact block. |

---

##### `AdminContact`<sup>Required</sup> <a name="AdminContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.adminContact"></a>

```go
AdminContact ClouddomainsRegistrationContactSettingsAdminContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a>

admin_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#admin_contact ClouddomainsRegistration#admin_contact}

---

##### `Privacy`<sup>Required</sup> <a name="Privacy" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.privacy"></a>

```go
Privacy *string
```

- *Type:* *string

Required. Privacy setting for the contacts associated with the Registration. Values are PUBLIC_CONTACT_DATA, PRIVATE_CONTACT_DATA, and REDACTED_CONTACT_DATA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#privacy ClouddomainsRegistration#privacy}

---

##### `RegistrantContact`<sup>Required</sup> <a name="RegistrantContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.registrantContact"></a>

```go
RegistrantContact ClouddomainsRegistrationContactSettingsRegistrantContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a>

registrant_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#registrant_contact ClouddomainsRegistration#registrant_contact}

---

##### `TechnicalContact`<sup>Required</sup> <a name="TechnicalContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings.property.technicalContact"></a>

```go
TechnicalContact ClouddomainsRegistrationContactSettingsTechnicalContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a>

technical_contact block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#technical_contact ClouddomainsRegistration#technical_contact}

---

### ClouddomainsRegistrationContactSettingsAdminContact <a name="ClouddomainsRegistrationContactSettingsAdminContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

&clouddomainsregistration.ClouddomainsRegistrationContactSettingsAdminContact {
	Email: *string,
	PhoneNumber: *string,
	PostalAddress: github.com/cdktf/cdktf-provider-google-go/google/v13.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress,
	FaxNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.email">Email</a></code> | <code>*string</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.faxNumber">FaxNumber</a></code> | <code>*string</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.email"></a>

```go
Email *string
```

- *Type:* *string

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#email ClouddomainsRegistration#email}

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#phone_number ClouddomainsRegistration#phone_number}

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.postalAddress"></a>

```go
PostalAddress ClouddomainsRegistrationContactSettingsAdminContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#postal_address ClouddomainsRegistration#postal_address}

---

##### `FaxNumber`<sup>Optional</sup> <a name="FaxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact.property.faxNumber"></a>

```go
FaxNumber *string
```

- *Type:* *string

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#fax_number ClouddomainsRegistration#fax_number}

---

### ClouddomainsRegistrationContactSettingsAdminContactPostalAddress <a name="ClouddomainsRegistrationContactSettingsAdminContactPostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

&clouddomainsregistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress {
	RegionCode: *string,
	AddressLines: *[]*string,
	AdministrativeArea: *string,
	Locality: *string,
	Organization: *string,
	PostalCode: *string,
	Recipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.regionCode">RegionCode</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.addressLines">AddressLines</a></code> | <code>*[]*string</code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.administrativeArea">AdministrativeArea</a></code> | <code>*string</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.locality">Locality</a></code> | <code>*string</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.organization">Organization</a></code> | <code>*string</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.postalCode">PostalCode</a></code> | <code>*string</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.recipients">Recipients</a></code> | <code>*[]*string</code> | The recipient at the address. |

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.regionCode"></a>

```go
RegionCode *string
```

- *Type:* *string

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#region_code ClouddomainsRegistration#region_code}

---

##### `AddressLines`<sup>Optional</sup> <a name="AddressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.addressLines"></a>

```go
AddressLines *[]*string
```

- *Type:* *[]*string

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#address_lines ClouddomainsRegistration#address_lines}

---

##### `AdministrativeArea`<sup>Optional</sup> <a name="AdministrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.administrativeArea"></a>

```go
AdministrativeArea *string
```

- *Type:* *string

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#administrative_area ClouddomainsRegistration#administrative_area}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.locality"></a>

```go
Locality *string
```

- *Type:* *string

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#locality ClouddomainsRegistration#locality}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#organization ClouddomainsRegistration#organization}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#postal_code ClouddomainsRegistration#postal_code}

---

##### `Recipients`<sup>Optional</sup> <a name="Recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress.property.recipients"></a>

```go
Recipients *[]*string
```

- *Type:* *[]*string

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#recipients ClouddomainsRegistration#recipients}

---

### ClouddomainsRegistrationContactSettingsRegistrantContact <a name="ClouddomainsRegistrationContactSettingsRegistrantContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

&clouddomainsregistration.ClouddomainsRegistrationContactSettingsRegistrantContact {
	Email: *string,
	PhoneNumber: *string,
	PostalAddress: github.com/cdktf/cdktf-provider-google-go/google/v13.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress,
	FaxNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.email">Email</a></code> | <code>*string</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.faxNumber">FaxNumber</a></code> | <code>*string</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.email"></a>

```go
Email *string
```

- *Type:* *string

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#email ClouddomainsRegistration#email}

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#phone_number ClouddomainsRegistration#phone_number}

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.postalAddress"></a>

```go
PostalAddress ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#postal_address ClouddomainsRegistration#postal_address}

---

##### `FaxNumber`<sup>Optional</sup> <a name="FaxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact.property.faxNumber"></a>

```go
FaxNumber *string
```

- *Type:* *string

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#fax_number ClouddomainsRegistration#fax_number}

---

### ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress <a name="ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

&clouddomainsregistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress {
	RegionCode: *string,
	AddressLines: *[]*string,
	AdministrativeArea: *string,
	Locality: *string,
	Organization: *string,
	PostalCode: *string,
	Recipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.regionCode">RegionCode</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.addressLines">AddressLines</a></code> | <code>*[]*string</code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.administrativeArea">AdministrativeArea</a></code> | <code>*string</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.locality">Locality</a></code> | <code>*string</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.organization">Organization</a></code> | <code>*string</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.postalCode">PostalCode</a></code> | <code>*string</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.recipients">Recipients</a></code> | <code>*[]*string</code> | The recipient at the address. |

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.regionCode"></a>

```go
RegionCode *string
```

- *Type:* *string

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#region_code ClouddomainsRegistration#region_code}

---

##### `AddressLines`<sup>Optional</sup> <a name="AddressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.addressLines"></a>

```go
AddressLines *[]*string
```

- *Type:* *[]*string

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#address_lines ClouddomainsRegistration#address_lines}

---

##### `AdministrativeArea`<sup>Optional</sup> <a name="AdministrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.administrativeArea"></a>

```go
AdministrativeArea *string
```

- *Type:* *string

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#administrative_area ClouddomainsRegistration#administrative_area}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.locality"></a>

```go
Locality *string
```

- *Type:* *string

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#locality ClouddomainsRegistration#locality}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#organization ClouddomainsRegistration#organization}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#postal_code ClouddomainsRegistration#postal_code}

---

##### `Recipients`<sup>Optional</sup> <a name="Recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress.property.recipients"></a>

```go
Recipients *[]*string
```

- *Type:* *[]*string

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#recipients ClouddomainsRegistration#recipients}

---

### ClouddomainsRegistrationContactSettingsTechnicalContact <a name="ClouddomainsRegistrationContactSettingsTechnicalContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

&clouddomainsregistration.ClouddomainsRegistrationContactSettingsTechnicalContact {
	Email: *string,
	PhoneNumber: *string,
	PostalAddress: github.com/cdktf/cdktf-provider-google-go/google/v13.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress,
	FaxNumber: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.email">Email</a></code> | <code>*string</code> | Required. Email address of the contact. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | Required. Phone number of the contact in international format. For example, "+1-800-555-0123". |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | postal_address block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.faxNumber">FaxNumber</a></code> | <code>*string</code> | Fax number of the contact in international format. For example, "+1-800-555-0123". |

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.email"></a>

```go
Email *string
```

- *Type:* *string

Required. Email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#email ClouddomainsRegistration#email}

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

Required. Phone number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#phone_number ClouddomainsRegistration#phone_number}

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.postalAddress"></a>

```go
PostalAddress ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

postal_address block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#postal_address ClouddomainsRegistration#postal_address}

---

##### `FaxNumber`<sup>Optional</sup> <a name="FaxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact.property.faxNumber"></a>

```go
FaxNumber *string
```

- *Type:* *string

Fax number of the contact in international format. For example, "+1-800-555-0123".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#fax_number ClouddomainsRegistration#fax_number}

---

### ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress <a name="ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

&clouddomainsregistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress {
	RegionCode: *string,
	AddressLines: *[]*string,
	AdministrativeArea: *string,
	Locality: *string,
	Organization: *string,
	PostalCode: *string,
	Recipients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.regionCode">RegionCode</a></code> | <code>*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.addressLines">AddressLines</a></code> | <code>*[]*string</code> | Unstructured address lines describing the lower levels of an address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.administrativeArea">AdministrativeArea</a></code> | <code>*string</code> | Highest administrative subdivision which is used for postal addresses of a country or region. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.locality">Locality</a></code> | <code>*string</code> | Generally refers to the city/town portion of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.organization">Organization</a></code> | <code>*string</code> | The name of the organization at the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.postalCode">PostalCode</a></code> | <code>*string</code> | Postal code of the address. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.recipients">Recipients</a></code> | <code>*[]*string</code> | The recipient at the address. |

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.regionCode"></a>

```go
RegionCode *string
```

- *Type:* *string

Required.

CLDR region code of the country/region of the address. This is never inferred and it is up to the user to
ensure the value is correct. See https://cldr.unicode.org/ and
https://www.unicode.org/cldr/charts/30/supplemental/territory_information.html for details. Example: "CH" for Switzerland.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#region_code ClouddomainsRegistration#region_code}

---

##### `AddressLines`<sup>Optional</sup> <a name="AddressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.addressLines"></a>

```go
AddressLines *[]*string
```

- *Type:* *[]*string

Unstructured address lines describing the lower levels of an address.

Because values in addressLines do not have type information and may sometimes contain multiple values in a single
field (e.g. "Austin, TX"), it is important that the line order is clear. The order of address lines should be
"envelope order" for the country/region of the address. In places where this can vary (e.g. Japan), address_language
is used to make it explicit (e.g. "ja" for large-to-small ordering and "ja-Latn" or "en" for small-to-large). This way,
the most specific line of an address can be selected based on the language.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#address_lines ClouddomainsRegistration#address_lines}

---

##### `AdministrativeArea`<sup>Optional</sup> <a name="AdministrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.administrativeArea"></a>

```go
AdministrativeArea *string
```

- *Type:* *string

Highest administrative subdivision which is used for postal addresses of a country or region.

For example, this can be a state,
a province, an oblast, or a prefecture. Specifically, for Spain this is the province and not the autonomous community
(e.g. "Barcelona" and not "Catalonia"). Many countries don't use an administrative area in postal addresses. E.g. in Switzerland
this should be left unpopulated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#administrative_area ClouddomainsRegistration#administrative_area}

---

##### `Locality`<sup>Optional</sup> <a name="Locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.locality"></a>

```go
Locality *string
```

- *Type:* *string

Generally refers to the city/town portion of the address.

Examples: US city, IT comune, UK post town. In regions of the world
where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#locality ClouddomainsRegistration#locality}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The name of the organization at the address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#organization ClouddomainsRegistration#organization}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

Postal code of the address.

Not all countries use or require postal codes to be present, but where they are used,
they may trigger additional validation with other parts of the address (e.g. state/zip validation in the U.S.A.).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#postal_code ClouddomainsRegistration#postal_code}

---

##### `Recipients`<sup>Optional</sup> <a name="Recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress.property.recipients"></a>

```go
Recipients *[]*string
```

- *Type:* *[]*string

The recipient at the address.

This field may, under certain circumstances, contain multiline information. For example,
it might contain "care of" information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#recipients ClouddomainsRegistration#recipients}

---

### ClouddomainsRegistrationDnsSettings <a name="ClouddomainsRegistrationDnsSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

&clouddomainsregistration.ClouddomainsRegistrationDnsSettings {
	CustomDns: github.com/cdktf/cdktf-provider-google-go/google/v13.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns,
	GlueRecords: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings.property.customDns">CustomDns</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a></code> | custom_dns block. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings.property.glueRecords">GlueRecords</a></code> | <code>interface{}</code> | glue_records block. |

---

##### `CustomDns`<sup>Optional</sup> <a name="CustomDns" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings.property.customDns"></a>

```go
CustomDns ClouddomainsRegistrationDnsSettingsCustomDns
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a>

custom_dns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#custom_dns ClouddomainsRegistration#custom_dns}

---

##### `GlueRecords`<sup>Optional</sup> <a name="GlueRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings.property.glueRecords"></a>

```go
GlueRecords interface{}
```

- *Type:* interface{}

glue_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#glue_records ClouddomainsRegistration#glue_records}

---

### ClouddomainsRegistrationDnsSettingsCustomDns <a name="ClouddomainsRegistrationDnsSettingsCustomDns" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

&clouddomainsregistration.ClouddomainsRegistrationDnsSettingsCustomDns {
	NameServers: *[]*string,
	DsRecords: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns.property.nameServers">NameServers</a></code> | <code>*[]*string</code> | Required. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns.property.dsRecords">DsRecords</a></code> | <code>interface{}</code> | ds_records block. |

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns.property.nameServers"></a>

```go
NameServers *[]*string
```

- *Type:* *[]*string

Required.

A list of name servers that store the DNS zone for this domain. Each name server is a domain
name, with Unicode domain names expressed in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#name_servers ClouddomainsRegistration#name_servers}

---

##### `DsRecords`<sup>Optional</sup> <a name="DsRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns.property.dsRecords"></a>

```go
DsRecords interface{}
```

- *Type:* interface{}

ds_records block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#ds_records ClouddomainsRegistration#ds_records}

---

### ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords <a name="ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

&clouddomainsregistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords {
	Algorithm: *string,
	Digest: *string,
	DigestType: *string,
	KeyTag: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.algorithm">Algorithm</a></code> | <code>*string</code> | The algorithm used to generate the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digest">Digest</a></code> | <code>*string</code> | The digest generated from the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digestType">DigestType</a></code> | <code>*string</code> | The hash function used to generate the digest of the referenced DNSKEY. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.keyTag">KeyTag</a></code> | <code>*f64</code> | The key tag of the record. Must be set in range 0 -- 65535. |

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.algorithm"></a>

```go
Algorithm *string
```

- *Type:* *string

The algorithm used to generate the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#algorithm ClouddomainsRegistration#algorithm}

---

##### `Digest`<sup>Optional</sup> <a name="Digest" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digest"></a>

```go
Digest *string
```

- *Type:* *string

The digest generated from the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#digest ClouddomainsRegistration#digest}

---

##### `DigestType`<sup>Optional</sup> <a name="DigestType" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.digestType"></a>

```go
DigestType *string
```

- *Type:* *string

The hash function used to generate the digest of the referenced DNSKEY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#digest_type ClouddomainsRegistration#digest_type}

---

##### `KeyTag`<sup>Optional</sup> <a name="KeyTag" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecords.property.keyTag"></a>

```go
KeyTag *f64
```

- *Type:* *f64

The key tag of the record. Must be set in range 0 -- 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#key_tag ClouddomainsRegistration#key_tag}

---

### ClouddomainsRegistrationDnsSettingsGlueRecords <a name="ClouddomainsRegistrationDnsSettingsGlueRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

&clouddomainsregistration.ClouddomainsRegistrationDnsSettingsGlueRecords {
	HostName: *string,
	Ipv4Addresses: *[]*string,
	Ipv6Addresses: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.hostName">HostName</a></code> | <code>*string</code> | Required. Domain name of the host in Punycode format. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>*[]*string</code> | List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>*[]*string</code> | List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set. |

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.hostName"></a>

```go
HostName *string
```

- *Type:* *string

Required. Domain name of the host in Punycode format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#host_name ClouddomainsRegistration#host_name}

---

##### `Ipv4Addresses`<sup>Optional</sup> <a name="Ipv4Addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv4Addresses"></a>

```go
Ipv4Addresses *[]*string
```

- *Type:* *[]*string

List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#ipv4_addresses ClouddomainsRegistration#ipv4_addresses}

---

##### `Ipv6Addresses`<sup>Optional</sup> <a name="Ipv6Addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecords.property.ipv6Addresses"></a>

```go
Ipv6Addresses *[]*string
```

- *Type:* *[]*string

List of IPv4 addresses corresponding to this host in the standard decimal format (e.g. 198.51.100.1). At least one of ipv4_address and ipv6_address must be set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#ipv6_addresses ClouddomainsRegistration#ipv6_addresses}

---

### ClouddomainsRegistrationManagementSettings <a name="ClouddomainsRegistrationManagementSettings" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

&clouddomainsregistration.ClouddomainsRegistrationManagementSettings {
	PreferredRenewalMethod: *string,
	TransferLockState: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings.property.preferredRenewalMethod">PreferredRenewalMethod</a></code> | <code>*string</code> | The desired renewal method for this Registration. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings.property.transferLockState">TransferLockState</a></code> | <code>*string</code> | Controls whether the domain can be transferred to another registrar. Values are UNLOCKED or LOCKED. |

---

##### `PreferredRenewalMethod`<sup>Optional</sup> <a name="PreferredRenewalMethod" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings.property.preferredRenewalMethod"></a>

```go
PreferredRenewalMethod *string
```

- *Type:* *string

The desired renewal method for this Registration.

The actual renewalMethod is automatically updated to reflect this choice.
If unset or equal to RENEWAL_METHOD_UNSPECIFIED, the actual renewalMethod is treated as if it were set to AUTOMATIC_RENEWAL.
You cannot use RENEWAL_DISABLED during resource creation, and you can update the renewal status only when the Registration
resource has state ACTIVE or SUSPENDED.

When preferredRenewalMethod is set to AUTOMATIC_RENEWAL, the actual renewalMethod can be set to RENEWAL_DISABLED in case of
problems with the billing account or reported domain abuse. In such cases, check the issues field on the Registration. After
the problem is resolved, the renewalMethod is automatically updated to preferredRenewalMethod in a few hours.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#preferred_renewal_method ClouddomainsRegistration#preferred_renewal_method}

---

##### `TransferLockState`<sup>Optional</sup> <a name="TransferLockState" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings.property.transferLockState"></a>

```go
TransferLockState *string
```

- *Type:* *string

Controls whether the domain can be transferred to another registrar. Values are UNLOCKED or LOCKED.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#transfer_lock_state ClouddomainsRegistration#transfer_lock_state}

---

### ClouddomainsRegistrationTimeouts <a name="ClouddomainsRegistrationTimeouts" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

&clouddomainsregistration.ClouddomainsRegistrationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#create ClouddomainsRegistration#create}. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#delete ClouddomainsRegistration#delete}. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#update ClouddomainsRegistration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#create ClouddomainsRegistration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#delete ClouddomainsRegistration#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#update ClouddomainsRegistration#update}.

---

### ClouddomainsRegistrationYearlyPrice <a name="ClouddomainsRegistrationYearlyPrice" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

&clouddomainsregistration.ClouddomainsRegistrationYearlyPrice {
	CurrencyCode: *string,
	Units: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | The three-letter currency code defined in ISO 4217. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice.property.units">Units</a></code> | <code>*string</code> | The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar. |

---

##### `CurrencyCode`<sup>Optional</sup> <a name="CurrencyCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice.property.currencyCode"></a>

```go
CurrencyCode *string
```

- *Type:* *string

The three-letter currency code defined in ISO 4217.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#currency_code ClouddomainsRegistration#currency_code}

---

##### `Units`<sup>Optional</sup> <a name="Units" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice.property.units"></a>

```go
Units *string
```

- *Type:* *string

The whole units of the amount. For example if currencyCode is "USD", then 1 unit is one US dollar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.20.0/docs/resources/clouddomains_registration#units ClouddomainsRegistration#units}

---

## Classes <a name="Classes" id="Classes"></a>

### ClouddomainsRegistrationContactSettingsAdminContactOutputReference <a name="ClouddomainsRegistrationContactSettingsAdminContactOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.NewClouddomainsRegistrationContactSettingsAdminContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddomainsRegistrationContactSettingsAdminContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress">PutPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.resetFaxNumber">ResetFaxNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostalAddress` <a name="PutPostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress"></a>

```go
func PutPostalAddress(value ClouddomainsRegistrationContactSettingsAdminContactPostalAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.putPostalAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

---

##### `ResetFaxNumber` <a name="ResetFaxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.resetFaxNumber"></a>

```go
func ResetFaxNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumberInput">FaxNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddressInput">PostalAddressInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumber">FaxNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddress"></a>

```go
func PostalAddress() ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `FaxNumberInput`<sup>Optional</sup> <a name="FaxNumberInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumberInput"></a>

```go
func FaxNumberInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `PostalAddressInput`<sup>Optional</sup> <a name="PostalAddressInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.postalAddressInput"></a>

```go
func PostalAddressInput() ClouddomainsRegistrationContactSettingsAdminContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FaxNumber`<sup>Required</sup> <a name="FaxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.faxNumber"></a>

```go
func FaxNumber() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddomainsRegistrationContactSettingsAdminContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a>

---


### ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference <a name="ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.NewClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAddressLines">ResetAddressLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAdministrativeArea">ResetAdministrativeArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetRecipients">ResetRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLines` <a name="ResetAddressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAddressLines"></a>

```go
func ResetAddressLines()
```

##### `ResetAdministrativeArea` <a name="ResetAdministrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```go
func ResetAdministrativeArea()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetLocality"></a>

```go
func ResetLocality()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetRecipients` <a name="ResetRecipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.resetRecipients"></a>

```go
func ResetRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLinesInput">AddressLinesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeAreaInput">AdministrativeAreaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.localityInput">LocalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipientsInput">RecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCodeInput">RegionCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLines">AddressLines</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeArea">AdministrativeArea</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.locality">Locality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipients">Recipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCode">RegionCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressLinesInput`<sup>Optional</sup> <a name="AddressLinesInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLinesInput"></a>

```go
func AddressLinesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdministrativeAreaInput`<sup>Optional</sup> <a name="AdministrativeAreaInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```go
func AdministrativeAreaInput() *string
```

- *Type:* *string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.localityInput"></a>

```go
func LocalityInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipientsInput"></a>

```go
func RecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionCodeInput`<sup>Optional</sup> <a name="RegionCodeInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCodeInput"></a>

```go
func RegionCodeInput() *string
```

- *Type:* *string

---

##### `AddressLines`<sup>Required</sup> <a name="AddressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.addressLines"></a>

```go
func AddressLines() *[]*string
```

- *Type:* *[]*string

---

##### `AdministrativeArea`<sup>Required</sup> <a name="AdministrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.administrativeArea"></a>

```go
func AdministrativeArea() *string
```

- *Type:* *string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.locality"></a>

```go
func Locality() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.recipients"></a>

```go
func Recipients() *[]*string
```

- *Type:* *[]*string

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.regionCode"></a>

```go
func RegionCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddomainsRegistrationContactSettingsAdminContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactPostalAddress">ClouddomainsRegistrationContactSettingsAdminContactPostalAddress</a>

---


### ClouddomainsRegistrationContactSettingsOutputReference <a name="ClouddomainsRegistrationContactSettingsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.NewClouddomainsRegistrationContactSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddomainsRegistrationContactSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putAdminContact">PutAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact">PutRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact">PutTechnicalContact</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdminContact` <a name="PutAdminContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putAdminContact"></a>

```go
func PutAdminContact(value ClouddomainsRegistrationContactSettingsAdminContact)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putAdminContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a>

---

##### `PutRegistrantContact` <a name="PutRegistrantContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact"></a>

```go
func PutRegistrantContact(value ClouddomainsRegistrationContactSettingsRegistrantContact)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putRegistrantContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a>

---

##### `PutTechnicalContact` <a name="PutTechnicalContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact"></a>

```go
func PutTechnicalContact(value ClouddomainsRegistrationContactSettingsTechnicalContact)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.putTechnicalContact.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.adminContact">AdminContact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference">ClouddomainsRegistrationContactSettingsAdminContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.registrantContact">RegistrantContact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference">ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.technicalContact">TechnicalContact</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference">ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.adminContactInput">AdminContactInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.privacyInput">PrivacyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.registrantContactInput">RegistrantContactInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.technicalContactInput">TechnicalContactInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.privacy">Privacy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminContact`<sup>Required</sup> <a name="AdminContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.adminContact"></a>

```go
func AdminContact() ClouddomainsRegistrationContactSettingsAdminContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContactOutputReference">ClouddomainsRegistrationContactSettingsAdminContactOutputReference</a>

---

##### `RegistrantContact`<sup>Required</sup> <a name="RegistrantContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.registrantContact"></a>

```go
func RegistrantContact() ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference">ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference</a>

---

##### `TechnicalContact`<sup>Required</sup> <a name="TechnicalContact" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.technicalContact"></a>

```go
func TechnicalContact() ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference">ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference</a>

---

##### `AdminContactInput`<sup>Optional</sup> <a name="AdminContactInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.adminContactInput"></a>

```go
func AdminContactInput() ClouddomainsRegistrationContactSettingsAdminContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsAdminContact">ClouddomainsRegistrationContactSettingsAdminContact</a>

---

##### `PrivacyInput`<sup>Optional</sup> <a name="PrivacyInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.privacyInput"></a>

```go
func PrivacyInput() *string
```

- *Type:* *string

---

##### `RegistrantContactInput`<sup>Optional</sup> <a name="RegistrantContactInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.registrantContactInput"></a>

```go
func RegistrantContactInput() ClouddomainsRegistrationContactSettingsRegistrantContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a>

---

##### `TechnicalContactInput`<sup>Optional</sup> <a name="TechnicalContactInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.technicalContactInput"></a>

```go
func TechnicalContactInput() ClouddomainsRegistrationContactSettingsTechnicalContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a>

---

##### `Privacy`<sup>Required</sup> <a name="Privacy" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.privacy"></a>

```go
func Privacy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddomainsRegistrationContactSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettings">ClouddomainsRegistrationContactSettings</a>

---


### ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference <a name="ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.NewClouddomainsRegistrationContactSettingsRegistrantContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress">PutPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resetFaxNumber">ResetFaxNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostalAddress` <a name="PutPostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress"></a>

```go
func PutPostalAddress(value ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.putPostalAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

---

##### `ResetFaxNumber` <a name="ResetFaxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.resetFaxNumber"></a>

```go
func ResetFaxNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumberInput">FaxNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddressInput">PostalAddressInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumber">FaxNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddress"></a>

```go
func PostalAddress() ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `FaxNumberInput`<sup>Optional</sup> <a name="FaxNumberInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumberInput"></a>

```go
func FaxNumberInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `PostalAddressInput`<sup>Optional</sup> <a name="PostalAddressInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.postalAddressInput"></a>

```go
func PostalAddressInput() ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FaxNumber`<sup>Required</sup> <a name="FaxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.faxNumber"></a>

```go
func FaxNumber() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddomainsRegistrationContactSettingsRegistrantContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContact">ClouddomainsRegistrationContactSettingsRegistrantContact</a>

---


### ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference <a name="ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.NewClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAddressLines">ResetAddressLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAdministrativeArea">ResetAdministrativeArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetRecipients">ResetRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLines` <a name="ResetAddressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAddressLines"></a>

```go
func ResetAddressLines()
```

##### `ResetAdministrativeArea` <a name="ResetAdministrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```go
func ResetAdministrativeArea()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetLocality"></a>

```go
func ResetLocality()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetRecipients` <a name="ResetRecipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.resetRecipients"></a>

```go
func ResetRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLinesInput">AddressLinesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeAreaInput">AdministrativeAreaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.localityInput">LocalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipientsInput">RecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCodeInput">RegionCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLines">AddressLines</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeArea">AdministrativeArea</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.locality">Locality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipients">Recipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCode">RegionCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressLinesInput`<sup>Optional</sup> <a name="AddressLinesInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLinesInput"></a>

```go
func AddressLinesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdministrativeAreaInput`<sup>Optional</sup> <a name="AdministrativeAreaInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```go
func AdministrativeAreaInput() *string
```

- *Type:* *string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.localityInput"></a>

```go
func LocalityInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipientsInput"></a>

```go
func RecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionCodeInput`<sup>Optional</sup> <a name="RegionCodeInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCodeInput"></a>

```go
func RegionCodeInput() *string
```

- *Type:* *string

---

##### `AddressLines`<sup>Required</sup> <a name="AddressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.addressLines"></a>

```go
func AddressLines() *[]*string
```

- *Type:* *[]*string

---

##### `AdministrativeArea`<sup>Required</sup> <a name="AdministrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.administrativeArea"></a>

```go
func AdministrativeArea() *string
```

- *Type:* *string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.locality"></a>

```go
func Locality() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.recipients"></a>

```go
func Recipients() *[]*string
```

- *Type:* *[]*string

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.regionCode"></a>

```go
func RegionCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress">ClouddomainsRegistrationContactSettingsRegistrantContactPostalAddress</a>

---


### ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference <a name="ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.NewClouddomainsRegistrationContactSettingsTechnicalContactOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress">PutPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resetFaxNumber">ResetFaxNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostalAddress` <a name="PutPostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress"></a>

```go
func PutPostalAddress(value ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.putPostalAddress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

---

##### `ResetFaxNumber` <a name="ResetFaxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.resetFaxNumber"></a>

```go
func ResetFaxNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddress">PostalAddress</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumberInput">FaxNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddressInput">PostalAddressInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumber">FaxNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PostalAddress`<sup>Required</sup> <a name="PostalAddress" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddress"></a>

```go
func PostalAddress() ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `FaxNumberInput`<sup>Optional</sup> <a name="FaxNumberInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumberInput"></a>

```go
func FaxNumberInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `PostalAddressInput`<sup>Optional</sup> <a name="PostalAddressInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.postalAddressInput"></a>

```go
func PostalAddressInput() ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `FaxNumber`<sup>Required</sup> <a name="FaxNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.faxNumber"></a>

```go
func FaxNumber() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddomainsRegistrationContactSettingsTechnicalContact
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContact">ClouddomainsRegistrationContactSettingsTechnicalContact</a>

---


### ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference <a name="ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.NewClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAddressLines">ResetAddressLines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAdministrativeArea">ResetAdministrativeArea</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetLocality">ResetLocality</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetRecipients">ResetRecipients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddressLines` <a name="ResetAddressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAddressLines"></a>

```go
func ResetAddressLines()
```

##### `ResetAdministrativeArea` <a name="ResetAdministrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetAdministrativeArea"></a>

```go
func ResetAdministrativeArea()
```

##### `ResetLocality` <a name="ResetLocality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetLocality"></a>

```go
func ResetLocality()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetRecipients` <a name="ResetRecipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.resetRecipients"></a>

```go
func ResetRecipients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLinesInput">AddressLinesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeAreaInput">AdministrativeAreaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.localityInput">LocalityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipientsInput">RecipientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCodeInput">RegionCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLines">AddressLines</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeArea">AdministrativeArea</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.locality">Locality</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipients">Recipients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCode">RegionCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressLinesInput`<sup>Optional</sup> <a name="AddressLinesInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLinesInput"></a>

```go
func AddressLinesInput() *[]*string
```

- *Type:* *[]*string

---

##### `AdministrativeAreaInput`<sup>Optional</sup> <a name="AdministrativeAreaInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeAreaInput"></a>

```go
func AdministrativeAreaInput() *string
```

- *Type:* *string

---

##### `LocalityInput`<sup>Optional</sup> <a name="LocalityInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.localityInput"></a>

```go
func LocalityInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipientsInput"></a>

```go
func RecipientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionCodeInput`<sup>Optional</sup> <a name="RegionCodeInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCodeInput"></a>

```go
func RegionCodeInput() *string
```

- *Type:* *string

---

##### `AddressLines`<sup>Required</sup> <a name="AddressLines" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.addressLines"></a>

```go
func AddressLines() *[]*string
```

- *Type:* *[]*string

---

##### `AdministrativeArea`<sup>Required</sup> <a name="AdministrativeArea" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.administrativeArea"></a>

```go
func AdministrativeArea() *string
```

- *Type:* *string

---

##### `Locality`<sup>Required</sup> <a name="Locality" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.locality"></a>

```go
func Locality() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.recipients"></a>

```go
func Recipients() *[]*string
```

- *Type:* *[]*string

---

##### `RegionCode`<sup>Required</sup> <a name="RegionCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.regionCode"></a>

```go
func RegionCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddressOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress">ClouddomainsRegistrationContactSettingsTechnicalContactPostalAddress</a>

---


### ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList <a name="ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.NewClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get"></a>

```go
func Get(index *f64) ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference <a name="ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.NewClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigest">ResetDigest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigestType">ResetDigestType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetKeyTag">ResetKeyTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetAlgorithm"></a>

```go
func ResetAlgorithm()
```

##### `ResetDigest` <a name="ResetDigest" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigest"></a>

```go
func ResetDigest()
```

##### `ResetDigestType` <a name="ResetDigestType" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetDigestType"></a>

```go
func ResetDigestType()
```

##### `ResetKeyTag` <a name="ResetKeyTag" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.resetKeyTag"></a>

```go
func ResetKeyTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestInput">DigestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestTypeInput">DigestTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTagInput">KeyTagInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digest">Digest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestType">DigestType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTag">KeyTag</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithmInput"></a>

```go
func AlgorithmInput() *string
```

- *Type:* *string

---

##### `DigestInput`<sup>Optional</sup> <a name="DigestInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestInput"></a>

```go
func DigestInput() *string
```

- *Type:* *string

---

##### `DigestTypeInput`<sup>Optional</sup> <a name="DigestTypeInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestTypeInput"></a>

```go
func DigestTypeInput() *string
```

- *Type:* *string

---

##### `KeyTagInput`<sup>Optional</sup> <a name="KeyTagInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTagInput"></a>

```go
func KeyTagInput() *f64
```

- *Type:* *f64

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digest"></a>

```go
func Digest() *string
```

- *Type:* *string

---

##### `DigestType`<sup>Required</sup> <a name="DigestType" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.digestType"></a>

```go
func DigestType() *string
```

- *Type:* *string

---

##### `KeyTag`<sup>Required</sup> <a name="KeyTag" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.keyTag"></a>

```go
func KeyTag() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference <a name="ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.NewClouddomainsRegistrationDnsSettingsCustomDnsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords">PutDsRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resetDsRecords">ResetDsRecords</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDsRecords` <a name="PutDsRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords"></a>

```go
func PutDsRecords(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.putDsRecords.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDsRecords` <a name="ResetDsRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.resetDsRecords"></a>

```go
func ResetDsRecords()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecords">DsRecords</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecordsInput">DsRecordsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServersInput">NameServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServers">NameServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DsRecords`<sup>Required</sup> <a name="DsRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecords"></a>

```go
func DsRecords() ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList">ClouddomainsRegistrationDnsSettingsCustomDnsDsRecordsList</a>

---

##### `DsRecordsInput`<sup>Optional</sup> <a name="DsRecordsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.dsRecordsInput"></a>

```go
func DsRecordsInput() interface{}
```

- *Type:* interface{}

---

##### `NameServersInput`<sup>Optional</sup> <a name="NameServersInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServersInput"></a>

```go
func NameServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.nameServers"></a>

```go
func NameServers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddomainsRegistrationDnsSettingsCustomDns
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a>

---


### ClouddomainsRegistrationDnsSettingsGlueRecordsList <a name="ClouddomainsRegistrationDnsSettingsGlueRecordsList" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.NewClouddomainsRegistrationDnsSettingsGlueRecordsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ClouddomainsRegistrationDnsSettingsGlueRecordsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.get"></a>

```go
func Get(index *f64) ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference <a name="ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.NewClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv4Addresses">ResetIpv4Addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv6Addresses">ResetIpv6Addresses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv4Addresses` <a name="ResetIpv4Addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv4Addresses"></a>

```go
func ResetIpv4Addresses()
```

##### `ResetIpv6Addresses` <a name="ResetIpv6Addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.resetIpv6Addresses"></a>

```go
func ResetIpv6Addresses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostNameInput">HostNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4AddressesInput">Ipv4AddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6AddressesInput">Ipv6AddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostName">HostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4Addresses">Ipv4Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6Addresses">Ipv6Addresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostNameInput`<sup>Optional</sup> <a name="HostNameInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostNameInput"></a>

```go
func HostNameInput() *string
```

- *Type:* *string

---

##### `Ipv4AddressesInput`<sup>Optional</sup> <a name="Ipv4AddressesInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4AddressesInput"></a>

```go
func Ipv4AddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6AddressesInput`<sup>Optional</sup> <a name="Ipv6AddressesInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6AddressesInput"></a>

```go
func Ipv6AddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `HostName`<sup>Required</sup> <a name="HostName" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.hostName"></a>

```go
func HostName() *string
```

- *Type:* *string

---

##### `Ipv4Addresses`<sup>Required</sup> <a name="Ipv4Addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv4Addresses"></a>

```go
func Ipv4Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `Ipv6Addresses`<sup>Required</sup> <a name="Ipv6Addresses" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.ipv6Addresses"></a>

```go
func Ipv6Addresses() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddomainsRegistrationDnsSettingsOutputReference <a name="ClouddomainsRegistrationDnsSettingsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.NewClouddomainsRegistrationDnsSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddomainsRegistrationDnsSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns">PutCustomDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords">PutGlueRecords</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resetCustomDns">ResetCustomDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resetGlueRecords">ResetGlueRecords</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomDns` <a name="PutCustomDns" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns"></a>

```go
func PutCustomDns(value ClouddomainsRegistrationDnsSettingsCustomDns)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putCustomDns.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a>

---

##### `PutGlueRecords` <a name="PutGlueRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords"></a>

```go
func PutGlueRecords(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.putGlueRecords.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCustomDns` <a name="ResetCustomDns" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resetCustomDns"></a>

```go
func ResetCustomDns()
```

##### `ResetGlueRecords` <a name="ResetGlueRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.resetGlueRecords"></a>

```go
func ResetGlueRecords()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.customDns">CustomDns</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference">ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecords">GlueRecords</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList">ClouddomainsRegistrationDnsSettingsGlueRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.customDnsInput">CustomDnsInput</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecordsInput">GlueRecordsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomDns`<sup>Required</sup> <a name="CustomDns" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.customDns"></a>

```go
func CustomDns() ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference">ClouddomainsRegistrationDnsSettingsCustomDnsOutputReference</a>

---

##### `GlueRecords`<sup>Required</sup> <a name="GlueRecords" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecords"></a>

```go
func GlueRecords() ClouddomainsRegistrationDnsSettingsGlueRecordsList
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsGlueRecordsList">ClouddomainsRegistrationDnsSettingsGlueRecordsList</a>

---

##### `CustomDnsInput`<sup>Optional</sup> <a name="CustomDnsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.customDnsInput"></a>

```go
func CustomDnsInput() ClouddomainsRegistrationDnsSettingsCustomDns
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsCustomDns">ClouddomainsRegistrationDnsSettingsCustomDns</a>

---

##### `GlueRecordsInput`<sup>Optional</sup> <a name="GlueRecordsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.glueRecordsInput"></a>

```go
func GlueRecordsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddomainsRegistrationDnsSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationDnsSettings">ClouddomainsRegistrationDnsSettings</a>

---


### ClouddomainsRegistrationManagementSettingsOutputReference <a name="ClouddomainsRegistrationManagementSettingsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.NewClouddomainsRegistrationManagementSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddomainsRegistrationManagementSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resetPreferredRenewalMethod">ResetPreferredRenewalMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resetTransferLockState">ResetTransferLockState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPreferredRenewalMethod` <a name="ResetPreferredRenewalMethod" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resetPreferredRenewalMethod"></a>

```go
func ResetPreferredRenewalMethod()
```

##### `ResetTransferLockState` <a name="ResetTransferLockState" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.resetTransferLockState"></a>

```go
func ResetTransferLockState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.renewalMethod">RenewalMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethodInput">PreferredRenewalMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockStateInput">TransferLockStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethod">PreferredRenewalMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockState">TransferLockState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RenewalMethod`<sup>Required</sup> <a name="RenewalMethod" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.renewalMethod"></a>

```go
func RenewalMethod() *string
```

- *Type:* *string

---

##### `PreferredRenewalMethodInput`<sup>Optional</sup> <a name="PreferredRenewalMethodInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethodInput"></a>

```go
func PreferredRenewalMethodInput() *string
```

- *Type:* *string

---

##### `TransferLockStateInput`<sup>Optional</sup> <a name="TransferLockStateInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockStateInput"></a>

```go
func TransferLockStateInput() *string
```

- *Type:* *string

---

##### `PreferredRenewalMethod`<sup>Required</sup> <a name="PreferredRenewalMethod" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.preferredRenewalMethod"></a>

```go
func PreferredRenewalMethod() *string
```

- *Type:* *string

---

##### `TransferLockState`<sup>Required</sup> <a name="TransferLockState" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.transferLockState"></a>

```go
func TransferLockState() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddomainsRegistrationManagementSettings
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationManagementSettings">ClouddomainsRegistrationManagementSettings</a>

---


### ClouddomainsRegistrationTimeoutsOutputReference <a name="ClouddomainsRegistrationTimeoutsOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.NewClouddomainsRegistrationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddomainsRegistrationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ClouddomainsRegistrationYearlyPriceOutputReference <a name="ClouddomainsRegistrationYearlyPriceOutputReference" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/clouddomainsregistration"

clouddomainsregistration.NewClouddomainsRegistrationYearlyPriceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ClouddomainsRegistrationYearlyPriceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resetCurrencyCode">ResetCurrencyCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resetUnits">ResetUnits</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCurrencyCode` <a name="ResetCurrencyCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resetCurrencyCode"></a>

```go
func ResetCurrencyCode()
```

##### `ResetUnits` <a name="ResetUnits" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.resetUnits"></a>

```go
func ResetUnits()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCodeInput">CurrencyCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.unitsInput">UnitsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCode">CurrencyCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.units">Units</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CurrencyCodeInput`<sup>Optional</sup> <a name="CurrencyCodeInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCodeInput"></a>

```go
func CurrencyCodeInput() *string
```

- *Type:* *string

---

##### `UnitsInput`<sup>Optional</sup> <a name="UnitsInput" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.unitsInput"></a>

```go
func UnitsInput() *string
```

- *Type:* *string

---

##### `CurrencyCode`<sup>Required</sup> <a name="CurrencyCode" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.currencyCode"></a>

```go
func CurrencyCode() *string
```

- *Type:* *string

---

##### `Units`<sup>Required</sup> <a name="Units" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.units"></a>

```go
func Units() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPriceOutputReference.property.internalValue"></a>

```go
func InternalValue() ClouddomainsRegistrationYearlyPrice
```

- *Type:* <a href="#@cdktf/provider-google.clouddomainsRegistration.ClouddomainsRegistrationYearlyPrice">ClouddomainsRegistrationYearlyPrice</a>

---



