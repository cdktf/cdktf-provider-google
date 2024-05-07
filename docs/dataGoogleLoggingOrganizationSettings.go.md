# `dataGoogleLoggingOrganizationSettings` Submodule <a name="`dataGoogleLoggingOrganizationSettings` Submodule" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleLoggingOrganizationSettings <a name="DataGoogleLoggingOrganizationSettings" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/data-sources/logging_organization_settings google_logging_organization_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleloggingorganizationsettings"

datagoogleloggingorganizationsettings.NewDataGoogleLoggingOrganizationSettings(scope Construct, id *string, config DataGoogleLoggingOrganizationSettingsConfig) DataGoogleLoggingOrganizationSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig">DataGoogleLoggingOrganizationSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig">DataGoogleLoggingOrganizationSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleLoggingOrganizationSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleloggingorganizationsettings"

datagoogleloggingorganizationsettings.DataGoogleLoggingOrganizationSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleloggingorganizationsettings"

datagoogleloggingorganizationsettings.DataGoogleLoggingOrganizationSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleloggingorganizationsettings"

datagoogleloggingorganizationsettings.DataGoogleLoggingOrganizationSettings_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleloggingorganizationsettings"

datagoogleloggingorganizationsettings.DataGoogleLoggingOrganizationSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleLoggingOrganizationSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleLoggingOrganizationSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleLoggingOrganizationSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/data-sources/logging_organization_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleLoggingOrganizationSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.disableDefaultSink">DisableDefaultSink</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.kmsKeyName">KmsKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.kmsServiceAccountId">KmsServiceAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.loggingServiceAccountId">LoggingServiceAccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.storageLocation">StorageLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DisableDefaultSink`<sup>Required</sup> <a name="DisableDefaultSink" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.disableDefaultSink"></a>

```go
func DisableDefaultSink() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `KmsKeyName`<sup>Required</sup> <a name="KmsKeyName" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.kmsKeyName"></a>

```go
func KmsKeyName() *string
```

- *Type:* *string

---

##### `KmsServiceAccountId`<sup>Required</sup> <a name="KmsServiceAccountId" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.kmsServiceAccountId"></a>

```go
func KmsServiceAccountId() *string
```

- *Type:* *string

---

##### `LoggingServiceAccountId`<sup>Required</sup> <a name="LoggingServiceAccountId" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.loggingServiceAccountId"></a>

```go
func LoggingServiceAccountId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `StorageLocation`<sup>Required</sup> <a name="StorageLocation" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.storageLocation"></a>

```go
func StorageLocation() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleLoggingOrganizationSettingsConfig <a name="DataGoogleLoggingOrganizationSettingsConfig" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/datagoogleloggingorganizationsettings"

&datagoogleloggingorganizationsettings.DataGoogleLoggingOrganizationSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Organization: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.organization">Organization</a></code> | <code>*string</code> | The organization for which to retrieve settings. |
| <code><a href="#@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/data-sources/logging_organization_settings#id DataGoogleLoggingOrganizationSettings#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

The organization for which to retrieve settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/data-sources/logging_organization_settings#organization DataGoogleLoggingOrganizationSettings#organization}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataGoogleLoggingOrganizationSettings.DataGoogleLoggingOrganizationSettingsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.28.0/docs/data-sources/logging_organization_settings#id DataGoogleLoggingOrganizationSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



