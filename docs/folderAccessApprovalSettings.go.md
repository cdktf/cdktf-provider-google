# `folderAccessApprovalSettings` Submodule <a name="`folderAccessApprovalSettings` Submodule" id="@cdktf/provider-google.folderAccessApprovalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FolderAccessApprovalSettings <a name="FolderAccessApprovalSettings" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/folder_access_approval_settings google_folder_access_approval_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderaccessapprovalsettings"

folderaccessapprovalsettings.NewFolderAccessApprovalSettings(scope Construct, id *string, config FolderAccessApprovalSettingsConfig) FolderAccessApprovalSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig">FolderAccessApprovalSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig">FolderAccessApprovalSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putEnrolledServices">PutEnrolledServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetActiveKeyVersion">ResetActiveKeyVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetNotificationEmails">ResetNotificationEmails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutEnrolledServices` <a name="PutEnrolledServices" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putEnrolledServices"></a>

```go
func PutEnrolledServices(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putEnrolledServices.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putTimeouts"></a>

```go
func PutTimeouts(value FolderAccessApprovalSettingsTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts">FolderAccessApprovalSettingsTimeouts</a>

---

##### `ResetActiveKeyVersion` <a name="ResetActiveKeyVersion" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetActiveKeyVersion"></a>

```go
func ResetActiveKeyVersion()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetId"></a>

```go
func ResetId()
```

##### `ResetNotificationEmails` <a name="ResetNotificationEmails" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetNotificationEmails"></a>

```go
func ResetNotificationEmails()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderaccessapprovalsettings"

folderaccessapprovalsettings.FolderAccessApprovalSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderaccessapprovalsettings"

folderaccessapprovalsettings.FolderAccessApprovalSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderaccessapprovalsettings"

folderaccessapprovalsettings.FolderAccessApprovalSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.ancestorHasActiveKeyVersion">AncestorHasActiveKeyVersion</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledAncestor">EnrolledAncestor</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledServices">EnrolledServices</a></code> | <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList">FolderAccessApprovalSettingsEnrolledServicesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.invalidKeyVersion">InvalidKeyVersion</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference">FolderAccessApprovalSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.activeKeyVersionInput">ActiveKeyVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledServicesInput">EnrolledServicesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.folderIdInput">FolderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.notificationEmailsInput">NotificationEmailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.folderId">FolderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.notificationEmails">NotificationEmails</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AncestorHasActiveKeyVersion`<sup>Required</sup> <a name="AncestorHasActiveKeyVersion" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.ancestorHasActiveKeyVersion"></a>

```go
func AncestorHasActiveKeyVersion() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnrolledAncestor`<sup>Required</sup> <a name="EnrolledAncestor" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledAncestor"></a>

```go
func EnrolledAncestor() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnrolledServices`<sup>Required</sup> <a name="EnrolledServices" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledServices"></a>

```go
func EnrolledServices() FolderAccessApprovalSettingsEnrolledServicesList
```

- *Type:* <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList">FolderAccessApprovalSettingsEnrolledServicesList</a>

---

##### `InvalidKeyVersion`<sup>Required</sup> <a name="InvalidKeyVersion" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.invalidKeyVersion"></a>

```go
func InvalidKeyVersion() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.timeouts"></a>

```go
func Timeouts() FolderAccessApprovalSettingsTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference">FolderAccessApprovalSettingsTimeoutsOutputReference</a>

---

##### `ActiveKeyVersionInput`<sup>Optional</sup> <a name="ActiveKeyVersionInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.activeKeyVersionInput"></a>

```go
func ActiveKeyVersionInput() *string
```

- *Type:* *string

---

##### `EnrolledServicesInput`<sup>Optional</sup> <a name="EnrolledServicesInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.enrolledServicesInput"></a>

```go
func EnrolledServicesInput() interface{}
```

- *Type:* interface{}

---

##### `FolderIdInput`<sup>Optional</sup> <a name="FolderIdInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.folderIdInput"></a>

```go
func FolderIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NotificationEmailsInput`<sup>Optional</sup> <a name="NotificationEmailsInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.notificationEmailsInput"></a>

```go
func NotificationEmailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ActiveKeyVersion`<sup>Required</sup> <a name="ActiveKeyVersion" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.activeKeyVersion"></a>

```go
func ActiveKeyVersion() *string
```

- *Type:* *string

---

##### `FolderId`<sup>Required</sup> <a name="FolderId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.folderId"></a>

```go
func FolderId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NotificationEmails`<sup>Required</sup> <a name="NotificationEmails" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.notificationEmails"></a>

```go
func NotificationEmails() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### FolderAccessApprovalSettingsConfig <a name="FolderAccessApprovalSettingsConfig" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderaccessapprovalsettings"

&folderaccessapprovalsettings.FolderAccessApprovalSettingsConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnrolledServices: interface{},
	FolderId: *string,
	ActiveKeyVersion: *string,
	Id: *string,
	NotificationEmails: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.enrolledServices">EnrolledServices</a></code> | <code>interface{}</code> | enrolled_services block. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.folderId">FolderId</a></code> | <code>*string</code> | ID of the folder of the access approval settings. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.activeKeyVersion">ActiveKeyVersion</a></code> | <code>*string</code> | The asymmetric crypto key version to use for signing approval requests. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_access_approval_settings#id FolderAccessApprovalSettings#id}. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.notificationEmails">NotificationEmails</a></code> | <code>*[]*string</code> | A list of email addresses to which notifications relating to approval requests should be sent. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts">FolderAccessApprovalSettingsTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnrolledServices`<sup>Required</sup> <a name="EnrolledServices" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.enrolledServices"></a>

```go
EnrolledServices interface{}
```

- *Type:* interface{}

enrolled_services block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_access_approval_settings#enrolled_services FolderAccessApprovalSettings#enrolled_services}

---

##### `FolderId`<sup>Required</sup> <a name="FolderId" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.folderId"></a>

```go
FolderId *string
```

- *Type:* *string

ID of the folder of the access approval settings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_access_approval_settings#folder_id FolderAccessApprovalSettings#folder_id}

---

##### `ActiveKeyVersion`<sup>Optional</sup> <a name="ActiveKeyVersion" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.activeKeyVersion"></a>

```go
ActiveKeyVersion *string
```

- *Type:* *string

The asymmetric crypto key version to use for signing approval requests.

Empty active_key_version indicates that a Google-managed key should be used for signing.
This property will be ignored if set by an ancestor of the resource, and new non-empty values may not be set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_access_approval_settings#active_key_version FolderAccessApprovalSettings#active_key_version}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_access_approval_settings#id FolderAccessApprovalSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NotificationEmails`<sup>Optional</sup> <a name="NotificationEmails" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.notificationEmails"></a>

```go
NotificationEmails *[]*string
```

- *Type:* *[]*string

A list of email addresses to which notifications relating to approval requests should be sent.

Notifications relating to a resource will be sent to all emails in the settings of ancestor
resources of that resource. A maximum of 50 email addresses are allowed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_access_approval_settings#notification_emails FolderAccessApprovalSettings#notification_emails}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsConfig.property.timeouts"></a>

```go
Timeouts FolderAccessApprovalSettingsTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts">FolderAccessApprovalSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_access_approval_settings#timeouts FolderAccessApprovalSettings#timeouts}

---

### FolderAccessApprovalSettingsEnrolledServices <a name="FolderAccessApprovalSettingsEnrolledServices" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderaccessapprovalsettings"

&folderaccessapprovalsettings.FolderAccessApprovalSettingsEnrolledServices {
	CloudProduct: *string,
	EnrollmentLevel: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices.property.cloudProduct">CloudProduct</a></code> | <code>*string</code> | The product for which Access Approval will be enrolled. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices.property.enrollmentLevel">EnrollmentLevel</a></code> | <code>*string</code> | The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"]. |

---

##### `CloudProduct`<sup>Required</sup> <a name="CloudProduct" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices.property.cloudProduct"></a>

```go
CloudProduct *string
```

- *Type:* *string

The product for which Access Approval will be enrolled.

Allowed values are listed (case-sensitive):
all
App Engine
BigQuery
Cloud Bigtable
Cloud Key Management Service
Compute Engine
Cloud Dataflow
Cloud Identity and Access Management
Cloud Pub/Sub
Cloud Storage
Persistent Disk

Note: These values are supported as input, but considered a legacy format:
all
appengine.googleapis.com
bigquery.googleapis.com
bigtable.googleapis.com
cloudkms.googleapis.com
compute.googleapis.com
dataflow.googleapis.com
iam.googleapis.com
pubsub.googleapis.com
storage.googleapis.com

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_access_approval_settings#cloud_product FolderAccessApprovalSettings#cloud_product}

---

##### `EnrollmentLevel`<sup>Optional</sup> <a name="EnrollmentLevel" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServices.property.enrollmentLevel"></a>

```go
EnrollmentLevel *string
```

- *Type:* *string

The enrollment level of the service. Default value: "BLOCK_ALL" Possible values: ["BLOCK_ALL"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_access_approval_settings#enrollment_level FolderAccessApprovalSettings#enrollment_level}

---

### FolderAccessApprovalSettingsTimeouts <a name="FolderAccessApprovalSettingsTimeouts" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderaccessapprovalsettings"

&folderaccessapprovalsettings.FolderAccessApprovalSettingsTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_access_approval_settings#create FolderAccessApprovalSettings#create}. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_access_approval_settings#delete FolderAccessApprovalSettings#delete}. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_access_approval_settings#update FolderAccessApprovalSettings#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_access_approval_settings#create FolderAccessApprovalSettings#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_access_approval_settings#delete FolderAccessApprovalSettings#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/folder_access_approval_settings#update FolderAccessApprovalSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FolderAccessApprovalSettingsEnrolledServicesList <a name="FolderAccessApprovalSettingsEnrolledServicesList" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderaccessapprovalsettings"

folderaccessapprovalsettings.NewFolderAccessApprovalSettingsEnrolledServicesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) FolderAccessApprovalSettingsEnrolledServicesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.get"></a>

```go
func Get(index *f64) FolderAccessApprovalSettingsEnrolledServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FolderAccessApprovalSettingsEnrolledServicesOutputReference <a name="FolderAccessApprovalSettingsEnrolledServicesOutputReference" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderaccessapprovalsettings"

folderaccessapprovalsettings.NewFolderAccessApprovalSettingsEnrolledServicesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) FolderAccessApprovalSettingsEnrolledServicesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel">ResetEnrollmentLevel</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnrollmentLevel` <a name="ResetEnrollmentLevel" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.resetEnrollmentLevel"></a>

```go
func ResetEnrollmentLevel()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput">CloudProductInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput">EnrollmentLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct">CloudProduct</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel">EnrollmentLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudProductInput`<sup>Optional</sup> <a name="CloudProductInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProductInput"></a>

```go
func CloudProductInput() *string
```

- *Type:* *string

---

##### `EnrollmentLevelInput`<sup>Optional</sup> <a name="EnrollmentLevelInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevelInput"></a>

```go
func EnrollmentLevelInput() *string
```

- *Type:* *string

---

##### `CloudProduct`<sup>Required</sup> <a name="CloudProduct" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.cloudProduct"></a>

```go
func CloudProduct() *string
```

- *Type:* *string

---

##### `EnrollmentLevel`<sup>Required</sup> <a name="EnrollmentLevel" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.enrollmentLevel"></a>

```go
func EnrollmentLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsEnrolledServicesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### FolderAccessApprovalSettingsTimeoutsOutputReference <a name="FolderAccessApprovalSettingsTimeoutsOutputReference" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/folderaccessapprovalsettings"

folderaccessapprovalsettings.NewFolderAccessApprovalSettingsTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) FolderAccessApprovalSettingsTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.folderAccessApprovalSettings.FolderAccessApprovalSettingsTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



