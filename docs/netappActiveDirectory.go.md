# `netappActiveDirectory` Submodule <a name="`netappActiveDirectory` Submodule" id="@cdktf/provider-google.netappActiveDirectory"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetappActiveDirectory <a name="NetappActiveDirectory" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory google_netapp_active_directory}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/netappactivedirectory"

netappactivedirectory.NewNetappActiveDirectory(scope Construct, id *string, config NetappActiveDirectoryConfig) NetappActiveDirectory
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig">NetappActiveDirectoryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig">NetappActiveDirectoryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetAdministrators">ResetAdministrators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetAesEncryption">ResetAesEncryption</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetBackupOperators">ResetBackupOperators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetEncryptDcConnections">ResetEncryptDcConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetKdcHostname">ResetKdcHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetKdcIp">ResetKdcIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetLdapSigning">ResetLdapSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetNfsUsersWithLdap">ResetNfsUsersWithLdap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetOrganizationalUnit">ResetOrganizationalUnit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetSecurityOperators">ResetSecurityOperators</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetSite">ResetSite</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.putTimeouts"></a>

```go
func PutTimeouts(value NetappActiveDirectoryTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a>

---

##### `ResetAdministrators` <a name="ResetAdministrators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetAdministrators"></a>

```go
func ResetAdministrators()
```

##### `ResetAesEncryption` <a name="ResetAesEncryption" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetAesEncryption"></a>

```go
func ResetAesEncryption()
```

##### `ResetBackupOperators` <a name="ResetBackupOperators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetBackupOperators"></a>

```go
func ResetBackupOperators()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEncryptDcConnections` <a name="ResetEncryptDcConnections" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetEncryptDcConnections"></a>

```go
func ResetEncryptDcConnections()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetId"></a>

```go
func ResetId()
```

##### `ResetKdcHostname` <a name="ResetKdcHostname" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetKdcHostname"></a>

```go
func ResetKdcHostname()
```

##### `ResetKdcIp` <a name="ResetKdcIp" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetKdcIp"></a>

```go
func ResetKdcIp()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetLdapSigning` <a name="ResetLdapSigning" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetLdapSigning"></a>

```go
func ResetLdapSigning()
```

##### `ResetNfsUsersWithLdap` <a name="ResetNfsUsersWithLdap" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetNfsUsersWithLdap"></a>

```go
func ResetNfsUsersWithLdap()
```

##### `ResetOrganizationalUnit` <a name="ResetOrganizationalUnit" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetOrganizationalUnit"></a>

```go
func ResetOrganizationalUnit()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSecurityOperators` <a name="ResetSecurityOperators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetSecurityOperators"></a>

```go
func ResetSecurityOperators()
```

##### `ResetSite` <a name="ResetSite" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetSite"></a>

```go
func ResetSite()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a NetappActiveDirectory resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/netappactivedirectory"

netappactivedirectory.NetappActiveDirectory_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/netappactivedirectory"

netappactivedirectory.NetappActiveDirectory_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/netappactivedirectory"

netappactivedirectory.NetappActiveDirectory_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/netappactivedirectory"

netappactivedirectory.NetappActiveDirectory_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a NetappActiveDirectory resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetappActiveDirectory to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetappActiveDirectory that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the NetappActiveDirectory to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.stateDetails">StateDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference">NetappActiveDirectoryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.administratorsInput">AdministratorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.aesEncryptionInput">AesEncryptionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.backupOperatorsInput">BackupOperatorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dnsInput">DnsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.domainInput">DomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.encryptDcConnectionsInput">EncryptDcConnectionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcHostnameInput">KdcHostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcIpInput">KdcIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.ldapSigningInput">LdapSigningInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.netBiosPrefixInput">NetBiosPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nfsUsersWithLdapInput">NfsUsersWithLdapInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.organizationalUnitInput">OrganizationalUnitInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.securityOperatorsInput">SecurityOperatorsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.siteInput">SiteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.administrators">Administrators</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.aesEncryption">AesEncryption</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.backupOperators">BackupOperators</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dns">Dns</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.encryptDcConnections">EncryptDcConnections</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcHostname">KdcHostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcIp">KdcIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.ldapSigning">LdapSigning</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.netBiosPrefix">NetBiosPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nfsUsersWithLdap">NfsUsersWithLdap</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.organizationalUnit">OrganizationalUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.securityOperators">SecurityOperators</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.site">Site</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.username">Username</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateDetails`<sup>Required</sup> <a name="StateDetails" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.stateDetails"></a>

```go
func StateDetails() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.timeouts"></a>

```go
func Timeouts() NetappActiveDirectoryTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference">NetappActiveDirectoryTimeoutsOutputReference</a>

---

##### `AdministratorsInput`<sup>Optional</sup> <a name="AdministratorsInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.administratorsInput"></a>

```go
func AdministratorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AesEncryptionInput`<sup>Optional</sup> <a name="AesEncryptionInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.aesEncryptionInput"></a>

```go
func AesEncryptionInput() interface{}
```

- *Type:* interface{}

---

##### `BackupOperatorsInput`<sup>Optional</sup> <a name="BackupOperatorsInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.backupOperatorsInput"></a>

```go
func BackupOperatorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dnsInput"></a>

```go
func DnsInput() *string
```

- *Type:* *string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.domainInput"></a>

```go
func DomainInput() *string
```

- *Type:* *string

---

##### `EncryptDcConnectionsInput`<sup>Optional</sup> <a name="EncryptDcConnectionsInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.encryptDcConnectionsInput"></a>

```go
func EncryptDcConnectionsInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KdcHostnameInput`<sup>Optional</sup> <a name="KdcHostnameInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcHostnameInput"></a>

```go
func KdcHostnameInput() *string
```

- *Type:* *string

---

##### `KdcIpInput`<sup>Optional</sup> <a name="KdcIpInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcIpInput"></a>

```go
func KdcIpInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LdapSigningInput`<sup>Optional</sup> <a name="LdapSigningInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.ldapSigningInput"></a>

```go
func LdapSigningInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetBiosPrefixInput`<sup>Optional</sup> <a name="NetBiosPrefixInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.netBiosPrefixInput"></a>

```go
func NetBiosPrefixInput() *string
```

- *Type:* *string

---

##### `NfsUsersWithLdapInput`<sup>Optional</sup> <a name="NfsUsersWithLdapInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nfsUsersWithLdapInput"></a>

```go
func NfsUsersWithLdapInput() interface{}
```

- *Type:* interface{}

---

##### `OrganizationalUnitInput`<sup>Optional</sup> <a name="OrganizationalUnitInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.organizationalUnitInput"></a>

```go
func OrganizationalUnitInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SecurityOperatorsInput`<sup>Optional</sup> <a name="SecurityOperatorsInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.securityOperatorsInput"></a>

```go
func SecurityOperatorsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SiteInput`<sup>Optional</sup> <a name="SiteInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.siteInput"></a>

```go
func SiteInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Administrators`<sup>Required</sup> <a name="Administrators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.administrators"></a>

```go
func Administrators() *[]*string
```

- *Type:* *[]*string

---

##### `AesEncryption`<sup>Required</sup> <a name="AesEncryption" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.aesEncryption"></a>

```go
func AesEncryption() interface{}
```

- *Type:* interface{}

---

##### `BackupOperators`<sup>Required</sup> <a name="BackupOperators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.backupOperators"></a>

```go
func BackupOperators() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.dns"></a>

```go
func Dns() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `EncryptDcConnections`<sup>Required</sup> <a name="EncryptDcConnections" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.encryptDcConnections"></a>

```go
func EncryptDcConnections() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KdcHostname`<sup>Required</sup> <a name="KdcHostname" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcHostname"></a>

```go
func KdcHostname() *string
```

- *Type:* *string

---

##### `KdcIp`<sup>Required</sup> <a name="KdcIp" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.kdcIp"></a>

```go
func KdcIp() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LdapSigning`<sup>Required</sup> <a name="LdapSigning" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.ldapSigning"></a>

```go
func LdapSigning() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetBiosPrefix`<sup>Required</sup> <a name="NetBiosPrefix" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.netBiosPrefix"></a>

```go
func NetBiosPrefix() *string
```

- *Type:* *string

---

##### `NfsUsersWithLdap`<sup>Required</sup> <a name="NfsUsersWithLdap" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.nfsUsersWithLdap"></a>

```go
func NfsUsersWithLdap() interface{}
```

- *Type:* interface{}

---

##### `OrganizationalUnit`<sup>Required</sup> <a name="OrganizationalUnit" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.organizationalUnit"></a>

```go
func OrganizationalUnit() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SecurityOperators`<sup>Required</sup> <a name="SecurityOperators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.securityOperators"></a>

```go
func SecurityOperators() *[]*string
```

- *Type:* *[]*string

---

##### `Site`<sup>Required</sup> <a name="Site" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.site"></a>

```go
func Site() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectory.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetappActiveDirectoryConfig <a name="NetappActiveDirectoryConfig" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/netappactivedirectory"

&netappactivedirectory.NetappActiveDirectoryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Dns: *string,
	Domain: *string,
	Location: *string,
	Name: *string,
	NetBiosPrefix: *string,
	Password: *string,
	Username: *string,
	Administrators: *[]*string,
	AesEncryption: interface{},
	BackupOperators: *[]*string,
	Description: *string,
	EncryptDcConnections: interface{},
	Id: *string,
	KdcHostname: *string,
	KdcIp: *string,
	Labels: *map[string]*string,
	LdapSigning: interface{},
	NfsUsersWithLdap: interface{},
	OrganizationalUnit: *string,
	Project: *string,
	SecurityOperators: *[]*string,
	Site: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.netappActiveDirectory.NetappActiveDirectoryTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.dns">Dns</a></code> | <code>*string</code> | Comma separated list of DNS server IP addresses for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.domain">Domain</a></code> | <code>*string</code> | Fully qualified domain name for the Active Directory domain. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.location">Location</a></code> | <code>*string</code> | Name of the region for the policy to apply to. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of the Active Directory pool. Needs to be unique per location. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.netBiosPrefix">NetBiosPrefix</a></code> | <code>*string</code> | NetBIOS name prefix of the server to be created. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.password">Password</a></code> | <code>*string</code> | Password for specified username. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.username">Username</a></code> | <code>*string</code> | Username for the Active Directory account with permissions to create the compute account within the specified organizational unit. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.administrators">Administrators</a></code> | <code>*[]*string</code> | Domain user accounts to be added to the local Administrators group of the SMB service. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.aesEncryption">AesEncryption</a></code> | <code>interface{}</code> | Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.backupOperators">BackupOperators</a></code> | <code>*[]*string</code> | Domain user/group accounts to be added to the Backup Operators group of the SMB service. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.description">Description</a></code> | <code>*string</code> | An optional description of this resource. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.encryptDcConnections">EncryptDcConnections</a></code> | <code>interface{}</code> | If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#id NetappActiveDirectory#id}. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.kdcHostname">KdcHostname</a></code> | <code>*string</code> | Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only requried for volumes using kerberized NFSv4.1. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.kdcIp">KdcIp</a></code> | <code>*string</code> | IP address of the Active Directory server used as Kerberos Key Distribution Center. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.ldapSigning">LdapSigning</a></code> | <code>interface{}</code> | Specifies whether or not the LDAP traffic needs to be signed. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.nfsUsersWithLdap">NfsUsersWithLdap</a></code> | <code>interface{}</code> | Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.organizationalUnit">OrganizationalUnit</a></code> | <code>*string</code> | Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#project NetappActiveDirectory#project}. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.securityOperators">SecurityOperators</a></code> | <code>*[]*string</code> | Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.site">Site</a></code> | <code>*string</code> | Specifies an Active Directory site to manage domain controller selection. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.dns"></a>

```go
Dns *string
```

- *Type:* *string

Comma separated list of DNS server IP addresses for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#dns NetappActiveDirectory#dns}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.domain"></a>

```go
Domain *string
```

- *Type:* *string

Fully qualified domain name for the Active Directory domain.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#domain NetappActiveDirectory#domain}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Name of the region for the policy to apply to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#location NetappActiveDirectory#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the Active Directory pool. Needs to be unique per location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#name NetappActiveDirectory#name}

---

##### `NetBiosPrefix`<sup>Required</sup> <a name="NetBiosPrefix" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.netBiosPrefix"></a>

```go
NetBiosPrefix *string
```

- *Type:* *string

NetBIOS name prefix of the server to be created.

A five-character random ID is generated automatically, for example, -6f9a, and appended to the prefix. The full UNC share path will have the following format:
'\NetBIOS_PREFIX-ABCD.DOMAIN_NAME\SHARE_NAME'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#net_bios_prefix NetappActiveDirectory#net_bios_prefix}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for specified username.

Note - Manual changes done to the password will not be detected. Terraform will not re-apply the password, unless you use a new password in Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#password NetappActiveDirectory#password}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for the Active Directory account with permissions to create the compute account within the specified organizational unit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#username NetappActiveDirectory#username}

---

##### `Administrators`<sup>Optional</sup> <a name="Administrators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.administrators"></a>

```go
Administrators *[]*string
```

- *Type:* *[]*string

Domain user accounts to be added to the local Administrators group of the SMB service.

Comma-separated list of domain users or groups. The Domain Admin group is automatically added when the service joins your domain as a hidden group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#administrators NetappActiveDirectory#administrators}

---

##### `AesEncryption`<sup>Optional</sup> <a name="AesEncryption" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.aesEncryption"></a>

```go
AesEncryption interface{}
```

- *Type:* interface{}

Enables AES-128 and AES-256 encryption for Kerberos-based communication with Active Directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#aes_encryption NetappActiveDirectory#aes_encryption}

---

##### `BackupOperators`<sup>Optional</sup> <a name="BackupOperators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.backupOperators"></a>

```go
BackupOperators *[]*string
```

- *Type:* *[]*string

Domain user/group accounts to be added to the Backup Operators group of the SMB service.

The Backup Operators group allows members to backup and restore files regardless of whether they have read or write access to the files. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#backup_operators NetappActiveDirectory#backup_operators}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#description NetappActiveDirectory#description}

---

##### `EncryptDcConnections`<sup>Optional</sup> <a name="EncryptDcConnections" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.encryptDcConnections"></a>

```go
EncryptDcConnections interface{}
```

- *Type:* interface{}

If enabled, traffic between the SMB server to Domain Controller (DC) will be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#encrypt_dc_connections NetappActiveDirectory#encrypt_dc_connections}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#id NetappActiveDirectory#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KdcHostname`<sup>Optional</sup> <a name="KdcHostname" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.kdcHostname"></a>

```go
KdcHostname *string
```

- *Type:* *string

Hostname of the Active Directory server used as Kerberos Key Distribution Center. Only requried for volumes using kerberized NFSv4.1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#kdc_hostname NetappActiveDirectory#kdc_hostname}

---

##### `KdcIp`<sup>Optional</sup> <a name="KdcIp" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.kdcIp"></a>

```go
KdcIp *string
```

- *Type:* *string

IP address of the Active Directory server used as Kerberos Key Distribution Center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#kdc_ip NetappActiveDirectory#kdc_ip}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels as key value pairs. Example: '{ "owner": "Bob", "department": "finance", "purpose": "testing" }'.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#labels NetappActiveDirectory#labels}

---

##### `LdapSigning`<sup>Optional</sup> <a name="LdapSigning" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.ldapSigning"></a>

```go
LdapSigning interface{}
```

- *Type:* interface{}

Specifies whether or not the LDAP traffic needs to be signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#ldap_signing NetappActiveDirectory#ldap_signing}

---

##### `NfsUsersWithLdap`<sup>Optional</sup> <a name="NfsUsersWithLdap" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.nfsUsersWithLdap"></a>

```go
NfsUsersWithLdap interface{}
```

- *Type:* interface{}

Local UNIX users on clients without valid user information in Active Directory are blocked from access to LDAP enabled volumes.

This option can be used to temporarily switch such volumes to AUTH_SYS authentication (user ID + 1-16 groups).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#nfs_users_with_ldap NetappActiveDirectory#nfs_users_with_ldap}

---

##### `OrganizationalUnit`<sup>Optional</sup> <a name="OrganizationalUnit" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.organizationalUnit"></a>

```go
OrganizationalUnit *string
```

- *Type:* *string

Name of the Organizational Unit where you intend to create the computer account for NetApp Volumes.

Defaults to 'CN=Computers' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#organizational_unit NetappActiveDirectory#organizational_unit}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#project NetappActiveDirectory#project}.

---

##### `SecurityOperators`<sup>Optional</sup> <a name="SecurityOperators" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.securityOperators"></a>

```go
SecurityOperators *[]*string
```

- *Type:* *[]*string

Domain accounts that require elevated privileges such as 'SeSecurityPrivilege' to manage security logs. Comma-separated list.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#security_operators NetappActiveDirectory#security_operators}

---

##### `Site`<sup>Optional</sup> <a name="Site" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.site"></a>

```go
Site *string
```

- *Type:* *string

Specifies an Active Directory site to manage domain controller selection.

Use when Active Directory domain controllers in multiple regions are configured. Defaults to 'Default-First-Site-Name' if left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#site NetappActiveDirectory#site}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryConfig.property.timeouts"></a>

```go
Timeouts NetappActiveDirectoryTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts">NetappActiveDirectoryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#timeouts NetappActiveDirectory#timeouts}

---

### NetappActiveDirectoryTimeouts <a name="NetappActiveDirectoryTimeouts" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/netappactivedirectory"

&netappactivedirectory.NetappActiveDirectoryTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#create NetappActiveDirectory#create}. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#delete NetappActiveDirectory#delete}. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#update NetappActiveDirectory#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#create NetappActiveDirectory#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#delete NetappActiveDirectory#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/netapp_active_directory#update NetappActiveDirectory#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetappActiveDirectoryTimeoutsOutputReference <a name="NetappActiveDirectoryTimeoutsOutputReference" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/netappactivedirectory"

netappactivedirectory.NewNetappActiveDirectoryTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetappActiveDirectoryTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.netappActiveDirectory.NetappActiveDirectoryTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



