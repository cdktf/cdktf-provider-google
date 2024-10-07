# `cloudQuotasQuotaPreference` Submodule <a name="`cloudQuotasQuotaPreference` Submodule" id="@cdktf/provider-google.cloudQuotasQuotaPreference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudQuotasQuotaPreference <a name="CloudQuotasQuotaPreference" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference google_cloud_quotas_quota_preference}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudquotasquotapreference"

cloudquotasquotapreference.NewCloudQuotasQuotaPreference(scope Construct, id *string, config CloudQuotasQuotaPreferenceConfig) CloudQuotasQuotaPreference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig">CloudQuotasQuotaPreferenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig">CloudQuotasQuotaPreferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putQuotaConfig">PutQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetContactEmail">ResetContactEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetDimensions">ResetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetIgnoreSafetyChecks">ResetIgnoreSafetyChecks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetJustification">ResetJustification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetParent">ResetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetQuotaId">ResetQuotaId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutQuotaConfig` <a name="PutQuotaConfig" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putQuotaConfig"></a>

```go
func PutQuotaConfig(value CloudQuotasQuotaPreferenceQuotaConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putQuotaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putTimeouts"></a>

```go
func PutTimeouts(value CloudQuotasQuotaPreferenceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a>

---

##### `ResetContactEmail` <a name="ResetContactEmail" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetContactEmail"></a>

```go
func ResetContactEmail()
```

##### `ResetDimensions` <a name="ResetDimensions" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetDimensions"></a>

```go
func ResetDimensions()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetId"></a>

```go
func ResetId()
```

##### `ResetIgnoreSafetyChecks` <a name="ResetIgnoreSafetyChecks" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetIgnoreSafetyChecks"></a>

```go
func ResetIgnoreSafetyChecks()
```

##### `ResetJustification` <a name="ResetJustification" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetJustification"></a>

```go
func ResetJustification()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetName"></a>

```go
func ResetName()
```

##### `ResetParent` <a name="ResetParent" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetParent"></a>

```go
func ResetParent()
```

##### `ResetQuotaId` <a name="ResetQuotaId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetQuotaId"></a>

```go
func ResetQuotaId()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetService"></a>

```go
func ResetService()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudQuotasQuotaPreference resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudquotasquotapreference"

cloudquotasquotapreference.CloudQuotasQuotaPreference_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudquotasquotapreference"

cloudquotasquotapreference.CloudQuotasQuotaPreference_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudquotasquotapreference"

cloudquotasquotapreference.CloudQuotasQuotaPreference_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudquotasquotapreference"

cloudquotasquotapreference.CloudQuotasQuotaPreference_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudQuotasQuotaPreference resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudQuotasQuotaPreference to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudQuotasQuotaPreference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudQuotasQuotaPreference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaConfig">QuotaConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference">CloudQuotasQuotaPreferenceQuotaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.reconciling">Reconciling</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference">CloudQuotasQuotaPreferenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.contactEmailInput">ContactEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dimensionsInput">DimensionsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.ignoreSafetyChecksInput">IgnoreSafetyChecksInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.justificationInput">JustificationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaConfigInput">QuotaConfigInput</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaIdInput">QuotaIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.serviceInput">ServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.contactEmail">ContactEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dimensions">Dimensions</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.ignoreSafetyChecks">IgnoreSafetyChecks</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.justification">Justification</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaId">QuotaId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.service">Service</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `QuotaConfig`<sup>Required</sup> <a name="QuotaConfig" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaConfig"></a>

```go
func QuotaConfig() CloudQuotasQuotaPreferenceQuotaConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference">CloudQuotasQuotaPreferenceQuotaConfigOutputReference</a>

---

##### `Reconciling`<sup>Required</sup> <a name="Reconciling" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.reconciling"></a>

```go
func Reconciling() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.timeouts"></a>

```go
func Timeouts() CloudQuotasQuotaPreferenceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference">CloudQuotasQuotaPreferenceTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ContactEmailInput`<sup>Optional</sup> <a name="ContactEmailInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.contactEmailInput"></a>

```go
func ContactEmailInput() *string
```

- *Type:* *string

---

##### `DimensionsInput`<sup>Optional</sup> <a name="DimensionsInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dimensionsInput"></a>

```go
func DimensionsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IgnoreSafetyChecksInput`<sup>Optional</sup> <a name="IgnoreSafetyChecksInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.ignoreSafetyChecksInput"></a>

```go
func IgnoreSafetyChecksInput() *string
```

- *Type:* *string

---

##### `JustificationInput`<sup>Optional</sup> <a name="JustificationInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.justificationInput"></a>

```go
func JustificationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `QuotaConfigInput`<sup>Optional</sup> <a name="QuotaConfigInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaConfigInput"></a>

```go
func QuotaConfigInput() CloudQuotasQuotaPreferenceQuotaConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a>

---

##### `QuotaIdInput`<sup>Optional</sup> <a name="QuotaIdInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaIdInput"></a>

```go
func QuotaIdInput() *string
```

- *Type:* *string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.serviceInput"></a>

```go
func ServiceInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ContactEmail`<sup>Required</sup> <a name="ContactEmail" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.contactEmail"></a>

```go
func ContactEmail() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.dimensions"></a>

```go
func Dimensions() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IgnoreSafetyChecks`<sup>Required</sup> <a name="IgnoreSafetyChecks" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.ignoreSafetyChecks"></a>

```go
func IgnoreSafetyChecks() *string
```

- *Type:* *string

---

##### `Justification`<sup>Required</sup> <a name="Justification" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.justification"></a>

```go
func Justification() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `QuotaId`<sup>Required</sup> <a name="QuotaId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.quotaId"></a>

```go
func QuotaId() *string
```

- *Type:* *string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.service"></a>

```go
func Service() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreference.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudQuotasQuotaPreferenceConfig <a name="CloudQuotasQuotaPreferenceConfig" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudquotasquotapreference"

&cloudquotasquotapreference.CloudQuotasQuotaPreferenceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	QuotaConfig: github.com/cdktf/cdktf-provider-google-go/google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig,
	ContactEmail: *string,
	Dimensions: *map[string]*string,
	Id: *string,
	IgnoreSafetyChecks: *string,
	Justification: *string,
	Name: *string,
	Parent: *string,
	QuotaId: *string,
	Service: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.quotaConfig">QuotaConfig</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a></code> | quota_config block. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.contactEmail">ContactEmail</a></code> | <code>*string</code> | An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.dimensions">Dimensions</a></code> | <code>*map[string]*string</code> | The dimensions that this quota preference applies to. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#id CloudQuotasQuotaPreference#id}. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.ignoreSafetyChecks">IgnoreSafetyChecks</a></code> | <code>*string</code> | The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"]. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.justification">Justification</a></code> | <code>*string</code> | The reason / justification for this quota preference. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of the quota preference. Required except in the CREATE requests. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.parent">Parent</a></code> | <code>*string</code> | The parent of the quota preference. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.quotaId">QuotaId</a></code> | <code>*string</code> | The id of the quota to which the quota preference is applied. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.service">Service</a></code> | <code>*string</code> | The name of the service to which the quota preference is applied. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `QuotaConfig`<sup>Required</sup> <a name="QuotaConfig" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.quotaConfig"></a>

```go
QuotaConfig CloudQuotasQuotaPreferenceQuotaConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a>

quota_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#quota_config CloudQuotasQuotaPreference#quota_config}

---

##### `ContactEmail`<sup>Optional</sup> <a name="ContactEmail" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.contactEmail"></a>

```go
ContactEmail *string
```

- *Type:* *string

An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted.

The Google account for the email address must have quota update permission for the project, folder or organization this quota preference is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#contact_email CloudQuotasQuotaPreference#contact_email}

---

##### `Dimensions`<sup>Optional</sup> <a name="Dimensions" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.dimensions"></a>

```go
Dimensions *map[string]*string
```

- *Type:* *map[string]*string

The dimensions that this quota preference applies to.

The key of the map entry is the name of a dimension, such as "region", "zone", "network_id", and the value of the map entry is the dimension value. If a dimension is missing from the map of dimensions, the quota preference applies to all the dimension values except for those that have other quota preferences configured for the specific value.

NOTE: QuotaPreferences can only be applied across all values of "user" and "resource" dimension. Do not set values for "user" or "resource" in the dimension map.

Example: '{"provider": "Foo Inc"}' where "provider" is a service specific dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#dimensions CloudQuotasQuotaPreference#dimensions}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#id CloudQuotasQuotaPreference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IgnoreSafetyChecks`<sup>Optional</sup> <a name="IgnoreSafetyChecks" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.ignoreSafetyChecks"></a>

```go
IgnoreSafetyChecks *string
```

- *Type:* *string

The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#ignore_safety_checks CloudQuotasQuotaPreference#ignore_safety_checks}

---

##### `Justification`<sup>Optional</sup> <a name="Justification" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.justification"></a>

```go
Justification *string
```

- *Type:* *string

The reason / justification for this quota preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#justification CloudQuotasQuotaPreference#justification}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the quota preference. Required except in the CREATE requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#name CloudQuotasQuotaPreference#name}

---

##### `Parent`<sup>Optional</sup> <a name="Parent" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The parent of the quota preference.

Allowed parents are "projects/[project-id / number]" or "folders/[folder-id / number]" or "organizations/[org-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#parent CloudQuotasQuotaPreference#parent}

---

##### `QuotaId`<sup>Optional</sup> <a name="QuotaId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.quotaId"></a>

```go
QuotaId *string
```

- *Type:* *string

The id of the quota to which the quota preference is applied.

A quota id is unique in the service.
Example: 'CPUS-per-project-region'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#quota_id CloudQuotasQuotaPreference#quota_id}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.service"></a>

```go
Service *string
```

- *Type:* *string

The name of the service to which the quota preference is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#service CloudQuotasQuotaPreference#service}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceConfig.property.timeouts"></a>

```go
Timeouts CloudQuotasQuotaPreferenceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts">CloudQuotasQuotaPreferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#timeouts CloudQuotasQuotaPreference#timeouts}

---

### CloudQuotasQuotaPreferenceQuotaConfig <a name="CloudQuotasQuotaPreferenceQuotaConfig" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudquotasquotapreference"

&cloudquotasquotapreference.CloudQuotasQuotaPreferenceQuotaConfig {
	PreferredValue: *string,
	Annotations: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.property.preferredValue">PreferredValue</a></code> | <code>*string</code> | The preferred value. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | The annotations map for clients to store small amounts of arbitrary data. |

---

##### `PreferredValue`<sup>Required</sup> <a name="PreferredValue" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.property.preferredValue"></a>

```go
PreferredValue *string
```

- *Type:* *string

The preferred value.

Must be greater than or equal to -1. If set to -1, it means the value is "unlimited".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#preferred_value CloudQuotasQuotaPreference#preferred_value}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig.property.annotations"></a>

```go
Annotations *map[string]*string
```

- *Type:* *map[string]*string

The annotations map for clients to store small amounts of arbitrary data.

Do not put PII or other sensitive information here. See https://google.aip.dev/128#annotations.

An object containing a list of "key: value" pairs. Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#annotations CloudQuotasQuotaPreference#annotations}

---

### CloudQuotasQuotaPreferenceTimeouts <a name="CloudQuotasQuotaPreferenceTimeouts" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudquotasquotapreference"

&cloudquotasquotapreference.CloudQuotasQuotaPreferenceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#create CloudQuotasQuotaPreference#create}. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#delete CloudQuotasQuotaPreference#delete}. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#update CloudQuotasQuotaPreference#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#create CloudQuotasQuotaPreference#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#delete CloudQuotasQuotaPreference#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/cloud_quotas_quota_preference#update CloudQuotasQuotaPreference#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudQuotasQuotaPreferenceQuotaConfigOutputReference <a name="CloudQuotasQuotaPreferenceQuotaConfigOutputReference" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudquotasquotapreference"

cloudquotasquotapreference.NewCloudQuotasQuotaPreferenceQuotaConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudQuotasQuotaPreferenceQuotaConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resetAnnotations">ResetAnnotations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.resetAnnotations"></a>

```go
func ResetAnnotations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.grantedValue">GrantedValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.requestOrigin">RequestOrigin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.stateDetail">StateDetail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.traceId">TraceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotationsInput">AnnotationsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValueInput">PreferredValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotations">Annotations</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValue">PreferredValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GrantedValue`<sup>Required</sup> <a name="GrantedValue" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.grantedValue"></a>

```go
func GrantedValue() *string
```

- *Type:* *string

---

##### `RequestOrigin`<sup>Required</sup> <a name="RequestOrigin" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.requestOrigin"></a>

```go
func RequestOrigin() *string
```

- *Type:* *string

---

##### `StateDetail`<sup>Required</sup> <a name="StateDetail" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.stateDetail"></a>

```go
func StateDetail() *string
```

- *Type:* *string

---

##### `TraceId`<sup>Required</sup> <a name="TraceId" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.traceId"></a>

```go
func TraceId() *string
```

- *Type:* *string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotationsInput"></a>

```go
func AnnotationsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PreferredValueInput`<sup>Optional</sup> <a name="PreferredValueInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValueInput"></a>

```go
func PreferredValueInput() *string
```

- *Type:* *string

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotations"></a>

```go
func Annotations() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PreferredValue`<sup>Required</sup> <a name="PreferredValue" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValue"></a>

```go
func PreferredValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudQuotasQuotaPreferenceQuotaConfig
```

- *Type:* <a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceQuotaConfig">CloudQuotasQuotaPreferenceQuotaConfig</a>

---


### CloudQuotasQuotaPreferenceTimeoutsOutputReference <a name="CloudQuotasQuotaPreferenceTimeoutsOutputReference" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/cloudquotasquotapreference"

cloudquotasquotapreference.NewCloudQuotasQuotaPreferenceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudQuotasQuotaPreferenceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.cloudQuotasQuotaPreference.CloudQuotasQuotaPreferenceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



