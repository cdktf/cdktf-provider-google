# `identityPlatformConfig` Submodule <a name="`identityPlatformConfig` Submodule" id="@cdktf/provider-google.identityPlatformConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityPlatformConfig <a name="IdentityPlatformConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config google_identity_platform_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfig(scope Construct, id *string, config IdentityPlatformConfigConfig) IdentityPlatformConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig">IdentityPlatformConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig">IdentityPlatformConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putBlockingFunctions">PutBlockingFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putClient">PutClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMfa">PutMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMonitoring">PutMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMultiTenant">PutMultiTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putQuota">PutQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSignIn">PutSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSmsRegionConfig">PutSmsRegionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetAuthorizedDomains">ResetAuthorizedDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetAutodeleteAnonymousUsers">ResetAutodeleteAnonymousUsers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetBlockingFunctions">ResetBlockingFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetClient">ResetClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMfa">ResetMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMonitoring">ResetMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMultiTenant">ResetMultiTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetQuota">ResetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetSignIn">ResetSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetSmsRegionConfig">ResetSmsRegionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBlockingFunctions` <a name="PutBlockingFunctions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putBlockingFunctions"></a>

```go
func PutBlockingFunctions(value IdentityPlatformConfigBlockingFunctions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putBlockingFunctions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a>

---

##### `PutClient` <a name="PutClient" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putClient"></a>

```go
func PutClient(value IdentityPlatformConfigClient)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putClient.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a>

---

##### `PutMfa` <a name="PutMfa" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMfa"></a>

```go
func PutMfa(value IdentityPlatformConfigMfa)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMfa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a>

---

##### `PutMonitoring` <a name="PutMonitoring" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMonitoring"></a>

```go
func PutMonitoring(value IdentityPlatformConfigMonitoring)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMonitoring.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a>

---

##### `PutMultiTenant` <a name="PutMultiTenant" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMultiTenant"></a>

```go
func PutMultiTenant(value IdentityPlatformConfigMultiTenant)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putMultiTenant.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a>

---

##### `PutQuota` <a name="PutQuota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putQuota"></a>

```go
func PutQuota(value IdentityPlatformConfigQuota)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putQuota.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a>

---

##### `PutSignIn` <a name="PutSignIn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSignIn"></a>

```go
func PutSignIn(value IdentityPlatformConfigSignIn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSignIn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a>

---

##### `PutSmsRegionConfig` <a name="PutSmsRegionConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSmsRegionConfig"></a>

```go
func PutSmsRegionConfig(value IdentityPlatformConfigSmsRegionConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putSmsRegionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putTimeouts"></a>

```go
func PutTimeouts(value IdentityPlatformConfigTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts">IdentityPlatformConfigTimeouts</a>

---

##### `ResetAuthorizedDomains` <a name="ResetAuthorizedDomains" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetAuthorizedDomains"></a>

```go
func ResetAuthorizedDomains()
```

##### `ResetAutodeleteAnonymousUsers` <a name="ResetAutodeleteAnonymousUsers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetAutodeleteAnonymousUsers"></a>

```go
func ResetAutodeleteAnonymousUsers()
```

##### `ResetBlockingFunctions` <a name="ResetBlockingFunctions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetBlockingFunctions"></a>

```go
func ResetBlockingFunctions()
```

##### `ResetClient` <a name="ResetClient" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetClient"></a>

```go
func ResetClient()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetId"></a>

```go
func ResetId()
```

##### `ResetMfa` <a name="ResetMfa" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMfa"></a>

```go
func ResetMfa()
```

##### `ResetMonitoring` <a name="ResetMonitoring" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMonitoring"></a>

```go
func ResetMonitoring()
```

##### `ResetMultiTenant` <a name="ResetMultiTenant" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetMultiTenant"></a>

```go
func ResetMultiTenant()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetProject"></a>

```go
func ResetProject()
```

##### `ResetQuota` <a name="ResetQuota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetQuota"></a>

```go
func ResetQuota()
```

##### `ResetSignIn` <a name="ResetSignIn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetSignIn"></a>

```go
func ResetSignIn()
```

##### `ResetSmsRegionConfig` <a name="ResetSmsRegionConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetSmsRegionConfig"></a>

```go
func ResetSmsRegionConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IdentityPlatformConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.IdentityPlatformConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.IdentityPlatformConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.IdentityPlatformConfig_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.IdentityPlatformConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a IdentityPlatformConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IdentityPlatformConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IdentityPlatformConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the IdentityPlatformConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.blockingFunctions">BlockingFunctions</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference">IdentityPlatformConfigBlockingFunctionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.client">Client</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference">IdentityPlatformConfigClientOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.mfa">Mfa</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference">IdentityPlatformConfigMfaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference">IdentityPlatformConfigMonitoringOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.multiTenant">MultiTenant</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference">IdentityPlatformConfigMultiTenantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference">IdentityPlatformConfigQuotaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.signIn">SignIn</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference">IdentityPlatformConfigSignInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.smsRegionConfig">SmsRegionConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference">IdentityPlatformConfigSmsRegionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference">IdentityPlatformConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.authorizedDomainsInput">AuthorizedDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.autodeleteAnonymousUsersInput">AutodeleteAnonymousUsersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.blockingFunctionsInput">BlockingFunctionsInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.clientInput">ClientInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.mfaInput">MfaInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.monitoringInput">MonitoringInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.multiTenantInput">MultiTenantInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.quotaInput">QuotaInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.signInInput">SignInInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.smsRegionConfigInput">SmsRegionConfigInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.authorizedDomains">AuthorizedDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.autodeleteAnonymousUsers">AutodeleteAnonymousUsers</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BlockingFunctions`<sup>Required</sup> <a name="BlockingFunctions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.blockingFunctions"></a>

```go
func BlockingFunctions() IdentityPlatformConfigBlockingFunctionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference">IdentityPlatformConfigBlockingFunctionsOutputReference</a>

---

##### `Client`<sup>Required</sup> <a name="Client" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.client"></a>

```go
func Client() IdentityPlatformConfigClientOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference">IdentityPlatformConfigClientOutputReference</a>

---

##### `Mfa`<sup>Required</sup> <a name="Mfa" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.mfa"></a>

```go
func Mfa() IdentityPlatformConfigMfaOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference">IdentityPlatformConfigMfaOutputReference</a>

---

##### `Monitoring`<sup>Required</sup> <a name="Monitoring" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.monitoring"></a>

```go
func Monitoring() IdentityPlatformConfigMonitoringOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference">IdentityPlatformConfigMonitoringOutputReference</a>

---

##### `MultiTenant`<sup>Required</sup> <a name="MultiTenant" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.multiTenant"></a>

```go
func MultiTenant() IdentityPlatformConfigMultiTenantOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference">IdentityPlatformConfigMultiTenantOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.quota"></a>

```go
func Quota() IdentityPlatformConfigQuotaOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference">IdentityPlatformConfigQuotaOutputReference</a>

---

##### `SignIn`<sup>Required</sup> <a name="SignIn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.signIn"></a>

```go
func SignIn() IdentityPlatformConfigSignInOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference">IdentityPlatformConfigSignInOutputReference</a>

---

##### `SmsRegionConfig`<sup>Required</sup> <a name="SmsRegionConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.smsRegionConfig"></a>

```go
func SmsRegionConfig() IdentityPlatformConfigSmsRegionConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference">IdentityPlatformConfigSmsRegionConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.timeouts"></a>

```go
func Timeouts() IdentityPlatformConfigTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference">IdentityPlatformConfigTimeoutsOutputReference</a>

---

##### `AuthorizedDomainsInput`<sup>Optional</sup> <a name="AuthorizedDomainsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.authorizedDomainsInput"></a>

```go
func AuthorizedDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AutodeleteAnonymousUsersInput`<sup>Optional</sup> <a name="AutodeleteAnonymousUsersInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.autodeleteAnonymousUsersInput"></a>

```go
func AutodeleteAnonymousUsersInput() interface{}
```

- *Type:* interface{}

---

##### `BlockingFunctionsInput`<sup>Optional</sup> <a name="BlockingFunctionsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.blockingFunctionsInput"></a>

```go
func BlockingFunctionsInput() IdentityPlatformConfigBlockingFunctions
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a>

---

##### `ClientInput`<sup>Optional</sup> <a name="ClientInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.clientInput"></a>

```go
func ClientInput() IdentityPlatformConfigClient
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MfaInput`<sup>Optional</sup> <a name="MfaInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.mfaInput"></a>

```go
func MfaInput() IdentityPlatformConfigMfa
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a>

---

##### `MonitoringInput`<sup>Optional</sup> <a name="MonitoringInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.monitoringInput"></a>

```go
func MonitoringInput() IdentityPlatformConfigMonitoring
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a>

---

##### `MultiTenantInput`<sup>Optional</sup> <a name="MultiTenantInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.multiTenantInput"></a>

```go
func MultiTenantInput() IdentityPlatformConfigMultiTenant
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.quotaInput"></a>

```go
func QuotaInput() IdentityPlatformConfigQuota
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a>

---

##### `SignInInput`<sup>Optional</sup> <a name="SignInInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.signInInput"></a>

```go
func SignInInput() IdentityPlatformConfigSignIn
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a>

---

##### `SmsRegionConfigInput`<sup>Optional</sup> <a name="SmsRegionConfigInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.smsRegionConfigInput"></a>

```go
func SmsRegionConfigInput() IdentityPlatformConfigSmsRegionConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizedDomains`<sup>Required</sup> <a name="AuthorizedDomains" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.authorizedDomains"></a>

```go
func AuthorizedDomains() *[]*string
```

- *Type:* *[]*string

---

##### `AutodeleteAnonymousUsers`<sup>Required</sup> <a name="AutodeleteAnonymousUsers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.autodeleteAnonymousUsers"></a>

```go
func AutodeleteAnonymousUsers() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityPlatformConfigBlockingFunctions <a name="IdentityPlatformConfigBlockingFunctions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigBlockingFunctions {
	Triggers: interface{},
	ForwardInboundCredentials: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions.property.triggers">Triggers</a></code> | <code>interface{}</code> | triggers block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions.property.forwardInboundCredentials">ForwardInboundCredentials</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a></code> | forward_inbound_credentials block. |

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions.property.triggers"></a>

```go
Triggers interface{}
```

- *Type:* interface{}

triggers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#triggers IdentityPlatformConfig#triggers}

---

##### `ForwardInboundCredentials`<sup>Optional</sup> <a name="ForwardInboundCredentials" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions.property.forwardInboundCredentials"></a>

```go
ForwardInboundCredentials IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

forward_inbound_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#forward_inbound_credentials IdentityPlatformConfig#forward_inbound_credentials}

---

### IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials <a name="IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials {
	AccessToken: interface{},
	IdToken: interface{},
	RefreshToken: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.accessToken">AccessToken</a></code> | <code>interface{}</code> | Whether to pass the user's OAuth identity provider's access token. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.idToken">IdToken</a></code> | <code>interface{}</code> | Whether to pass the user's OIDC identity provider's ID token. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.refreshToken">RefreshToken</a></code> | <code>interface{}</code> | Whether to pass the user's OAuth identity provider's refresh token. |

---

##### `AccessToken`<sup>Optional</sup> <a name="AccessToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.accessToken"></a>

```go
AccessToken interface{}
```

- *Type:* interface{}

Whether to pass the user's OAuth identity provider's access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#access_token IdentityPlatformConfig#access_token}

---

##### `IdToken`<sup>Optional</sup> <a name="IdToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.idToken"></a>

```go
IdToken interface{}
```

- *Type:* interface{}

Whether to pass the user's OIDC identity provider's ID token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#id_token IdentityPlatformConfig#id_token}

---

##### `RefreshToken`<sup>Optional</sup> <a name="RefreshToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials.property.refreshToken"></a>

```go
RefreshToken interface{}
```

- *Type:* interface{}

Whether to pass the user's OAuth identity provider's refresh token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#refresh_token IdentityPlatformConfig#refresh_token}

---

### IdentityPlatformConfigBlockingFunctionsTriggers <a name="IdentityPlatformConfigBlockingFunctionsTriggers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigBlockingFunctionsTriggers {
	EventType: *string,
	FunctionUri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers.property.eventType">EventType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#event_type IdentityPlatformConfig#event_type}. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers.property.functionUri">FunctionUri</a></code> | <code>*string</code> | HTTP URI trigger for the Cloud Function. |

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers.property.eventType"></a>

```go
EventType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#event_type IdentityPlatformConfig#event_type}.

---

##### `FunctionUri`<sup>Required</sup> <a name="FunctionUri" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggers.property.functionUri"></a>

```go
FunctionUri *string
```

- *Type:* *string

HTTP URI trigger for the Cloud Function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#function_uri IdentityPlatformConfig#function_uri}

---

### IdentityPlatformConfigClient <a name="IdentityPlatformConfigClient" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigClient {
	Permissions: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigClientPermissions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a></code> | permissions block. |

---

##### `Permissions`<sup>Optional</sup> <a name="Permissions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient.property.permissions"></a>

```go
Permissions IdentityPlatformConfigClientPermissions
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a>

permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#permissions IdentityPlatformConfig#permissions}

---

### IdentityPlatformConfigClientPermissions <a name="IdentityPlatformConfigClientPermissions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigClientPermissions {
	DisabledUserDeletion: interface{},
	DisabledUserSignup: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions.property.disabledUserDeletion">DisabledUserDeletion</a></code> | <code>interface{}</code> | When true, end users cannot delete their account on the associated project through any of our API methods. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions.property.disabledUserSignup">DisabledUserSignup</a></code> | <code>interface{}</code> | When true, end users cannot sign up for a new account on the associated project through any of our API methods. |

---

##### `DisabledUserDeletion`<sup>Optional</sup> <a name="DisabledUserDeletion" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions.property.disabledUserDeletion"></a>

```go
DisabledUserDeletion interface{}
```

- *Type:* interface{}

When true, end users cannot delete their account on the associated project through any of our API methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#disabled_user_deletion IdentityPlatformConfig#disabled_user_deletion}

---

##### `DisabledUserSignup`<sup>Optional</sup> <a name="DisabledUserSignup" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions.property.disabledUserSignup"></a>

```go
DisabledUserSignup interface{}
```

- *Type:* interface{}

When true, end users cannot sign up for a new account on the associated project through any of our API methods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#disabled_user_signup IdentityPlatformConfig#disabled_user_signup}

---

### IdentityPlatformConfigConfig <a name="IdentityPlatformConfigConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AuthorizedDomains: *[]*string,
	AutodeleteAnonymousUsers: interface{},
	BlockingFunctions: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions,
	Client: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigClient,
	Id: *string,
	Mfa: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigMfa,
	Monitoring: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigMonitoring,
	MultiTenant: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigMultiTenant,
	Project: *string,
	Quota: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigQuota,
	SignIn: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigSignIn,
	SmsRegionConfig: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.authorizedDomains">AuthorizedDomains</a></code> | <code>*[]*string</code> | List of domains authorized for OAuth redirects. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.autodeleteAnonymousUsers">AutodeleteAnonymousUsers</a></code> | <code>interface{}</code> | Whether anonymous users will be auto-deleted after a period of 30 days. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.blockingFunctions">BlockingFunctions</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a></code> | blocking_functions block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.client">Client</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a></code> | client block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#id IdentityPlatformConfig#id}. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.mfa">Mfa</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a></code> | mfa block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.monitoring">Monitoring</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a></code> | monitoring block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.multiTenant">MultiTenant</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a></code> | multi_tenant block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#project IdentityPlatformConfig#project}. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.quota">Quota</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a></code> | quota block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.signIn">SignIn</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a></code> | sign_in block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.smsRegionConfig">SmsRegionConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a></code> | sms_region_config block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts">IdentityPlatformConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizedDomains`<sup>Optional</sup> <a name="AuthorizedDomains" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.authorizedDomains"></a>

```go
AuthorizedDomains *[]*string
```

- *Type:* *[]*string

List of domains authorized for OAuth redirects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#authorized_domains IdentityPlatformConfig#authorized_domains}

---

##### `AutodeleteAnonymousUsers`<sup>Optional</sup> <a name="AutodeleteAnonymousUsers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.autodeleteAnonymousUsers"></a>

```go
AutodeleteAnonymousUsers interface{}
```

- *Type:* interface{}

Whether anonymous users will be auto-deleted after a period of 30 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#autodelete_anonymous_users IdentityPlatformConfig#autodelete_anonymous_users}

---

##### `BlockingFunctions`<sup>Optional</sup> <a name="BlockingFunctions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.blockingFunctions"></a>

```go
BlockingFunctions IdentityPlatformConfigBlockingFunctions
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a>

blocking_functions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#blocking_functions IdentityPlatformConfig#blocking_functions}

---

##### `Client`<sup>Optional</sup> <a name="Client" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.client"></a>

```go
Client IdentityPlatformConfigClient
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a>

client block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#client IdentityPlatformConfig#client}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#id IdentityPlatformConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Mfa`<sup>Optional</sup> <a name="Mfa" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.mfa"></a>

```go
Mfa IdentityPlatformConfigMfa
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a>

mfa block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#mfa IdentityPlatformConfig#mfa}

---

##### `Monitoring`<sup>Optional</sup> <a name="Monitoring" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.monitoring"></a>

```go
Monitoring IdentityPlatformConfigMonitoring
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a>

monitoring block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#monitoring IdentityPlatformConfig#monitoring}

---

##### `MultiTenant`<sup>Optional</sup> <a name="MultiTenant" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.multiTenant"></a>

```go
MultiTenant IdentityPlatformConfigMultiTenant
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a>

multi_tenant block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#multi_tenant IdentityPlatformConfig#multi_tenant}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#project IdentityPlatformConfig#project}.

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.quota"></a>

```go
Quota IdentityPlatformConfigQuota
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a>

quota block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#quota IdentityPlatformConfig#quota}

---

##### `SignIn`<sup>Optional</sup> <a name="SignIn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.signIn"></a>

```go
SignIn IdentityPlatformConfigSignIn
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a>

sign_in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#sign_in IdentityPlatformConfig#sign_in}

---

##### `SmsRegionConfig`<sup>Optional</sup> <a name="SmsRegionConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.smsRegionConfig"></a>

```go
SmsRegionConfig IdentityPlatformConfigSmsRegionConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a>

sms_region_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#sms_region_config IdentityPlatformConfig#sms_region_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigConfig.property.timeouts"></a>

```go
Timeouts IdentityPlatformConfigTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts">IdentityPlatformConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#timeouts IdentityPlatformConfig#timeouts}

---

### IdentityPlatformConfigMfa <a name="IdentityPlatformConfigMfa" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigMfa {
	EnabledProviders: *[]*string,
	ProviderConfigs: interface{},
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.enabledProviders">EnabledProviders</a></code> | <code>*[]*string</code> | A list of usable second factors for this project. Possible values: ["PHONE_SMS"]. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.providerConfigs">ProviderConfigs</a></code> | <code>interface{}</code> | provider_configs block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.state">State</a></code> | <code>*string</code> | Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"]. |

---

##### `EnabledProviders`<sup>Optional</sup> <a name="EnabledProviders" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.enabledProviders"></a>

```go
EnabledProviders *[]*string
```

- *Type:* *[]*string

A list of usable second factors for this project. Possible values: ["PHONE_SMS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#enabled_providers IdentityPlatformConfig#enabled_providers}

---

##### `ProviderConfigs`<sup>Optional</sup> <a name="ProviderConfigs" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.providerConfigs"></a>

```go
ProviderConfigs interface{}
```

- *Type:* interface{}

provider_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#provider_configs IdentityPlatformConfig#provider_configs}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa.property.state"></a>

```go
State *string
```

- *Type:* *string

Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#state IdentityPlatformConfig#state}

---

### IdentityPlatformConfigMfaProviderConfigs <a name="IdentityPlatformConfigMfaProviderConfigs" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigMfaProviderConfigs {
	State: *string,
	TotpProviderConfig: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs.property.state">State</a></code> | <code>*string</code> | Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"]. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs.property.totpProviderConfig">TotpProviderConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a></code> | totp_provider_config block. |

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs.property.state"></a>

```go
State *string
```

- *Type:* *string

Whether MultiFactor Authentication has been enabled for this project. Possible values: ["DISABLED", "ENABLED", "MANDATORY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#state IdentityPlatformConfig#state}

---

##### `TotpProviderConfig`<sup>Optional</sup> <a name="TotpProviderConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigs.property.totpProviderConfig"></a>

```go
TotpProviderConfig IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a>

totp_provider_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#totp_provider_config IdentityPlatformConfig#totp_provider_config}

---

### IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig <a name="IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig {
	AdjacentIntervals: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig.property.adjacentIntervals">AdjacentIntervals</a></code> | <code>*f64</code> | The allowed number of adjacent intervals that will be used for verification to avoid clock skew. |

---

##### `AdjacentIntervals`<sup>Optional</sup> <a name="AdjacentIntervals" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig.property.adjacentIntervals"></a>

```go
AdjacentIntervals *f64
```

- *Type:* *f64

The allowed number of adjacent intervals that will be used for verification to avoid clock skew.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#adjacent_intervals IdentityPlatformConfig#adjacent_intervals}

---

### IdentityPlatformConfigMonitoring <a name="IdentityPlatformConfigMonitoring" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigMonitoring {
	RequestLogging: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring.property.requestLogging">RequestLogging</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a></code> | request_logging block. |

---

##### `RequestLogging`<sup>Optional</sup> <a name="RequestLogging" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring.property.requestLogging"></a>

```go
RequestLogging IdentityPlatformConfigMonitoringRequestLogging
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a>

request_logging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#request_logging IdentityPlatformConfig#request_logging}

---

### IdentityPlatformConfigMonitoringRequestLogging <a name="IdentityPlatformConfigMonitoringRequestLogging" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigMonitoringRequestLogging {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether logging is enabled for this project or not. |

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether logging is enabled for this project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#enabled IdentityPlatformConfig#enabled}

---

### IdentityPlatformConfigMultiTenant <a name="IdentityPlatformConfigMultiTenant" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigMultiTenant {
	AllowTenants: interface{},
	DefaultTenantLocation: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant.property.allowTenants">AllowTenants</a></code> | <code>interface{}</code> | Whether this project can have tenants or not. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant.property.defaultTenantLocation">DefaultTenantLocation</a></code> | <code>*string</code> | The default cloud parent org or folder that the tenant project should be created under. |

---

##### `AllowTenants`<sup>Optional</sup> <a name="AllowTenants" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant.property.allowTenants"></a>

```go
AllowTenants interface{}
```

- *Type:* interface{}

Whether this project can have tenants or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#allow_tenants IdentityPlatformConfig#allow_tenants}

---

##### `DefaultTenantLocation`<sup>Optional</sup> <a name="DefaultTenantLocation" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant.property.defaultTenantLocation"></a>

```go
DefaultTenantLocation *string
```

- *Type:* *string

The default cloud parent org or folder that the tenant project should be created under.

The parent resource name should be in the format of "/", such as "folders/123" or "organizations/456".
If the value is not set, the tenant will be created under the same organization or folder as the agent project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#default_tenant_location IdentityPlatformConfig#default_tenant_location}

---

### IdentityPlatformConfigQuota <a name="IdentityPlatformConfigQuota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigQuota {
	SignUpQuotaConfig: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota.property.signUpQuotaConfig">SignUpQuotaConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a></code> | sign_up_quota_config block. |

---

##### `SignUpQuotaConfig`<sup>Optional</sup> <a name="SignUpQuotaConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota.property.signUpQuotaConfig"></a>

```go
SignUpQuotaConfig IdentityPlatformConfigQuotaSignUpQuotaConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a>

sign_up_quota_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#sign_up_quota_config IdentityPlatformConfig#sign_up_quota_config}

---

### IdentityPlatformConfigQuotaSignUpQuotaConfig <a name="IdentityPlatformConfigQuotaSignUpQuotaConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigQuotaSignUpQuotaConfig {
	Quota: *f64,
	QuotaDuration: *string,
	StartTime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.quota">Quota</a></code> | <code>*f64</code> | A sign up APIs quota that customers can override temporarily. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.quotaDuration">QuotaDuration</a></code> | <code>*string</code> | How long this quota will be active for. It is measurred in seconds, e.g., Example: "9.615s". |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.startTime">StartTime</a></code> | <code>*string</code> | When this quota will take affect. |

---

##### `Quota`<sup>Optional</sup> <a name="Quota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.quota"></a>

```go
Quota *f64
```

- *Type:* *f64

A sign up APIs quota that customers can override temporarily.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#quota IdentityPlatformConfig#quota}

---

##### `QuotaDuration`<sup>Optional</sup> <a name="QuotaDuration" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.quotaDuration"></a>

```go
QuotaDuration *string
```

- *Type:* *string

How long this quota will be active for. It is measurred in seconds, e.g., Example: "9.615s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#quota_duration IdentityPlatformConfig#quota_duration}

---

##### `StartTime`<sup>Optional</sup> <a name="StartTime" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

When this quota will take affect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#start_time IdentityPlatformConfig#start_time}

---

### IdentityPlatformConfigSignIn <a name="IdentityPlatformConfigSignIn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigSignIn {
	AllowDuplicateEmails: interface{},
	Anonymous: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous,
	Email: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigSignInEmail,
	PhoneNumber: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.allowDuplicateEmails">AllowDuplicateEmails</a></code> | <code>interface{}</code> | Whether to allow more than one account to have the same email. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.anonymous">Anonymous</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a></code> | anonymous block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.email">Email</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a></code> | email block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.phoneNumber">PhoneNumber</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a></code> | phone_number block. |

---

##### `AllowDuplicateEmails`<sup>Optional</sup> <a name="AllowDuplicateEmails" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.allowDuplicateEmails"></a>

```go
AllowDuplicateEmails interface{}
```

- *Type:* interface{}

Whether to allow more than one account to have the same email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#allow_duplicate_emails IdentityPlatformConfig#allow_duplicate_emails}

---

##### `Anonymous`<sup>Optional</sup> <a name="Anonymous" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.anonymous"></a>

```go
Anonymous IdentityPlatformConfigSignInAnonymous
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a>

anonymous block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#anonymous IdentityPlatformConfig#anonymous}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.email"></a>

```go
Email IdentityPlatformConfigSignInEmail
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a>

email block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#email IdentityPlatformConfig#email}

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn.property.phoneNumber"></a>

```go
PhoneNumber IdentityPlatformConfigSignInPhoneNumber
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a>

phone_number block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#phone_number IdentityPlatformConfig#phone_number}

---

### IdentityPlatformConfigSignInAnonymous <a name="IdentityPlatformConfigSignInAnonymous" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigSignInAnonymous {
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether anonymous user auth is enabled for the project or not. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether anonymous user auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#enabled IdentityPlatformConfig#enabled}

---

### IdentityPlatformConfigSignInEmail <a name="IdentityPlatformConfigSignInEmail" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigSignInEmail {
	Enabled: interface{},
	PasswordRequired: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether email auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail.property.passwordRequired">PasswordRequired</a></code> | <code>interface{}</code> | Whether a password is required for email auth or not. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether email auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#enabled IdentityPlatformConfig#enabled}

---

##### `PasswordRequired`<sup>Optional</sup> <a name="PasswordRequired" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail.property.passwordRequired"></a>

```go
PasswordRequired interface{}
```

- *Type:* interface{}

Whether a password is required for email auth or not.

If true, both an email and
password must be provided to sign in. If false, a user may sign in via either
email/password or email link.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#password_required IdentityPlatformConfig#password_required}

---

### IdentityPlatformConfigSignInHashConfig <a name="IdentityPlatformConfigSignInHashConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigSignInHashConfig {

}
```


### IdentityPlatformConfigSignInPhoneNumber <a name="IdentityPlatformConfigSignInPhoneNumber" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigSignInPhoneNumber {
	Enabled: interface{},
	TestPhoneNumbers: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether phone number auth is enabled for the project or not. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber.property.testPhoneNumbers">TestPhoneNumbers</a></code> | <code>*map[string]*string</code> | A map of <test phone number, fake code> that can be used for phone auth testing. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether phone number auth is enabled for the project or not.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#enabled IdentityPlatformConfig#enabled}

---

##### `TestPhoneNumbers`<sup>Optional</sup> <a name="TestPhoneNumbers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber.property.testPhoneNumbers"></a>

```go
TestPhoneNumbers *map[string]*string
```

- *Type:* *map[string]*string

A map of <test phone number, fake code> that can be used for phone auth testing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#test_phone_numbers IdentityPlatformConfig#test_phone_numbers}

---

### IdentityPlatformConfigSmsRegionConfig <a name="IdentityPlatformConfigSmsRegionConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigSmsRegionConfig {
	AllowByDefault: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault,
	AllowlistOnly: github.com/cdktf/cdktf-provider-google-go/google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig.property.allowByDefault">AllowByDefault</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a></code> | allow_by_default block. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig.property.allowlistOnly">AllowlistOnly</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a></code> | allowlist_only block. |

---

##### `AllowByDefault`<sup>Optional</sup> <a name="AllowByDefault" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig.property.allowByDefault"></a>

```go
AllowByDefault IdentityPlatformConfigSmsRegionConfigAllowByDefault
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a>

allow_by_default block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#allow_by_default IdentityPlatformConfig#allow_by_default}

---

##### `AllowlistOnly`<sup>Optional</sup> <a name="AllowlistOnly" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig.property.allowlistOnly"></a>

```go
AllowlistOnly IdentityPlatformConfigSmsRegionConfigAllowlistOnly
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a>

allowlist_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#allowlist_only IdentityPlatformConfig#allowlist_only}

---

### IdentityPlatformConfigSmsRegionConfigAllowByDefault <a name="IdentityPlatformConfigSmsRegionConfigAllowByDefault" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault {
	DisallowedRegions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault.property.disallowedRegions">DisallowedRegions</a></code> | <code>*[]*string</code> | Two letter unicode region codes to disallow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json. |

---

##### `DisallowedRegions`<sup>Optional</sup> <a name="DisallowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault.property.disallowedRegions"></a>

```go
DisallowedRegions *[]*string
```

- *Type:* *[]*string

Two letter unicode region codes to disallow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#disallowed_regions IdentityPlatformConfig#disallowed_regions}

---

### IdentityPlatformConfigSmsRegionConfigAllowlistOnly <a name="IdentityPlatformConfigSmsRegionConfigAllowlistOnly" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly {
	AllowedRegions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly.property.allowedRegions">AllowedRegions</a></code> | <code>*[]*string</code> | Two letter unicode region codes to allow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json. |

---

##### `AllowedRegions`<sup>Optional</sup> <a name="AllowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly.property.allowedRegions"></a>

```go
AllowedRegions *[]*string
```

- *Type:* *[]*string

Two letter unicode region codes to allow as defined by https://cldr.unicode.org/ The full list of these region codes is here: https://github.com/unicode-cldr/cldr-localenames-full/blob/master/main/en/territories.json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#allowed_regions IdentityPlatformConfig#allowed_regions}

---

### IdentityPlatformConfigTimeouts <a name="IdentityPlatformConfigTimeouts" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

&identityplatformconfig.IdentityPlatformConfigTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#create IdentityPlatformConfig#create}. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#delete IdentityPlatformConfig#delete}. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#update IdentityPlatformConfig#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#create IdentityPlatformConfig#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#delete IdentityPlatformConfig#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.1/docs/resources/identity_platform_config#update IdentityPlatformConfig#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference <a name="IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetAccessToken">ResetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetIdToken">ResetIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetRefreshToken">ResetRefreshToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessToken` <a name="ResetAccessToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetAccessToken"></a>

```go
func ResetAccessToken()
```

##### `ResetIdToken` <a name="ResetIdToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetIdToken"></a>

```go
func ResetIdToken()
```

##### `ResetRefreshToken` <a name="ResetRefreshToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.resetRefreshToken"></a>

```go
func ResetRefreshToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessTokenInput">AccessTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idTokenInput">IdTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshTokenInput">RefreshTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessToken">AccessToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idToken">IdToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshToken">RefreshToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessTokenInput`<sup>Optional</sup> <a name="AccessTokenInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessTokenInput"></a>

```go
func AccessTokenInput() interface{}
```

- *Type:* interface{}

---

##### `IdTokenInput`<sup>Optional</sup> <a name="IdTokenInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idTokenInput"></a>

```go
func IdTokenInput() interface{}
```

- *Type:* interface{}

---

##### `RefreshTokenInput`<sup>Optional</sup> <a name="RefreshTokenInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshTokenInput"></a>

```go
func RefreshTokenInput() interface{}
```

- *Type:* interface{}

---

##### `AccessToken`<sup>Required</sup> <a name="AccessToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.accessToken"></a>

```go
func AccessToken() interface{}
```

- *Type:* interface{}

---

##### `IdToken`<sup>Required</sup> <a name="IdToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.idToken"></a>

```go
func IdToken() interface{}
```

- *Type:* interface{}

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.refreshToken"></a>

```go
func RefreshToken() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

---


### IdentityPlatformConfigBlockingFunctionsOutputReference <a name="IdentityPlatformConfigBlockingFunctionsOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigBlockingFunctionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigBlockingFunctionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putForwardInboundCredentials">PutForwardInboundCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putTriggers">PutTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.resetForwardInboundCredentials">ResetForwardInboundCredentials</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutForwardInboundCredentials` <a name="PutForwardInboundCredentials" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putForwardInboundCredentials"></a>

```go
func PutForwardInboundCredentials(value IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putForwardInboundCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

---

##### `PutTriggers` <a name="PutTriggers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putTriggers"></a>

```go
func PutTriggers(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.putTriggers.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetForwardInboundCredentials` <a name="ResetForwardInboundCredentials" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.resetForwardInboundCredentials"></a>

```go
func ResetForwardInboundCredentials()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentials">ForwardInboundCredentials</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.triggers">Triggers</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList">IdentityPlatformConfigBlockingFunctionsTriggersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentialsInput">ForwardInboundCredentialsInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.triggersInput">TriggersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ForwardInboundCredentials`<sup>Required</sup> <a name="ForwardInboundCredentials" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentials"></a>

```go
func ForwardInboundCredentials() IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentialsOutputReference</a>

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.triggers"></a>

```go
func Triggers() IdentityPlatformConfigBlockingFunctionsTriggersList
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList">IdentityPlatformConfigBlockingFunctionsTriggersList</a>

---

##### `ForwardInboundCredentialsInput`<sup>Optional</sup> <a name="ForwardInboundCredentialsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.forwardInboundCredentialsInput"></a>

```go
func ForwardInboundCredentialsInput() IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials">IdentityPlatformConfigBlockingFunctionsForwardInboundCredentials</a>

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.triggersInput"></a>

```go
func TriggersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigBlockingFunctions
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctions">IdentityPlatformConfigBlockingFunctions</a>

---


### IdentityPlatformConfigBlockingFunctionsTriggersList <a name="IdentityPlatformConfigBlockingFunctionsTriggersList" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigBlockingFunctionsTriggersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityPlatformConfigBlockingFunctionsTriggersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.get"></a>

```go
func Get(index *f64) IdentityPlatformConfigBlockingFunctionsTriggersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityPlatformConfigBlockingFunctionsTriggersOutputReference <a name="IdentityPlatformConfigBlockingFunctionsTriggersOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigBlockingFunctionsTriggersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityPlatformConfigBlockingFunctionsTriggersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventTypeInput">EventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUriInput">FunctionUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUri">FunctionUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventTypeInput"></a>

```go
func EventTypeInput() *string
```

- *Type:* *string

---

##### `FunctionUriInput`<sup>Optional</sup> <a name="FunctionUriInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUriInput"></a>

```go
func FunctionUriInput() *string
```

- *Type:* *string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `FunctionUri`<sup>Required</sup> <a name="FunctionUri" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.functionUri"></a>

```go
func FunctionUri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigBlockingFunctionsTriggersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityPlatformConfigClientOutputReference <a name="IdentityPlatformConfigClientOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigClientOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigClientOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.putPermissions">PutPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.resetPermissions">ResetPermissions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPermissions` <a name="PutPermissions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.putPermissions"></a>

```go
func PutPermissions(value IdentityPlatformConfigClientPermissions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.putPermissions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a>

---

##### `ResetPermissions` <a name="ResetPermissions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.resetPermissions"></a>

```go
func ResetPermissions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.apiKey">ApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.firebaseSubdomain">FirebaseSubdomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.permissions">Permissions</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference">IdentityPlatformConfigClientPermissionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.permissionsInput">PermissionsInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKey`<sup>Required</sup> <a name="ApiKey" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.apiKey"></a>

```go
func ApiKey() *string
```

- *Type:* *string

---

##### `FirebaseSubdomain`<sup>Required</sup> <a name="FirebaseSubdomain" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.firebaseSubdomain"></a>

```go
func FirebaseSubdomain() *string
```

- *Type:* *string

---

##### `Permissions`<sup>Required</sup> <a name="Permissions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.permissions"></a>

```go
func Permissions() IdentityPlatformConfigClientPermissionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference">IdentityPlatformConfigClientPermissionsOutputReference</a>

---

##### `PermissionsInput`<sup>Optional</sup> <a name="PermissionsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.permissionsInput"></a>

```go
func PermissionsInput() IdentityPlatformConfigClientPermissions
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigClient
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClient">IdentityPlatformConfigClient</a>

---


### IdentityPlatformConfigClientPermissionsOutputReference <a name="IdentityPlatformConfigClientPermissionsOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigClientPermissionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigClientPermissionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resetDisabledUserDeletion">ResetDisabledUserDeletion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resetDisabledUserSignup">ResetDisabledUserSignup</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabledUserDeletion` <a name="ResetDisabledUserDeletion" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resetDisabledUserDeletion"></a>

```go
func ResetDisabledUserDeletion()
```

##### `ResetDisabledUserSignup` <a name="ResetDisabledUserSignup" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.resetDisabledUserSignup"></a>

```go
func ResetDisabledUserSignup()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserDeletionInput">DisabledUserDeletionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserSignupInput">DisabledUserSignupInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserDeletion">DisabledUserDeletion</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserSignup">DisabledUserSignup</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisabledUserDeletionInput`<sup>Optional</sup> <a name="DisabledUserDeletionInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserDeletionInput"></a>

```go
func DisabledUserDeletionInput() interface{}
```

- *Type:* interface{}

---

##### `DisabledUserSignupInput`<sup>Optional</sup> <a name="DisabledUserSignupInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserSignupInput"></a>

```go
func DisabledUserSignupInput() interface{}
```

- *Type:* interface{}

---

##### `DisabledUserDeletion`<sup>Required</sup> <a name="DisabledUserDeletion" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserDeletion"></a>

```go
func DisabledUserDeletion() interface{}
```

- *Type:* interface{}

---

##### `DisabledUserSignup`<sup>Required</sup> <a name="DisabledUserSignup" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.disabledUserSignup"></a>

```go
func DisabledUserSignup() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissionsOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigClientPermissions
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigClientPermissions">IdentityPlatformConfigClientPermissions</a>

---


### IdentityPlatformConfigMfaOutputReference <a name="IdentityPlatformConfigMfaOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigMfaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigMfaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.putProviderConfigs">PutProviderConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetEnabledProviders">ResetEnabledProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetProviderConfigs">ResetProviderConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProviderConfigs` <a name="PutProviderConfigs" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.putProviderConfigs"></a>

```go
func PutProviderConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.putProviderConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetEnabledProviders` <a name="ResetEnabledProviders" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetEnabledProviders"></a>

```go
func ResetEnabledProviders()
```

##### `ResetProviderConfigs` <a name="ResetProviderConfigs" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetProviderConfigs"></a>

```go
func ResetProviderConfigs()
```

##### `ResetState` <a name="ResetState" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.resetState"></a>

```go
func ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.providerConfigs">ProviderConfigs</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList">IdentityPlatformConfigMfaProviderConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.enabledProvidersInput">EnabledProvidersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.providerConfigsInput">ProviderConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.enabledProviders">EnabledProviders</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProviderConfigs`<sup>Required</sup> <a name="ProviderConfigs" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.providerConfigs"></a>

```go
func ProviderConfigs() IdentityPlatformConfigMfaProviderConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList">IdentityPlatformConfigMfaProviderConfigsList</a>

---

##### `EnabledProvidersInput`<sup>Optional</sup> <a name="EnabledProvidersInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.enabledProvidersInput"></a>

```go
func EnabledProvidersInput() *[]*string
```

- *Type:* *[]*string

---

##### `ProviderConfigsInput`<sup>Optional</sup> <a name="ProviderConfigsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.providerConfigsInput"></a>

```go
func ProviderConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `EnabledProviders`<sup>Required</sup> <a name="EnabledProviders" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.enabledProviders"></a>

```go
func EnabledProviders() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigMfa
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfa">IdentityPlatformConfigMfa</a>

---


### IdentityPlatformConfigMfaProviderConfigsList <a name="IdentityPlatformConfigMfaProviderConfigsList" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigMfaProviderConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityPlatformConfigMfaProviderConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.get"></a>

```go
func Get(index *f64) IdentityPlatformConfigMfaProviderConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityPlatformConfigMfaProviderConfigsOutputReference <a name="IdentityPlatformConfigMfaProviderConfigsOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigMfaProviderConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityPlatformConfigMfaProviderConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.putTotpProviderConfig">PutTotpProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resetTotpProviderConfig">ResetTotpProviderConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTotpProviderConfig` <a name="PutTotpProviderConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.putTotpProviderConfig"></a>

```go
func PutTotpProviderConfig(value IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.putTotpProviderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a>

---

##### `ResetState` <a name="ResetState" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resetState"></a>

```go
func ResetState()
```

##### `ResetTotpProviderConfig` <a name="ResetTotpProviderConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.resetTotpProviderConfig"></a>

```go
func ResetTotpProviderConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.totpProviderConfig">TotpProviderConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.totpProviderConfigInput">TotpProviderConfigInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TotpProviderConfig`<sup>Required</sup> <a name="TotpProviderConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.totpProviderConfig"></a>

```go
func TotpProviderConfig() IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TotpProviderConfigInput`<sup>Optional</sup> <a name="TotpProviderConfigInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.totpProviderConfigInput"></a>

```go
func TotpProviderConfigInput() IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference <a name="IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resetAdjacentIntervals">ResetAdjacentIntervals</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdjacentIntervals` <a name="ResetAdjacentIntervals" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.resetAdjacentIntervals"></a>

```go
func ResetAdjacentIntervals()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.adjacentIntervalsInput">AdjacentIntervalsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.adjacentIntervals">AdjacentIntervals</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdjacentIntervalsInput`<sup>Optional</sup> <a name="AdjacentIntervalsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.adjacentIntervalsInput"></a>

```go
func AdjacentIntervalsInput() *f64
```

- *Type:* *f64

---

##### `AdjacentIntervals`<sup>Required</sup> <a name="AdjacentIntervals" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.adjacentIntervals"></a>

```go
func AdjacentIntervals() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig">IdentityPlatformConfigMfaProviderConfigsTotpProviderConfig</a>

---


### IdentityPlatformConfigMonitoringOutputReference <a name="IdentityPlatformConfigMonitoringOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigMonitoringOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigMonitoringOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.putRequestLogging">PutRequestLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.resetRequestLogging">ResetRequestLogging</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRequestLogging` <a name="PutRequestLogging" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.putRequestLogging"></a>

```go
func PutRequestLogging(value IdentityPlatformConfigMonitoringRequestLogging)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.putRequestLogging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a>

---

##### `ResetRequestLogging` <a name="ResetRequestLogging" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.resetRequestLogging"></a>

```go
func ResetRequestLogging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.requestLogging">RequestLogging</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference">IdentityPlatformConfigMonitoringRequestLoggingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.requestLoggingInput">RequestLoggingInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RequestLogging`<sup>Required</sup> <a name="RequestLogging" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.requestLogging"></a>

```go
func RequestLogging() IdentityPlatformConfigMonitoringRequestLoggingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference">IdentityPlatformConfigMonitoringRequestLoggingOutputReference</a>

---

##### `RequestLoggingInput`<sup>Optional</sup> <a name="RequestLoggingInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.requestLoggingInput"></a>

```go
func RequestLoggingInput() IdentityPlatformConfigMonitoringRequestLogging
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigMonitoring
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoring">IdentityPlatformConfigMonitoring</a>

---


### IdentityPlatformConfigMonitoringRequestLoggingOutputReference <a name="IdentityPlatformConfigMonitoringRequestLoggingOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigMonitoringRequestLoggingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigMonitoringRequestLoggingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLoggingOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigMonitoringRequestLogging
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMonitoringRequestLogging">IdentityPlatformConfigMonitoringRequestLogging</a>

---


### IdentityPlatformConfigMultiTenantOutputReference <a name="IdentityPlatformConfigMultiTenantOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigMultiTenantOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigMultiTenantOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resetAllowTenants">ResetAllowTenants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resetDefaultTenantLocation">ResetDefaultTenantLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowTenants` <a name="ResetAllowTenants" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resetAllowTenants"></a>

```go
func ResetAllowTenants()
```

##### `ResetDefaultTenantLocation` <a name="ResetDefaultTenantLocation" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.resetDefaultTenantLocation"></a>

```go
func ResetDefaultTenantLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.allowTenantsInput">AllowTenantsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.defaultTenantLocationInput">DefaultTenantLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.allowTenants">AllowTenants</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.defaultTenantLocation">DefaultTenantLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowTenantsInput`<sup>Optional</sup> <a name="AllowTenantsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.allowTenantsInput"></a>

```go
func AllowTenantsInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultTenantLocationInput`<sup>Optional</sup> <a name="DefaultTenantLocationInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.defaultTenantLocationInput"></a>

```go
func DefaultTenantLocationInput() *string
```

- *Type:* *string

---

##### `AllowTenants`<sup>Required</sup> <a name="AllowTenants" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.allowTenants"></a>

```go
func AllowTenants() interface{}
```

- *Type:* interface{}

---

##### `DefaultTenantLocation`<sup>Required</sup> <a name="DefaultTenantLocation" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.defaultTenantLocation"></a>

```go
func DefaultTenantLocation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenantOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigMultiTenant
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigMultiTenant">IdentityPlatformConfigMultiTenant</a>

---


### IdentityPlatformConfigQuotaOutputReference <a name="IdentityPlatformConfigQuotaOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigQuotaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigQuotaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.putSignUpQuotaConfig">PutSignUpQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.resetSignUpQuotaConfig">ResetSignUpQuotaConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSignUpQuotaConfig` <a name="PutSignUpQuotaConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.putSignUpQuotaConfig"></a>

```go
func PutSignUpQuotaConfig(value IdentityPlatformConfigQuotaSignUpQuotaConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.putSignUpQuotaConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a>

---

##### `ResetSignUpQuotaConfig` <a name="ResetSignUpQuotaConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.resetSignUpQuotaConfig"></a>

```go
func ResetSignUpQuotaConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfig">SignUpQuotaConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference">IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfigInput">SignUpQuotaConfigInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SignUpQuotaConfig`<sup>Required</sup> <a name="SignUpQuotaConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfig"></a>

```go
func SignUpQuotaConfig() IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference">IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference</a>

---

##### `SignUpQuotaConfigInput`<sup>Optional</sup> <a name="SignUpQuotaConfigInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.signUpQuotaConfigInput"></a>

```go
func SignUpQuotaConfigInput() IdentityPlatformConfigQuotaSignUpQuotaConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigQuota
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuota">IdentityPlatformConfigQuota</a>

---


### IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference <a name="IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuota">ResetQuota</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuotaDuration">ResetQuotaDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetStartTime">ResetStartTime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetQuota` <a name="ResetQuota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuota"></a>

```go
func ResetQuota()
```

##### `ResetQuotaDuration` <a name="ResetQuotaDuration" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetQuotaDuration"></a>

```go
func ResetQuotaDuration()
```

##### `ResetStartTime` <a name="ResetStartTime" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.resetStartTime"></a>

```go
func ResetStartTime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDurationInput">QuotaDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaInput">QuotaInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quota">Quota</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDuration">QuotaDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `QuotaDurationInput`<sup>Optional</sup> <a name="QuotaDurationInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDurationInput"></a>

```go
func QuotaDurationInput() *string
```

- *Type:* *string

---

##### `QuotaInput`<sup>Optional</sup> <a name="QuotaInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaInput"></a>

```go
func QuotaInput() *f64
```

- *Type:* *f64

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `Quota`<sup>Required</sup> <a name="Quota" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quota"></a>

```go
func Quota() *f64
```

- *Type:* *f64

---

##### `QuotaDuration`<sup>Required</sup> <a name="QuotaDuration" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.quotaDuration"></a>

```go
func QuotaDuration() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigQuotaSignUpQuotaConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigQuotaSignUpQuotaConfig">IdentityPlatformConfigQuotaSignUpQuotaConfig</a>

---


### IdentityPlatformConfigSignInAnonymousOutputReference <a name="IdentityPlatformConfigSignInAnonymousOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigSignInAnonymousOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigSignInAnonymousOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigSignInAnonymous
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a>

---


### IdentityPlatformConfigSignInEmailOutputReference <a name="IdentityPlatformConfigSignInEmailOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigSignInEmailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigSignInEmailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.resetPasswordRequired">ResetPasswordRequired</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPasswordRequired` <a name="ResetPasswordRequired" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.resetPasswordRequired"></a>

```go
func ResetPasswordRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.passwordRequiredInput">PasswordRequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.passwordRequired">PasswordRequired</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordRequiredInput`<sup>Optional</sup> <a name="PasswordRequiredInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.passwordRequiredInput"></a>

```go
func PasswordRequiredInput() interface{}
```

- *Type:* interface{}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `PasswordRequired`<sup>Required</sup> <a name="PasswordRequired" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.passwordRequired"></a>

```go
func PasswordRequired() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigSignInEmail
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a>

---


### IdentityPlatformConfigSignInHashConfigList <a name="IdentityPlatformConfigSignInHashConfigList" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigSignInHashConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IdentityPlatformConfigSignInHashConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.get"></a>

```go
func Get(index *f64) IdentityPlatformConfigSignInHashConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### IdentityPlatformConfigSignInHashConfigOutputReference <a name="IdentityPlatformConfigSignInHashConfigOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigSignInHashConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IdentityPlatformConfigSignInHashConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.algorithm">Algorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.memoryCost">MemoryCost</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.rounds">Rounds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.saltSeparator">SaltSeparator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.signerKey">SignerKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfig">IdentityPlatformConfigSignInHashConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.algorithm"></a>

```go
func Algorithm() *string
```

- *Type:* *string

---

##### `MemoryCost`<sup>Required</sup> <a name="MemoryCost" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.memoryCost"></a>

```go
func MemoryCost() *f64
```

- *Type:* *f64

---

##### `Rounds`<sup>Required</sup> <a name="Rounds" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.rounds"></a>

```go
func Rounds() *f64
```

- *Type:* *f64

---

##### `SaltSeparator`<sup>Required</sup> <a name="SaltSeparator" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.saltSeparator"></a>

```go
func SaltSeparator() *string
```

- *Type:* *string

---

##### `SignerKey`<sup>Required</sup> <a name="SignerKey" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.signerKey"></a>

```go
func SignerKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigSignInHashConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfig">IdentityPlatformConfigSignInHashConfig</a>

---


### IdentityPlatformConfigSignInOutputReference <a name="IdentityPlatformConfigSignInOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigSignInOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigSignInOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putAnonymous">PutAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putEmail">PutEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putPhoneNumber">PutPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetAllowDuplicateEmails">ResetAllowDuplicateEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetAnonymous">ResetAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAnonymous` <a name="PutAnonymous" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putAnonymous"></a>

```go
func PutAnonymous(value IdentityPlatformConfigSignInAnonymous)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putAnonymous.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a>

---

##### `PutEmail` <a name="PutEmail" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putEmail"></a>

```go
func PutEmail(value IdentityPlatformConfigSignInEmail)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putEmail.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a>

---

##### `PutPhoneNumber` <a name="PutPhoneNumber" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putPhoneNumber"></a>

```go
func PutPhoneNumber(value IdentityPlatformConfigSignInPhoneNumber)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.putPhoneNumber.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a>

---

##### `ResetAllowDuplicateEmails` <a name="ResetAllowDuplicateEmails" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetAllowDuplicateEmails"></a>

```go
func ResetAllowDuplicateEmails()
```

##### `ResetAnonymous` <a name="ResetAnonymous" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetAnonymous"></a>

```go
func ResetAnonymous()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetEmail"></a>

```go
func ResetEmail()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.anonymous">Anonymous</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference">IdentityPlatformConfigSignInAnonymousOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.email">Email</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference">IdentityPlatformConfigSignInEmailOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.hashConfig">HashConfig</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList">IdentityPlatformConfigSignInHashConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference">IdentityPlatformConfigSignInPhoneNumberOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.allowDuplicateEmailsInput">AllowDuplicateEmailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.anonymousInput">AnonymousInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.emailInput">EmailInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.allowDuplicateEmails">AllowDuplicateEmails</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Anonymous`<sup>Required</sup> <a name="Anonymous" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.anonymous"></a>

```go
func Anonymous() IdentityPlatformConfigSignInAnonymousOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymousOutputReference">IdentityPlatformConfigSignInAnonymousOutputReference</a>

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.email"></a>

```go
func Email() IdentityPlatformConfigSignInEmailOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmailOutputReference">IdentityPlatformConfigSignInEmailOutputReference</a>

---

##### `HashConfig`<sup>Required</sup> <a name="HashConfig" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.hashConfig"></a>

```go
func HashConfig() IdentityPlatformConfigSignInHashConfigList
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInHashConfigList">IdentityPlatformConfigSignInHashConfigList</a>

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() IdentityPlatformConfigSignInPhoneNumberOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference">IdentityPlatformConfigSignInPhoneNumberOutputReference</a>

---

##### `AllowDuplicateEmailsInput`<sup>Optional</sup> <a name="AllowDuplicateEmailsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.allowDuplicateEmailsInput"></a>

```go
func AllowDuplicateEmailsInput() interface{}
```

- *Type:* interface{}

---

##### `AnonymousInput`<sup>Optional</sup> <a name="AnonymousInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.anonymousInput"></a>

```go
func AnonymousInput() IdentityPlatformConfigSignInAnonymous
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInAnonymous">IdentityPlatformConfigSignInAnonymous</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.emailInput"></a>

```go
func EmailInput() IdentityPlatformConfigSignInEmail
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInEmail">IdentityPlatformConfigSignInEmail</a>

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() IdentityPlatformConfigSignInPhoneNumber
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a>

---

##### `AllowDuplicateEmails`<sup>Required</sup> <a name="AllowDuplicateEmails" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.allowDuplicateEmails"></a>

```go
func AllowDuplicateEmails() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigSignIn
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignIn">IdentityPlatformConfigSignIn</a>

---


### IdentityPlatformConfigSignInPhoneNumberOutputReference <a name="IdentityPlatformConfigSignInPhoneNumberOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigSignInPhoneNumberOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigSignInPhoneNumberOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers">ResetTestPhoneNumbers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTestPhoneNumbers` <a name="ResetTestPhoneNumbers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.resetTestPhoneNumbers"></a>

```go
func ResetTestPhoneNumbers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput">TestPhoneNumbersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers">TestPhoneNumbers</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TestPhoneNumbersInput`<sup>Optional</sup> <a name="TestPhoneNumbersInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.testPhoneNumbersInput"></a>

```go
func TestPhoneNumbersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `TestPhoneNumbers`<sup>Required</sup> <a name="TestPhoneNumbers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.testPhoneNumbers"></a>

```go
func TestPhoneNumbers() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumberOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigSignInPhoneNumber
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSignInPhoneNumber">IdentityPlatformConfigSignInPhoneNumber</a>

---


### IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference <a name="IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resetDisallowedRegions">ResetDisallowedRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisallowedRegions` <a name="ResetDisallowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.resetDisallowedRegions"></a>

```go
func ResetDisallowedRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.disallowedRegionsInput">DisallowedRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.disallowedRegions">DisallowedRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisallowedRegionsInput`<sup>Optional</sup> <a name="DisallowedRegionsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.disallowedRegionsInput"></a>

```go
func DisallowedRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisallowedRegions`<sup>Required</sup> <a name="DisallowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.disallowedRegions"></a>

```go
func DisallowedRegions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigSmsRegionConfigAllowByDefault
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a>

---


### IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference <a name="IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resetAllowedRegions">ResetAllowedRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowedRegions` <a name="ResetAllowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.resetAllowedRegions"></a>

```go
func ResetAllowedRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.allowedRegionsInput">AllowedRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.allowedRegions">AllowedRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedRegionsInput`<sup>Optional</sup> <a name="AllowedRegionsInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.allowedRegionsInput"></a>

```go
func AllowedRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedRegions`<sup>Required</sup> <a name="AllowedRegions" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.allowedRegions"></a>

```go
func AllowedRegions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigSmsRegionConfigAllowlistOnly
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a>

---


### IdentityPlatformConfigSmsRegionConfigOutputReference <a name="IdentityPlatformConfigSmsRegionConfigOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigSmsRegionConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigSmsRegionConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowByDefault">PutAllowByDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowlistOnly">PutAllowlistOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resetAllowByDefault">ResetAllowByDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resetAllowlistOnly">ResetAllowlistOnly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowByDefault` <a name="PutAllowByDefault" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowByDefault"></a>

```go
func PutAllowByDefault(value IdentityPlatformConfigSmsRegionConfigAllowByDefault)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowByDefault.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a>

---

##### `PutAllowlistOnly` <a name="PutAllowlistOnly" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowlistOnly"></a>

```go
func PutAllowlistOnly(value IdentityPlatformConfigSmsRegionConfigAllowlistOnly)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.putAllowlistOnly.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a>

---

##### `ResetAllowByDefault` <a name="ResetAllowByDefault" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resetAllowByDefault"></a>

```go
func ResetAllowByDefault()
```

##### `ResetAllowlistOnly` <a name="ResetAllowlistOnly" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.resetAllowlistOnly"></a>

```go
func ResetAllowlistOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowByDefault">AllowByDefault</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference">IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowlistOnly">AllowlistOnly</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference">IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowByDefaultInput">AllowByDefaultInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowlistOnlyInput">AllowlistOnlyInput</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowByDefault`<sup>Required</sup> <a name="AllowByDefault" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowByDefault"></a>

```go
func AllowByDefault() IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference">IdentityPlatformConfigSmsRegionConfigAllowByDefaultOutputReference</a>

---

##### `AllowlistOnly`<sup>Required</sup> <a name="AllowlistOnly" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowlistOnly"></a>

```go
func AllowlistOnly() IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference">IdentityPlatformConfigSmsRegionConfigAllowlistOnlyOutputReference</a>

---

##### `AllowByDefaultInput`<sup>Optional</sup> <a name="AllowByDefaultInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowByDefaultInput"></a>

```go
func AllowByDefaultInput() IdentityPlatformConfigSmsRegionConfigAllowByDefault
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowByDefault">IdentityPlatformConfigSmsRegionConfigAllowByDefault</a>

---

##### `AllowlistOnlyInput`<sup>Optional</sup> <a name="AllowlistOnlyInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.allowlistOnlyInput"></a>

```go
func AllowlistOnlyInput() IdentityPlatformConfigSmsRegionConfigAllowlistOnly
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigAllowlistOnly">IdentityPlatformConfigSmsRegionConfigAllowlistOnly</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() IdentityPlatformConfigSmsRegionConfig
```

- *Type:* <a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigSmsRegionConfig">IdentityPlatformConfigSmsRegionConfig</a>

---


### IdentityPlatformConfigTimeoutsOutputReference <a name="IdentityPlatformConfigTimeoutsOutputReference" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/identityplatformconfig"

identityplatformconfig.NewIdentityPlatformConfigTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IdentityPlatformConfigTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.identityPlatformConfig.IdentityPlatformConfigTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



